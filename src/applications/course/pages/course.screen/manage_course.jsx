import React, { useState, useEffect } from 'react';
import Button from '../../../../app/components/buttons/button/button';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Dropdown} from 'react-bootstrap';
import SideNav, {Toggle, Nav, NavItem, NavIcon,NavText} from '@trendmicro/react-sidenav'; 
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import BootStrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {Redirect, useHistory} from 'react-router-dom';
import Footer from '../../../../app/components/footer/footer';
import '../../../../app/components/sidebar/sidebar'
import Sidebar from '../../../../app/components/sidebar/sidebar';
import Modals from '../../../../app/components/modals/modal';
import Avatar   from 'react-avatar';
import profileImg from '../../../../assets/images/profile_icon.png';
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


const ManageCourse = () => {
    const history = useHistory()
    const [displaySide,setDisplaySide] = useState('none');
    const [showCreateCourse,setShowCreateCourse] = useState(false);
    const [showCourse,setShowCourse] = useState(true);

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
    return(
        <div id="wrapper">

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
                    <div className='row' style={{fontSize:12+'px', margin: 2+'px', cursor:'pointer'}} onClick={()=>history.push('/teacher/dashboard')}>
                        <div className='col-md-2'><i className="fas fa-tachometer-alt text-white mb-5" style={{ fontSize: '1.75em' }}/></div>
                        <div className='col-md-8 text-white'>Dashboard</div>
                    </div>
                    <hr/>
                    <div className='row' style={{fontSize:12+'px', margin: 2+'px',cursor:'pointer'}} onClick={console.log("add student")}>
                        <div className='col-md-2'><i className="fa fa-bell text-white mb-5" style={{ fontSize: '1.75em' }}/></div>
                        <div className='col-md-8 text-white'>Notifications</div>
                        
                    </div>
                    <hr/>
                    <div className='row' style={{fontSize:12+'px', margin: 2+'px',cursor:'pointer'}} onClick={console.log("add teacher")}>
                         <div className='col-md-2'><i className="fas fa-tasks text-white mb-5" style={{ fontSize: '1.75em' }} /></div>
                         <div className='col-md-8 text-white'>Manages Courses</div>
                    </div>
                    <hr/>
                    <div className='row' style={{fontSize:12+'px', margin: 2+'px',cursor:'pointer'}} onClick={()=>console.log("")}>
                         <div className='col-md-2'><i className="fa fa-cog text-white mb-5" style={{ fontSize: '1.75em' }} /></div>
                         <div className='col-md-8 text-white'>Accounts settings</div>
                    </div>
                    <hr/>
                    <div className='row' style={{fontSize:12+'px', margin: 2+'px',cursor:'pointer'}} onClick={()=>console.log("")}>
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

                    <Dropdown class="nav-item dropdown no-arrow" style={{zIndex: 10000}}>
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

                    <Dropdown class="nav-item dropdown no-arrow " style={{zIndex: 10000}}>
                        <Dropdown.Toggle variant='light'>
                        <i className="fas fa-cog text-dark"/>
                        </Dropdown.Toggle>
                        
                        <Dropdown.Menu style={{width: 100+'%', fontSize: 1.5+'em', marginRight: 2+'em'}} class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="userDropdown">

                        <Dropdown.Item href="#/action-1" class="dropdown-item mb-4">
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
                     
                            <div class="row justify-content-center" style={{fontSize: 2+'em'}}>

                            {/* <!-- Earnings (Monthly) Card Example --> */}
                                    <div class="col-xl-3 col-md-3 mb-3">
                                        <div class="card  shadow" style={{backgroundColor:'#17879C'}}>
                                            <div class="card-body">
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col">
                                                        <div onClick={()=>history.push('/teacher/dashboard')} class="text-xs font-weight-bold text-white text-center" style={{fontSize:10+'px',cursor:'pointer'}}>
                                                        <i className="fas fa-chevron-left"/> Dashboard
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            
                                {/* <!-- Pending Requests Card Example -->*/}  
                                    <div class="col-xl-3 col-md-3 mb-3">
                                        <div class="card  shadow "style={{backgroundColor:'#17879C'}}>
                                            <div class="card-body">
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col">
                                                            <div onClick={()=>console.log("download course")} class="text-xs font-weight-bold text-white text-center" style={{fontSize:10+'px',cursor:'pointer'}}>
                                                            <i className="fa fa-upload"/>  Import Course
                                                            </div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-md-3 mb-3">
                                        <div class="card  shadow "style={{backgroundColor:'#17879C'}}>
                                            <div class="card-body">
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col">
                                                            <div onClick={()=>console.log("course setting")} class="text-xs font-weight-bold text-white text-center" style={{fontSize:10+'px',cursor:'pointer'}}>
                                                            <i className="fa fa-cog"/>  Course settings
                                                            </div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                         </div>

                         <div className='row justify-content-center'>  
                            <div class="card  shadow mb-5"style={{backgroundColor:'#57CA1C'}}>
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col">
                                                <div onClick={()=>console.log("course setting")} class="text-xs font-weight-bold text-white text-center" style={{fontSize:10+'px',cursor:'pointer'}}>
                                                    <span className='mr-2'>0</span>  Students
                                                </div>
                                                            
                                            </div>
                                                        
                                        </div>
                                    </div>
                            </div>
                         </div>

                  {/*<!-- Content Row --> */}  

                    <div class="row" style={{backgroundColor: '#EFEFEF'}}>

                       {/*<!-- Area Chart --> */} 
                        <div 
                           className="col-xl-12 col-lg-12 text-center" 
                           style={{height:45+'vh',border:'2px dashed black',cursor:'pointer'}}>
                               <i class="fas fa-image text-white" style={{fontSize:7+'em',marginTop:8+'%'}}></i><p>Cliquez pour Ajouter une Image de couverture</p>
                       
                        </div>
                    </div>


                    <div class="row mt-5" style={{backgroundColor: '#EFEFEF'}}>

                       {/*<!-- Area Chart --> */} 
                        <div 
                           className="col-xl-6 col-lg-8 text-center" 
                           style={{cursor:'pointer',fontSize:1.2+'em'}}>
                            <p className='font-weight-bold'>Course Name:</p> 
                            <p>Arithmétique</p>
                        </div>

                        <div 
                           className="col-xl-6 col-lg-8 text-center" 
                           style={{cursor:'pointer',fontSize:1.2+'em'}}>
                            <p className='font-weight-bold'>Course Author:</p>
                            <p>Pierre mvogo</p>
                        </div>
                    </div>






                   {/* <!-- Content Row -->*/} 


                   
                     <div class="row mt-5">
                    
                     <div class="col-lg-6 mb-4">
                         <div class="shadow mb-4 border-none">
                           
                             <div class="" align="center" style={{cursor:'pointer'}}>
                                 <i class="fa fa-plus text-primary" style={{fontSize:10+'em'}}></i>
                                 <p className='font-weight-bold'>Add a Lesson</p>
                                 <p className='font-weight-bold'>Create Lesson for your Course</p>
                                 
                             </div>
                         </div> 
                     </div>



                      
                     <div class="col-lg-6 mb-4">
                     <div class="shadow mb-4 border-none">
                            <div class="" align="center" style={{cursor:'pointer'}}>
                                 <i class="fa fa-user-friends text-primary" style={{fontSize:10+'em'}}></i>
                                 <p className='font-weight-bold'>Invite Student</p>
                                 <p className='font-weight-bold'>Invite Student to enrol in the course</p>
                                 
                            </div>
                    </div>  
                </div>

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
export default ManageCourse;