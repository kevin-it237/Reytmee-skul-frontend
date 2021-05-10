import React, { useState, useEffect } from 'react';
import Modals from '../../../../app/components/modals/modal';
import Button from '../../../../app/components/buttons/button/button';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Dropdown} from 'react-bootstrap'; 
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import BootStrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {Redirect, useHistory} from 'react-router-dom';
import Footer from '../../../../app/components/footer/footer';
import '../../../../app/components/sidebar/sidebar'
import Sidebar from '../../../../app/components/sidebar/sidebar';
import Topbar from '../../../../app/components/topbar/topbar';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './lesson.scss';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';



const  CreateLesson = ({onChildClickBackAll}) => {
    const history = useHistory();

    const [objectiveEditorState, setObjectiveEditorState] = useState(()=>EditorState.createEmpty());
    const [outlineEditorState, setOutlineEditorState] = useState(()=>EditorState.createEmpty());
    const [homeworkEditorState, setHomeworkEditorState] = useState(()=>EditorState.createEmpty());
    const [evaluationEditorState, setEvaluationEditorState] = useState(()=>EditorState.createEmpty());

    const [convertedObjectiveContent, setConvertedObjectiveContent] = useState(null);
    const [convertedOutlineContent, setConvertedOutlineContent] = useState(null);
    const [convertedHomeworkContent, setConvertedHomeworkContent] = useState(null);
    const [convertedEvaluationContent, setConvertedEvaluationContent] = useState(null);

    const [selectedFile, setSelectedFile] = useState([{nameFile: '', sizeFile: '' }]);
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [showModal,setShowModal] = useState(false);
    const [createLessonForm,setCreateLessonForm] = useState({name: "", description: ""});
    const [displaySide,setDisplaySide] = useState('none');

    
    const [showCreateCourse,setShowCreateCourse] = useState(false);
    const [showCourse,setShowCourse] = useState(true);
    
    const handleObjectiveEditorChange = (state) => {
        setObjectiveEditorState(state);
        convertObjectiveContentToHTML();
    }
    const handleOutlineEditorChange = (state) => {
        setOutlineEditorState(state);
        convertOutlineContentToHTML();
    }
    const handleHomeworkEditorChange = (state) => {
        setHomeworkEditorState(state);
        convertHomeworkContentToHTML();
    }
    const handleEvaluationEditorChange = (state) => {
        setEvaluationEditorState(state);
        convertEvaluationContentToHTML();
    }


    const convertObjectiveContentToHTML = () => {
        let currentObjectiveContentAsHTML = convertToHTML(objectiveEditorState.getCurrentContent());
        setConvertedObjectiveContent(currentObjectiveContentAsHTML);
    }
    const convertOutlineContentToHTML = () => {
        let currentOutlineContentAsHTML = convertToHTML(outlineEditorState.getCurrentContent());
        setConvertedOutlineContent(currentOutlineContentAsHTML );
    }
    const convertHomeworkContentToHTML = () => {
        let currentHomeworkContentAsHTML = convertToHTML(homeworkEditorState.getCurrentContent());
        setConvertedHomeworkContent(currentHomeworkContentAsHTML );
    }
    const convertEvaluationContentToHTML = () => {
        let currentEvaluationContentAsHTML = convertToHTML(evaluationEditorState.getCurrentContent());
        setConvertedEvaluationContent(currentEvaluationContentAsHTML);
    }



    const createMarkup = (html) => {
        return {
            __html: DOMPurify.sanitize(html)
        }
    }


    const onChangeCreateLesson = (e) => {
        setCreateLessonForm({...createLessonForm,  [e.target.name]: e.target.value })
        
    }
    const handleClose = () =>{setShowModal(false)}

    const clickBackHandler=(e)=>{
        onChildClickBackAll(e.target.name);
    }

     
    useEffect(()=>{
        
    }, [])

    const handleLogout=()=>{
        history.push('/');
    }

    const outPutEvent=(e)=> {
        if(displaySide == 'none'){
            setDisplaySide('block');
        }else{
            setDisplaySide('none');
        }

    }

    const handleSideNavBody = () => {
        if(displaySide == 'block'){
            setDisplaySide('none');
        }
    }
  
    
    const createNotification = (type) =>{
        return () => {
            switch (type) {
              case 'info':
                NotificationManager.info('Info message');
                break;
              case 'success':
                NotificationManager.success('Success message', 'Title here');
                break;
              case 'warning':
                NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
                break;
              case 'error':
                NotificationManager.error('Error message', 'Click me!', 5000, () => {
                  alert('callback');
                });
                break;
            }
    }}

    const hiddenFileInput = React.useRef(null);

    const handleClickFileInput = (event) => {
        hiddenFileInput.current.click();
        
    };

    
    const changeHandler = (e) => {
        setSelectedFile(selectedFile.concat({nameFile:e.target.files[0].name,sizeFile:e.target.files[0].size}));
    }
  
    const modalcont = {
          title: "Invite Student to course",
          bodycontent: 
             <div>
                
             </div>
    }
    const ContentModal = () => {
        return(
            <Modals 
                show={showModal} 
                onhide={handleClose}
                titlecontent={modalcont.title}
                bodycontent={modalcont.bodycontent}
                footercontent={modalcont.footercontent}
            />
        )
    }
    return(
        
        <div id="wrapper" onClick={handleSideNavBody}>

      

       {/*<!-- Content Wrapper --> */} 
        <div id="content-wrapper" class="d-flex flex-column">
           {/* <!-- Main Content -->*/} 
            <div id="content">

           
               {/*<!-- Begin Page Content --> */} 
                <div className="container">

                  {/*<!-- Page Heading --> */}  
                    
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800"></h1>
                       
                    </div>    

                   {/*<!-- Content Row --> */} 
                     
                            <div class="row">

                            {/* <!-- Earnings (Monthly) Card Example --> */}
                                    <div class="col-xl-3 col-md-3 mb-3">
                                        <div class="card  shadow" style={{backgroundColor:'#17879C'}}>
                                            <div class="card-body">
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col">
                                                        <div onClick={clickBackHandler} class="text-xs font-weight-bold text-white text-center" style={{fontSize:'calc(3px + 2vmin)',cursor:'pointer'}}>
                                                        <i className="fas fa-chevron-left"/> 
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            
                                {/* <!-- Pending Requests Card Example -->*/}  
                                    

                                <div class="col-xl-3 col-md-3 mb-3"></div>
                                    <div class="col-xl-3 col-md-3 mb-3"></div>
                                        <div class="col-xl-3 col-md-3 mb-3">
                                            <div class="card  shadow bg-secondary">
                                                <div class="card-body">
                                                    <div class="row no-gutters align-items-center">
                                                        <div class="col">
                                                                <div onClick={()=>console.log("course setting")} class="text-xs font-weight-bold text-white text-center" style={{fontSize:'calc(3px + 2vmin)',cursor:'pointer'}}>
                                                                <i className="fas fa-save"/>  Save Lesson
                                                                </div>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                         </div>

                         <div class="row mt-5" style={{backgroundColor: '#EFEFEF'}}>
 
                                <div 
                                    className="col-xl-6 col-lg-8 text-center" 
                                    style={{cursor:'pointer',fontSize:'calc(3px + 2vmin)'}}>
                                    <p className='font-weight-bold'>Course Name:</p> 
                                    <p>Arithmétique</p>
                                </div>

                                <div 
                                    className="col-xl-6 col-lg-8 text-center" 
                                    style={{cursor:'pointer',fontSize:'calc(3px + 2vmin)'}}>
                                    <p className='font-weight-bold'>Course Author:</p>
                                    <p>Pierre mvogo</p>
                                </div>
                        </div>

                         <div className='row justify-content-center'>  
                                
                                        <div class="row no-gutters align-items-center" >
                                            <div class="col">
                                                <div onClick={()=>console.log("create lesson")} class="text-xs font-weight-bold text-center">
                                                    <span className='mr-2' style={{fontSize:'calc(10px + 2vmin)'}}>Add Lesson for this Course</span> 
                                                </div>
                                                            
                                            </div>
                                                        
                                        </div>
                         </div>

                         

                  {/*<!-- Content Row --> */}  

                  <div class="row mt-5" style={{backgroundColor: '#EFEFEF'}} >

                       {/*<!-- Area Chart --> */} 
                        <div className="col-xl-12 col-lg-12 container-editor">
                            <header className="editor-header">Lesson Name</header>
                            <input 
                                type='text'
                                className='form-control mb-4'
                                placeholder='Enter Lesson Name here'
                            />
                          
                        </div>
                       
                    </div>

                    <div class="row mt-5" style={{backgroundColor: '#EFEFEF'}} >

                       {/*<!-- Area Chart --> */} 
                        <div className="col-xl-12 col-lg-12 container-editor">
                            <header className="editor-header">Lesson Objective</header>
                            <Editor 
                                editorState={objectiveEditorState}
                                onEditorStateChange={handleObjectiveEditorChange}
                                wrapperClassName="wrapper-class"
                                editorClassName="editor-class"
                                toolbarClassName="toolbar-class"
                            />
                          
                        </div>

                        
                       
                    </div>

                    <div class="row mt-5" style={{backgroundColor: '#EFEFEF'}} >

                       {/*<!-- Area Chart --> */} 
                        <div className="col-xl-12 col-lg-12 container-editor" >
                            <header className='editor-header'>Lesson Outline</header>
                            <Editor 
                                editorState={outlineEditorState}
                                onEditorStateChange={handleOutlineEditorChange}
                                wrapperClassName="wrapper-class"
                                editorClassName="editor-class"
                                toolbarClassName="toolbar-class"
                            />
                          
                        </div>
                       
                    </div>

                    <div class="row mt-5" style={{backgroundColor: '#EFEFEF'}}>

                       {/*<!-- Area Chart --> */} 
                        <div className="col-xl-12 col-lg-12 container-editor">
                            <header className='editor-header'>Lesson Resources</header>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th scope='col'>File Name</th>
                                        <th scope='col'>Size</th>
                                        <th scope='col'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                       {Object.keys(selectedFile).map((value,index)=>{
                                           if(value != 0){
                                               return(
                                                <tr key={index}>
                                                    <td>
                                                        {selectedFile[value].nameFile.split('.').pop() === 'pdf'? 
                                                        <i className="far fa-file-pdf mr-2 text-warning" style={{ fontSize:35+'px'}}/>
                                                        : selectedFile[value].nameFile.split('.').pop() === 'docx' ||  selectedFile[value].nameFile.split('.').pop() === 'doc'?
                                                        <i className="fas fa-file-word mr-2 text-primary" style={{ fontSize:35+'px'}}/> 
                                                        : '' }
                                                        {selectedFile[value].nameFile}
                                                    </td>
                                                    <td>{selectedFile[value].sizeFile/1000} kB</td>
                                                    <td><i className="far fa-window-close" style={{ fontSize:25+'px',color:'#17879C',cursor:'pointer' }}/></td>
                                                </tr> 
                                               )
                                           }
                                       })}
                                </tbody>
                            </table>
                        
                            <div class="col-xl-3 col-md-3 mb-3">
                                            <div class="card  shadow bg-white">
                                                <div class="card-body">
                                                    <div class="row no-gutters align-items-center">
                                                       
                                                        <div class="col">
                                                                <div onClick={handleClickFileInput} class="text-xs font-weight-bold text-center" style={{fontSize:'calc(3px + 2vmin)',cursor:'pointer'}}>
                                                                 Add File
                                                                <input 
                                                                   type="file" 
                                                                   onChange={changeHandler}
                                                                   ref={hiddenFileInput} 
                                                                   style={{display:'none'}} 
                                                                />
                                                                </div>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                        </div>
                            </div>
                          
                        </div>
                       
                    </div>

                    <div class="row mt-5" style={{backgroundColor: '#EFEFEF'}} >

                        <div className="col-xl-12 col-lg-12 container-editor">
                            <div className='editor-header'>Homework</div>
                            <Editor 
                              editorState={homeworkEditorState}
                              onEditorStateChange={handleHomeworkEditorChange}
                              wrapperClassName="wrapper-class"
                              editorClassName="editor-class"
                              toolbarClassName="toolbar-class"
                            />
                          
                        </div>
                       
                    </div>

                    <div class="row mt-5" style={{backgroundColor: '#EFEFEF'}} >

                        <div className="col-xl-12 col-lg-12 container-editor">
                            <div className='editor-header'>Lesson Evaluation</div>
                            <Editor 
                                editorState={evaluationEditorState}
                                onEditorStateChange={handleEvaluationEditorChange}
                                wrapperClassName="wrapper-class"
                                editorClassName="editor-class"
                                toolbarClassName="toolbar-class"
                            />
                          
                        </div>
                       {/* <div dangerouslySetInnerHTML={createMarkup(convertedEvaluationContent)}></div>*/}
                    </div>

                   {/* <!-- Content Row -->*/} 


                   
                     <div class="row mt-5">

                     </div>
              

                </div>
               {/* <!-- /.container-fluid -->*/} 

            </div>
          {/*<!-- End of Main Content --> */}  



           {/*<!-- Footer --> */} 
               
           {/*<!-- End of Footer --> */} 

        </div>
      {/*<!-- End of Content Wrapper --> */}  

    </div>
       
    )
}
export default CreateLesson;