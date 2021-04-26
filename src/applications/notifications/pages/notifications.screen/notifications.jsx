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
import './notifications.scss';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import Topbar from '../../../../app/components/topbar/topbar';

const Notifications = ({isUserDisplayList,onChildClick}) => {

    const history = useHistory();

    const [evaluationEditorState, setEvaluationEditorState] = useState(()=>EditorState.createEmpty());
    const [convertedEvaluationContent, setConvertedEvaluationContent] = useState(null);
    
    

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [showModal,setShowModal] = useState(false);
    const [createLessonForm,setCreateLessonForm] = useState({name: "", description: ""});
    const [displaySide,setDisplaySide] = useState('none');

    
    const [showCreateCourse,setShowCreateCourse] = useState(false);
    const [showCourse,setShowCourse] = useState(true);
    
   
    const convertEvaluationContentToHTML = () => {
        let currentEvaluationContentAsHTML = convertToHTML(evaluationEditorState.getCurrentContent());
        setConvertedEvaluationContent(currentEvaluationContentAsHTML);
    }

     
    useEffect(()=>{
        
    }, [])
     
    const clickHandler=(e)=>{
        onChildClick(e.target.name);
    }

    
    const handleSideNavBody = () => {
        if(displaySide == 'block'){
            setDisplaySide('none');
        }
    }


    const fileData = [
        {"name": 'programmation_web.docx', "size" : '31'
        },

        {"name": 'Algorithmique.pdf', "size" : '50' 
        },
    ];
    
   
    return(
        <div id="wrapper" onClick={handleSideNavBody}>

        {/*  <!-- Sidebar -->*/}
      
        {/* <!-- End of Sidebar -->*/} 


       {/*<!-- Content Wrapper --> */} 
        <div id="content-wrapper" class="d-flex flex-column">
           {/* <!-- Main Content -->*/} 
            <div id="content">

            

               {/*<!-- Topbar --> */} 
               
               {/* <!-- End of Topbar -->*/} 


               {/*<!-- Begin Page Content --> */} 
                <div className="container">

                  {/*<!-- Page Heading --> */}  
                    
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800"></h1>
                       
                    </div>    

                   {/*<!-- Content Row --> */} 
                     
                            <div class="row">

                            {/* <!-- Earnings (Monthly) Card Example --> 
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
                                    </div>*/}
            
                                {/* <!-- Pending Requests Card Example -->*/}  
                                    

                                <div class="col-xl-3 col-md-3 mb-3"></div>
                                    <div class="col-xl-3 col-md-3 mb-3"></div>
                                      
                                </div>


                         <div className='row'>  
                                
                                        <div class="row no-gutters align-items-center" >
                                            <div class="col">
                                                <div onClick={()=>console.log("create lesson")} class="text-xs font-weight-bold text-center">
                                                    <span className='mr-2' style={{fontSize:'calc(10px + 2vmin)'}}></span> 
                                                </div>
                                                            
                                            </div>
                                                        
                                        </div>
                         </div>

                         

                  {/*<!-- Content Row --> */}  

                    <div class="row mt-5" style={{backgroundColor: '#EFEFEF'}} >
                        {isUserDisplayList==="teacher"?
                        <div className="col-xl-12 col-lg-12 container-editor">
                            
                            <header className="editor-header">Notifications</header>
                            <span className='float-right' style={{cursor:'pointer'}} onClick={clickHandler}><i class="fa fa-window-close fa-2x text-blue-400" ></i></span>
                            <hr />
                            
                            <div className="mt-5 mb-3">
                            <div>View your activity and notification history on Retymee School.</div>
                               <div className='mt-5 mb-3'>
                                   Your Educator Retymee School Notifications
                               </div> 
                            </div>
                        </div>



                        :isUserDisplayList==="student"?
                        <div className="col-xl-12 col-lg-12 container-editor">
                            
                            <header className="editor-header">Notifications</header>
                            <span className='float-right' style={{cursor:'pointer'}} onClick={clickHandler}><i class="fa fa-window-close fa-2x text-blue-400" ></i></span>
                           <hr />
                           
                            <div className="mt-5">
                            <div>View your activity and notification history on Retymee School.</div>
                            <div className="mt-5 mb-3">
                                Your Student Retymee School Notifications
                            </div>
                            </div>
                          
                        </div>
                        
                        :''}
                    </div>





                    <div class="row mt-5" style={{backgroundColor: '#EFEFEF'}} >

                        <div className="col-xl-12 col-lg-12 container-editor">
                            
                            
                          
                        </div>
                       
                    </div>

                    <div class="row mt-5" style={{backgroundColor: '#EFEFEF'}} >

                        <div className="col-xl-12 col-lg-12 container-editor">
                           
                           
                          
                        </div>
                        
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
export default Notifications;