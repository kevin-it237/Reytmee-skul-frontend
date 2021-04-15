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
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Avatar   from 'react-avatar';
import profileImg from '../../../../assets/images/profile_icon.png';
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './lesson.scss';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';



const  CreateLesson = () => {
    const history = useHistory();

    const [objectiveEditorState, setObjectiveEditorState] = useState(()=>EditorState.createEmpty());
    const [outlineEditorState, setOutlineEditorState] = useState(()=>EditorState.createEmpty());
    const [homeworkEditorState, setHomeworkEditorState] = useState(()=>EditorState.createEmpty());
    const [evaluationEditorState, setEvaluationEditorState] = useState(()=>EditorState.createEmpty());

    const [convertedObjectiveContent, setConvertedObjectiveContent] = useState(null);
    const [convertedOutlineContent, setConvertedOutlineContent] = useState(null);
    const [convertedHomeworkContent, setConvertedHomeworkContent] = useState(null);
    const [convertedEvaluationContent, setConvertedEvaluationContent] = useState(null);

    const [selectedFile, setSelectedFile] = useState();
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

    const onSubmit = (e) => {
        e.preventDefault();
          history.push('/teacher/manage/course');
            console.log(e);
    }
     
    useEffect(()=>{
        
    }, [])

    const handleLogout=()=>{
        history.push('/');
    }

    const handleSideNav = () => {
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
        setSelectedFile(e.target.files[0]);
        setIsFilePicked(true);
        
        
    }
    const fileData = [
        {"name": 'programmation_web.docx', "size" : '31'
        },

        {"name": 'Algorithmique.pdf', "size" : '50' 
        },
    ];
    



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

        {/*  <!-- Sidebar -->*/}
        <Sidebar width={260} height={"100%"} display={displaySide}>
                <div style={{marginTop:25+'%'}}>

                    <div className='row' style={{fontSize:12+'px', margin: 2+'px', cursor:'pointer'}} onClick={console.log("home")}>
                           <div className='row bg-white ' style={{marginLeft: 25+'%'}}>
                               <Avatar 
                                    size="100"
                                    round={true}
                                    src={profileImg}
                               /> </div> 
                       
                    </div>
                    <div className='row text-white' style={{fontSize:2+'em',marginLeft: 20+'%'}}>Pierre Mvogo</div>
                    <div className='row text-white' style={{fontSize:1.5+'em',marginLeft: 20+'%'}}>Retymee School</div>
                    <hr/>
                    <div className='row' style={{fontSize:12+'px', margin: 2+'px', cursor:'pointer'}} onClick={()=>setShowCourse(true,setShowCreateCourse(false))}>
                        <div className='col-md-2'><i className="fas fa-tachometer-alt text-white mb-5" style={{ fontSize: '1.75em' }}/></div>
                        <div className='col-md-8 text-white'>Dashboard</div>
                    </div>
                    <hr/>
                    <div className='row' style={{fontSize:12+'px', margin: 2+'px',cursor:'pointer'}} onClick={()=>history.push('/teacher/notifications')}>
                        <div className='col-md-2'><i className="fa fa-bell text-white mb-5" style={{ fontSize: '1.75em' }}/></div>
                        <div className='col-md-8 text-white'>Notifications</div>
                        
                    </div>
                    <hr/>
                    <div className='row' style={{fontSize:12+'px', margin: 2+'px',cursor:'pointer'}} onClick={()=>history.push('/teacher/course/list')}>
                         <div className='col-md-2'><i className="fas fa-tasks text-white mb-5" style={{ fontSize: '1.75em' }} /></div>
                         <div className='col-md-8 text-white'>Manages Courses</div>
                    </div>
                    <hr/>
                    <div className='row' style={{fontSize:12+'px', margin: 2+'px',cursor:'pointer'}} onClick={()=>history.push('/teacher/settings')}>
                         <div className='col-md-2'><i className="fa fa-cog text-white mb-5" style={{ fontSize: '1.75em' }} /></div>
                         <div className='col-md-8 text-white'>Accounts settings</div>
                    </div>
                    <hr/>
                    <div className='row' style={{fontSize:12+'px', margin: 2+'px',cursor:'pointer'}} onClick={()=>history.push('/')}>
                         <div className='col-md-2'><i className="fas fa-sign-out-alt text-white mb-5" style={{ fontSize: '1.75em' }} /></div>
                         <div className='col-md-8 text-white'>Logout</div>
                    </div>
                </div> 
            </Sidebar>
        {/* <!-- End of Sidebar -->*/} 


       {/*<!-- Content Wrapper --> */} 
        <div id="content-wrapper" class="d-flex flex-column">
           {/* <!-- Main Content -->*/} 
            <div id="content">

            

               {/*<!-- Topbar --> */} 
               <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                   

                    <div style={{fontSize: 2+'em'}} className="sidebar-brand d-flex align-items-center justify-content-center">
                        <div className="sidebar-brand-icon  mr-5" style={{cursor:'pointer'}} onClick={handleSideNav}>
                            {displaySide == 'none'? <i class="fas fa-bars text-primary"></i>: displaySide == 'block'? <i class="far fa-window-close text-primary"></i>: ''}
                        </div>

                        <div className="sidebar-brand-icon">
                            <Avatar 
                                size="50"
                                round={true}
                                src={profileImg}
                            />
                        
                        </div>
                        <div className="sidebar-brand-text mx-3"><sup></sup></div>
                    </div>


                    <ul class="navbar-nav ml-auto">


                    <div class="topbar-divider d-none d-sm-block"></div>

                    <Dropdown class="nav-item dropdown no-arrow">
                        <Dropdown.Toggle variant='light' onClick={createNotification('success')}>
                           <NotificationBadge count={5} effect={Effect.SCALE} style={{fontSize:10+'px'}}/>
                           <i className="fas fa-bell text-dark" style={{fontSize:20+'px'}}/>
                        </Dropdown.Toggle>
                        
                        <Dropdown.Menu style={{width: 100+'%', fontSize: 1.5+'em', marginRight: 2+'em'}} class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="userDropdown">

                        <Dropdown.Item  class="dropdown-item mb-4">
                            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profile
                        </Dropdown.Item>

                        <div class="dropdown-divider"></div>
                            <Dropdown.Item onClick={handleLogout} class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" ></i>
                                Logout
                            </Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown class="nav-item dropdown no-arrow ">
                        <Dropdown.Toggle variant='light'>
                        <i className="fas fa-cog text-dark"/>
                        </Dropdown.Toggle>
                        
                        <Dropdown.Menu style={{width: 100+'%', fontSize: 1.5+'em', marginRight: 2+'em'}} class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="userDropdown">

                        <Dropdown.Item onClick={()=>history.push('/teacher/settings')} class="dropdown-item mb-4">
                            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profile
                        </Dropdown.Item>

                        <div class="dropdown-divider"></div>
                            <Dropdown.Item onClick={handleLogout} class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" ></i>
                                Logout
                            </Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>
                   
                </ul>
                
            </nav>
            <NotificationContainer/>
               {/* <!-- End of Topbar -->*/} 


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
                                                        <div onClick={()=>history.push('/teacher/dashboard')} class="text-xs font-weight-bold text-white text-center" style={{fontSize:'calc(3px + 2vmin)',cursor:'pointer'}}>
                                                        <i className="fas fa-chevron-left"/> Dashboard
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
                                    {Object.keys(fileData).map((value,index)=>{ 
                                        <tr>
                                            <td>{fileData[value].name}</td>
                                            <td>{fileData[value].size}</td>
                                            <td><i className="far fa-window-close" style={{ fontSize:25+'px',color:'#17879C',cursor:'pointer' }}/></td>
                                        </tr>
                                       
                                    })}
                                       {isFilePicked?
                                       <tr>
                                                <td>
                                                    {selectedFile.name.split('.').pop() === 'pdf'? 
                                                    <i className="far fa-file-pdf mr-2 text-warning" style={{ fontSize:35+'px'}}/>
                                                    : selectedFile.name.split('.').pop() === 'docx' ||  selectedFile.name.split('.').pop() === 'doc'?
                                                    <i className="fas fa-file-word mr-2 text-warning" style={{ fontSize:35+'px'}}/> : '' }
                                                    {selectedFile.name}
                                                 </td>
                                                <td>{selectedFile.size/1000} kB</td>
                                                <td><i className="far fa-window-close" style={{ fontSize:25+'px',color:'#17879C',cursor:'pointer' }}/></td>
                                      </tr> 

                                      : ''} 
                                    
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
                <Footer />
           {/*<!-- End of Footer --> */} 

        </div>
      {/*<!-- End of Content Wrapper --> */}  

    </div>
       
    )
}
export default CreateLesson;