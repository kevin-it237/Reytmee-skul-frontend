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


const NotificationStudent = () => {

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
    
    const handleEvaluationEditorChange = (state) => {
        setEvaluationEditorState(state);
        convertEvaluationContentToHTML();
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


    const onChangeCreate = (e) => {
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
                        <div className='row text-white justify-content-center' style={{fontSize:2+'em'}}>Paul aris</div>
                        <div className='row text-white justify-content-center' style={{fontSize:1.5+'em'}}>Retymee School Student</div>
                        <hr/>
                        <div className='row' style={{fontSize:12+'px', margin: 2+'px', cursor:'pointer'}} onClick={()=>history.push('/student/dashboard')}>
                            <div className='col-md-2'><i className="fas fa-tachometer-alt text-white mb-5" style={{ fontSize: '1.75em' }}/></div>
                            <div className='col-md-8 text-white'>Dashboard</div>
                        </div>
                        <hr/>
                        <div className='row' style={{fontSize:12+'px', margin: 2+'px',cursor:'pointer'}} onClick={()=>history.push('/student/notifications')}>
                            <div className='col-md-2'><i className="fa fa-bell text-white mb-5" style={{ fontSize: '1.75em' }}/></div>
                            <div className='col-md-8 text-white'>Notifications</div>
                            
                        </div>
                        <hr/>
                
                        <div className='row' style={{fontSize:12+'px', margin: 2+'px',cursor:'pointer'}} onClick={()=>history.push('/student/settings')}>
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

                       {/*<!-- Area Chart --> */} 
                        <div className="col-xl-12 col-lg-12 container-editor">
                            <header className="editor-header">Notifications</header>
                            View your activity and notification history on Retymee School.
                            <div>
                                
                            </div>
                          
                        </div>

                        
                       
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
                <Footer />
           {/*<!-- End of Footer --> */} 

        </div>
      {/*<!-- End of Content Wrapper --> */}  

    </div>
    )
}
export default NotificationStudent;