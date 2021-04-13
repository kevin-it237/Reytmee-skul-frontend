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
import './settings.scss';

const AccountSettings = () => {

    const history = useHistory()
    const [displaySide,setDisplaySide] = useState('none');
    const [showCreateCourse,setShowCreateCourse] = useState(false);
    const [showCourse,setShowCourse] = useState(true);
    const [showLessonModal,setShowLessonModal] = useState(false);
    const [showInviteModal,setShowInviteModal] = useState(false);
    const [lessonInfo, setLessonInfo] = useState([]);

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

    const selectLessonRow = {
        mode: 'radio',
        clickToSelect: true,
        selectColumnPosition: 'right',
        headerColumnStyle:{backgroundColor: 'blue'},
        onSelect: (row,isSelect,rowIndex,e) =>{
            setShowLessonModal(true);
            setLessonInfo(row);
            console.log(row);
        }
    }
     

    const handleLessonClose = () =>{setShowLessonModal(false)}
    const handleInviteClose = () =>setShowInviteModal(false)
  
    
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
    const handleClickFileInput = (event) => {hiddenFileInput.current.click()};

    const lessonmodal = {
          title: "Your Lesson",
          bodycontent: 
             <div>
                
             </div>
    }
    const ContentLessonModal = () => {
        return(
            <Modals 
                show={showLessonModal} 
                onhide={handleLessonClose}
                titlecontent={lessonmodal.title}
                bodycontent={lessonmodal.bodycontent}
                footercontent={lessonmodal.footercontent}
            />
        )
    }

    const invitemodal = {
        title: "Invite Student to Course",
        bodycontent: 
           <div>
              
           </div>
  }
  const ContentInviteModal = () => {
      return(
          <Modals 
              show={showInviteModal} 
              onhide={handleInviteClose}
              titlecontent={invitemodal.title}
              bodycontent={invitemodal.bodycontent}
              footercontent={invitemodal.footercontent}
          />
      )
  }

    const lessonColumns = [
        {dataField: "id",  text: "Id"},
        {dataField: "name",  text: "Lesson Name"},
        
        
        ];

    const lessonData = [
            {"id": 1, "name": 'Initiation au lanagage java',
            },
            
            {"id": 2, "name": 'Accesseurs et mutateurs'
            },
    ];
    const handleSideNavBody = () => {
        if(displaySide == 'block'){
            setDisplaySide('none');
        }
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
                     
                            <div class="row" style={{fontSize: 2+'em'}}>

                            {/* <!-- Earnings (Monthly) Card Example --> */}
                                    <div class="col-xl-3 col-md-3 mb-3">
                                        <div class="card  shadow" style={{backgroundColor:'#17879C'}}>
                                            <div class="card-body">
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col">
                                                        <div onClick={()=>history.push('/teacher/dashboard')} class="text-xs font-weight-bold text-white text-center" style={{fontSize:'calc(2px + 2vmin)',cursor:'pointer'}}>
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
                                        <div class="card  shadow">
                                            <div class="card-body bg-secondary">
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col">
                                                            <div onClick={()=>console.log("student")} class="text-xs font-weight-bold text-white text-center" style={{fontSize:'calc(2px + 2vmin)',cursor:'pointer'}}>
                                                            <i className="fas fa-save"/>  Save
                                                            </div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                         </div>

                        

                  {/*<!-- Content Row --> */}  


                  <div class="row mb-5 mt-5" style={{backgroundColor: '#EFEFEF'}}>

                        {/*<!-- Area Chart --> */} 
                        <div 
                            className="col-xl-6 col-lg-8" 
                            style={{fontSize:'calc(10px + 2vmin)'}}>
                            <p className='font-weight-bold'>Account Settings</p> 
                            <p></p>
                        </div>

                        <div 
                            className="col-xl-6 col-lg-8 text-center" 
                            style={{fontSize:'calc(3px + 2vmin)'}}>
                            
                            
                        </div>
                    </div>


                    <div class="row mt-5">
                    
                    <div class="col-lg-6 mb-4">
                        <div class="mb-4">
                          
                            <div class="" align="center" onClick={()=>console.log("profile settings")}>
                                <p style={{fontSize:'calc(10px + 2vmin)'}}>General Settings</p>
                               <div className='row mb-3'>
                                   <label className='col-lg-3 mt-3'>Username: </label>
                                   <input type='text' id='username' className='col-lg-7' value="Pirate" />
                                </div> 

                               <div className='row mb-3'>
                                   <label className='col-lg-3 mt-3'>First Name: </label>
                                   <input type='text' id='username' className='col-lg-7' value="mvogo"/>
                                </div> 
                               
                               <div className='row mb-5'>
                                   <label className='col-lg-3 mt-3'>Last Name: </label>
                                   <input type='text' id='username' className='col-lg-7 mb-5' value="paul"/>
                                </div> 
                                <div className='row mb-5'>
                                   <label className='col-lg-3 mt-3'>Email: </label>
                                   <input type='text' id='email' className='col-lg-7 mb-5' value="paul@gmail.com"/>
                                </div> 
                            </div>
                        </div> 
                    </div>


         
                     
                    <div class="col-lg-6 mb-4">
                    <div class="shadow mb-4 border-none">
                           <div class="" align="center" style={{cursor:'pointer'}} onClick={handleClickFileInput}>
                                <Avatar 
                                        size="100"
                                        round={true}
                                        src={profileImg}
                                        
                                />
                                <input type="file" ref={hiddenFileInput} style={{display:'none'}} />
                                <p className='font-weight-bold'>Profile Image</p>
                                <p className='font-weight-bold'>At list 300x300px</p>
                                
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
export default AccountSettings;