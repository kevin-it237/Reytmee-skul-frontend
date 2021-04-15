import React, { useState, useEffect } from 'react';
import './dashboard.scss';
import Button from '../../../../app/components/buttons/button/button';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Dropdown} from 'react-bootstrap';
import SideNav, {Toggle, Nav, NavItem, NavIcon,NavText} from '@trendmicro/react-sidenav'; 
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import BootStrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {Redirect, useHistory} from 'react-router-dom';
import Footer from '../../../../app/components/footer/footer';
import './dashboard.scss';
import '../../../../app/components/sidebar/sidebar'
import Sidebar from '../../../../app/components/sidebar/sidebar';
import Modals from '../../../../app/components/modals/modal';
import Avatar   from 'react-avatar';
import profileImg from '../../../../assets/images/profile_icon.png';
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import CreateCourse from '../../../course/pages/course.screen/create_course';



const DashboardTeacher = ({props})  => {
    const history = useHistory()
    const [displaySide,setDisplaySide] = useState('none');
    const [showCreateCourse,setShowCreateCourse] = useState(false);
    const [showCourse,setShowCourse] = useState(true);
    const [showEvaluationModal,setShowEvaluationModal] = useState(false);
    const [showListStudentModal,setShowListStudentModal] = useState(false);
    const [showSendToModal,setShowSendToModal] = useState(false);

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
    const handleListStudentClose = () =>{setShowListStudentModal(false)}
    const handleEvaluationClose = () =>{setShowEvaluationModal(false)}

    const listStudentContent = {
        title: "Student Enrol to your Course",
        bodycontent: 
           <div>
             <table className='table'>
                 <thead>
                     <tr>
                         <th>Student Name</th>
                         <th>Matricule</th>
                         <th>Email</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td>pirate</td>
                         <td>2T15ER</td>
                         <td>pirate@gmail.com</td>
                     </tr>
                     <tr>
                         <td>paul</td>
                         <td>2E25ER</td>
                         <td>paul@gmail.com</td>
                     </tr>
                     <tr>
                         <td>Alain</td>
                         <td>2T89EER</td>
                         <td>alain@gmail.com</td>
                     </tr>
                 </tbody>
             </table>
              
           </div>
  }

  const evaluationContent = {
    title: "Shoose Course to Create Evaluation",
    bodycontent: 
       <div>
           <ul>
               <li className="li" onClick={()=>history.push('/teacher/course/evaluation/create')}>Arithmétique</li>
               <li className="li" onClick={()=>history.push('/teacher/course/evaluation/create')}>Programmation</li>
               <li className="li" onClick={()=>history.push('/teacher/course/evaluation/create')}>Piratage informatique</li>
           </ul>
       </div>
}

  const ListStudentModal = () => {
      return(
          <Modals 
              show={showListStudentModal} 
              onhide={handleListStudentClose}
              titlecontent={listStudentContent.title}
              bodycontent={listStudentContent.bodycontent}
              footercontent={listStudentContent.footercontent}
          />
      )
  }
  const EvaluationModal = () => {
    return(
        <Modals 
            show={showEvaluationModal} 
            onhide={handleEvaluationClose}
            titlecontent={evaluationContent.title}
            bodycontent={evaluationContent.bodycontent}
            footercontent={evaluationContent.footercontent}
        />
    )
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
    const handleClickFileInput = (event) => {hiddenFileInput.current.click()};

    const outPutEvent=(e)=> {
        setShowCreateCourse(false,setShowCourse(true));
    }

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
                    <div className='row text-white justify-content-center' style={{fontSize:2+'em'}}>Pierre Mvogo</div>
                    <div className='row text-white justify-content-center' style={{fontSize:1.5+'em'}}>Retymee School Educator</div>
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

                    <Dropdown class="nav-item dropdown no-arrow " >
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
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                       
                    </div>    

                   {/*<!-- Content Row --> */} 
                     
                            <div class="row" style={{fontSize: 2+'em'}}>

                            {/* <!-- Earnings (Monthly) Card Example --> */}
                             <div class="col-xl-3 col-md-3 mb-3">
                                 <div class="card shadow" style={{backgroundColor:'#17879C'}}>
                                     <div class="card-body">
                                         <div class="row no-gutters align-items-center">
                                             <div class="col">
                                                  <div onClick={()=>setShowCreateCourse(true,setShowCourse(false))} class="text-xs font-weight-bold text-white text-center" style={{fontSize:'calc(2px + 2vmin)',cursor:'pointer'}}>
                                                     Create a course
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
                                                            <div onClick={handleClickFileInput} class="text-xs font-weight-bold text-white text-center" style={{fontSize:'calc(2px + 2vmin)',cursor:'pointer'}}>
                                                            <i className="fa fa-upload"/>  Import Course
                                                            <input type="file" ref={hiddenFileInput} style={{display:'none'}} />
                                                            </div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                            </div>
     
                             
     
                           {/* <!-- Pending Requests Card Example -->*/}  
                             <div class="col-xl-3 col-md-3 mb-3">
                                 <div class="card  shadow " style={{backgroundColor:'#17879C'}}>
                                     <div class="card-body">
                                         <div class="row no-gutters align-items-center">
                                             <div class="col">
                                                     <div onClick={()=>setShowEvaluationModal(true)} class="text-xs font-weight-bold text-white text-center" style={{fontSize:'calc(2px + 2vmin)',cursor:'pointer'}}>
                                                        Create Evaluation
                                                     </div>
                                                 
                                             </div>
                                             {showEvaluationModal? <EvaluationModal /> : ''}
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>

                  {/*<!-- Content Row --> */}  

                    <div class="row" style={{backgroundColor: '#EFEFEF'}}>

                       {/*<!-- Area Chart --> */} 
                        <div className="col-xl-10 col-lg-7">
            
                        </div>


                       {/* <!-- Pie Chart -->*/} 
                        
                    </div>

                   {/* <!-- Content Row -->*/} 


                  {showCourse? 
                     <div class="row">
                    
                     <div class="col-lg-6 mb-4">
                         <div class="card shadow mb-4 border-bottom-primary">
                             <div class="row card-header py-3" style={{marginLeft:2+'%',marginRight:2+'%'}}>
                                 
                                 <div class="m-0 font-weight-bold text-white text-center col "></div>
                                
                                 <div 
                                    className="m-0 font-weight-bold text-center col"
                                    style={{cursor:'pointer'}}
                                    onClick={()=>history.push('/teacher/video')}
                                    >
                                    <i class="fas fa-video fa-2x text-primary"></i>
                                    <div>Launch</div>
                                 </div>
                                 
                                 <div 
                                    className="m-0 font-weight-bold text-center col"
                                    style={{cursor:'pointer'}}
                                    onClick={()=>setShowListStudentModal(true)}
                                    >
                                    <i class="fa fa-users fa-2x text-primary"></i>
                                    <div>3</div>
                                 </div>
                                 {showListStudentModal? <ListStudentModal /> :'' }

                                 <div 
                                    class="m-0 font-weight-bold text-center col"
                                    style={{cursor:'pointer'}}
                                    onClick={()=>history.push('/teacher/manage/course')}
                                    >
                                    <i class="fas fa-eye fa-2x text-primary"></i>
                                    <div>Details</div>
                                 </div>

                                 

                             </div>
                             
                             <div class="card-body" style={{fontSize:1+'em'}}>
                                 <div style={{width:100+'%',height:25+'vh',backgroundColor:'#1EAEC8'}}><img src='' alt=''></img></div>
                                 <h4 className="small font-weight-bold h1 mt-3">Course Name : </h4>

                                 <div className="mb-4" style={{width: 100+'%', height: 25+'%',backgroundColor:'#F7F7F7'}}>
                                     <div style={{marginLeft:5+'%'}}>Programmation Web</div>
                                 </div>

                                 <h4 class="small font-weight-bold">Course Description : </h4>
                                 <div class="mb-4" style={{width: 100+'%', height: 25+'%',backgroundColor:'#F7F7F7'}}>
                                     <div style={{marginLeft:5+'%'}}>
                                      ksdjhfjhsdjklhfuisdhiuhfihsdlhqfudsgfdgdfgggggggggggddddddddddddd
                                      dfgfggggggggggggggggggggggggggfffffffffgfdfdgdfgdfgfdddddddddddddddd
                                      dfgggggggggggggggfdhsdhlfulsdhiuhflsdkhukuhdfgdfgdfgddddddddddddddd
                                     </div>
                                 </div>
                                 
                                 
                             </div>
                         </div> 
                     </div>



                      
                     <div class="col-lg-6 mb-4">
                         <div class="card shadow mb-4 border-bottom-primary">
                             <div class="row card-header py-3" style={{marginLeft:2+'%',marginRight:2+'%'}}>
                                 
                                 <div class="m-0 font-weight-bold text-white text-center col "></div>
                                
                                 <div 
                                    className="m-0 font-weight-bold text-center col"
                                    style={{cursor:'pointer'}}
                                    onClick={()=>history.push('/teacher/video')}
                                    >
                                    <i class="fas fa-video fa-2x text-primary"></i>
                                    <div>Launch</div>
                                 </div>
                                
                                 <div 
                                    className="m-0 font-weight-bold text-center col"
                                    style={{cursor:'pointer'}}
                                    onClick={()=>setShowListStudentModal(true)}
                                    >
                                    <i class="fa fa-users fa-2x text-primary"></i>
                                    <div>3</div>
                                 </div>
                                 {showListStudentModal? <ListStudentModal  />:'' }

                                 <div 
                                    class="m-0 font-weight-bold text-center col"
                                    style={{cursor:'pointer'}}
                                    onClick={()=>history.push('/teacher/manage/course')}
                                    >
                                    <i class="fas fa-eye fa-2x text-primary"></i>
                                    <div>Details</div>
                                 </div>

                                

                                

                             </div>
                             
                             <div class="card-body" style={{fontSize:1+'em'}}>
                             <div style={{width:100+'%',height:25+'vh',backgroundColor:'#1EAEC8'}}><img src='' alt=''></img></div>
                                 <h4 className="small font-weight-bold h1 mt-3">Course Name : </h4>

                                 <div className="mb-4" style={{width: 100+'%', height: 25+'%',backgroundColor:'#F7F7F7'}}>
                                     <div style={{marginLeft:5+'%'}}>Programmation Web</div>
                                 </div>

                                 <h4 class="small font-weight-bold">Course Description : </h4>
                                 <div class="mb-4" style={{width: 100+'%', height: 25+'%',backgroundColor:'#F7F7F7'}}>
                                     <div style={{marginLeft:5+'%'}}>
                                      ksdjhfjhsdjklhfuisdhiuhfihsdlhqfudsgfdgdfgggggggggggddddddddddddd
                                      dfgfggggggggggggggggggggggggggfffffffffgfdfdgdfgdfgfdddddddddddddddd
                                      dfgggggggggggggggfdhsdhlfulsdhiuhflsdkhukuhdfgdfgdfgddddddddddddddd
                                     </div>
                                 </div>
                                 
                                 
                             </div>
                         </div> 
                     </div>

                 </div>
                   : showCreateCourse? <CreateCourse onChildClick={outPutEvent} /> : ''}  
                  
                  




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
export default DashboardTeacher;