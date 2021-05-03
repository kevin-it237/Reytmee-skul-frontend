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
import Chat from '../../../../app/components/chat/chat';
import Modals from '../../../../app/components/modals/modal';
import Avatar   from 'react-avatar';
import profileImg from '../../../../assets/images/profilestudent_icon.png';
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import CreateCourse from '../../../course/pages/course.screen/create_course';
import Topbar from '../../../../app/components/topbar/topbar';
import ListCourse from '../../../course/pages/course.screen/list_course';
import ListEvaluation from '../../../course/pages/course.screen/list_evaluation';
import Results from '../../../course/pages/course.screen/results';
import Notifications from '../../../notifications/pages/notifications.screen/notifications';
import AccountSettings from '../../../settings/pages/settings.screen/account_settings';
import CustomTooltip from '../../../../app/components/tooltip/tooltip';
import CourseOverview from '../../../course/pages/course.screen/course_overview';


const DashboardStudent = () => {

    const history = useHistory()
    const [displaySide,setDisplaySide] = useState('none');
    const [showCourseList,setShowCourseList] = useState(false);
    const [showDashboard,setShowDashboard] = useState(true);
    const [showEvaluationList,setShowEvaluationList] = useState(false);
    const [showEvaluationResults,setShowEvaluationResults] = useState(false);
    const [showNotifications,setShowNotifications] = useState(false);
    const [showSettings,setShowSettings] = useState(false);
    const [showCourseOverview,setShowCourseOverview] = useState(false);
    const [displayChatSide,setDisplayChatSide] = useState('none');
    const [showGroupChat,setShowGroupChat] = useState(false);
    const [courseName,setCourseName] = useState('');


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
   
    
    const hiddenFileInput = React.useRef(null);
    const handleClickFileInput = (event) => {hiddenFileInput.current.click()};

    const outPutEvent=(e)=> {
        if(displaySide == 'none'){
            setDisplaySide('block');
        }else{
            setDisplaySide('none');
        }

    }
    const outPutShowEvent=(e)=> {
        setShowEvaluationList(false,setShowDashboard(true),
        setShowEvaluationResults(false),setShowCourseList(false),
        setShowSettings(false),setShowNotifications(false),
        setShowCourseOverview(false),setShowGroupChat(false));
        
    }
    const outPutNotifications=(e)=> {
        setShowEvaluationList(false,setShowDashboard(false),
        setShowEvaluationResults(false),setShowCourseList(false),
        setShowSettings(false),setShowNotifications(true),
        setShowCourseOverview(false),setShowGroupChat(false));
    }

    const outPutSettings=(e)=> {
        setShowEvaluationList(false,setShowDashboard(false),
        setShowEvaluationResults(false),setShowCourseList(false),
        setShowSettings(true),setShowNotifications(false),
        setShowCourseOverview(false),setShowGroupChat(false));
    }

    const outPutShowCourseOverview=(e)=> {
        setShowEvaluationList(false,setShowDashboard(false),
        setShowEvaluationResults(false),setShowCourseList(false),
        setShowSettings(false),setShowNotifications(false),
        setShowCourseOverview(true),setShowGroupChat(false));
    }


    const outPutShowGroupChat=()=>{
        setShowEvaluationList(false,setShowDashboard(false),
        setShowEvaluationResults(false),setShowCourseList(false),
        setShowSettings(false),setShowNotifications(false),
        setShowCourseOverview(false),setShowGroupChat(true));
    }
    

    const handleSideNavBody = () => {
        if(displaySide == 'block'){
            setDisplaySide('none');
        }else if(displayChatSide == 'block'){
            setDisplayChatSide('none');
        }
    }

        return(
            <div id="wrapper" onClick={handleSideNavBody}>

            {/*  <!-- Sidebar -->*/}
            <Sidebar 
                width={300} 
                height={"100%"} 
                display={displaySide} 
                isUserSidebar={"student"} 
                onChildClick={outPutShowEvent} 
                onChildClickNotifications={outPutNotifications} 
                onChildClickSettings={outPutSettings}>
            </Sidebar>
            {/* <!-- End of Sidebar -->*/} 
    
    
           {/*<!-- Content Wrapper --> */} 
            <div id="content-wrapper" class="d-flex flex-column">
               {/* <!-- Main Content -->*/} 
                <div id="content">
    
                
    
                   {/*<!-- Topbar --> */} 
                    <Topbar 
                        isUserTopbar={"student"} 
                        isDisplaySide={displaySide} 
                        onChildClick={outPutEvent}  
                        onChildClickSettings={outPutSettings}
                        onChildClickGroupChat={outPutShowGroupChat} />
                   {/* <!-- End of Topbar -->*/} 
    
    
                   {/*<!-- Begin Page Content --> */} 
                    <div className="container">
    
                      {/*<!-- Page Heading --> */}  
                        
                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h3 mb-0 text-gray-800">{showGroupChat? <Button onClick={outPutShowEvent}><i className="fas fa-chevron-left mr-3"/>Dashboard</Button>: 'Dashboard'}</h1>
                           
                        </div>    
    
                       {/*<!-- Content Row --> */} 
                         
                                <div class="row" style={{fontSize: 2+'em'}}>
    
                                {/* <!-- Earnings (Monthly) Card Example --> */}
                               {showDashboard?
                               <div class="col-xl-3 col-md-3 mb-3">
                                     <div class="card shadow" style={{backgroundColor:'#17879C'}}>
                                         <div class="card-body">
                                             <div class="row no-gutters align-items-center">
                                                 <div class="col">
                                                      <div onClick={()=>setShowCourseList(true,setShowDashboard(false),
                                                        setShowEvaluationList(false),setShowEvaluationResults(false),
                                                        setShowNotifications(false),setShowSettings(false))} class="text-xs font-weight-bold text-white text-center" style={{fontSize:'calc(2px + 2vmin)',cursor:'pointer'}}>
                                                         Courses
                                                      </div>
                                                     
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                               :''}  
    
    
                                {showDashboard? 
                                 <div class="col-xl-3 col-md-3 mb-3">
                                            <div class="card  shadow "style={{backgroundColor:'#17879C'}}>
                                                <div class="card-body">
                                                    <div class="row no-gutters align-items-center">
                                                        <div class="col">
                                                                <div onClick={()=>setShowEvaluationList(true,setShowDashboard(false),
                                                                    setShowCourseList(false),setShowEvaluationResults(false),
                                                                    setShowSettings(false),setShowNotifications(false))} class="text-xs font-weight-bold text-white text-center" style={{fontSize:'calc(2px + 2vmin)',cursor:'pointer'}}>
                                                                 Evaluations
                                                                </div>
                                                           
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                </div>
                                : ''}
         
                                 
         
                               {/* <!-- Pending Requests Card Example -->*/}  
                                {showDashboard? 
                                <div class="col-xl-3 col-md-3 mb-3">
                                     <div class="card  shadow " style={{backgroundColor:'#17879C'}}>
                                         <div class="card-body">
                                             <div class="row no-gutters align-items-center">
                                                 <div class="col">
                                                         <div onClick={()=>setShowEvaluationResults(true,setShowDashboard(false),
                                                            setShowEvaluationList(false),setShowCourseList(false),
                                                            setShowSettings(false),setShowNotifications(false))} class="text-xs font-weight-bold text-white text-center" style={{fontSize:'calc(2px + 2vmin)',cursor:'pointer'}}>
                                                         <i className="fa fa-list-alt mr-2"/>
                                                            Results
                                                         </div>
                                                     
                                                 </div>
                                                 
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                : ''} 
                             </div>
    
                      {/*<!-- Content Row --> */}  
    
                        <div class="row" style={{backgroundColor: '#EFEFEF'}}>
    
                           {/*<!-- Area Chart --> */} 
                            <div className="col-xl-10 col-lg-7">
                
                            </div>
    
    
                           {/* <!-- Pie Chart -->*/} 
                            
                        </div>
    
                       {/* <!-- Content Row -->*/} 
    
    
                      {showDashboard? 
                         <div class="row">
                        
                         <div class="col-lg-6 mb-4">
                             <div class="card shadow mb-4 border-bottom-primary">
                                 <div class="row card-header py-3" style={{marginLeft:2+'%',marginRight:2+'%'}}>
                                     
                                     <div class="m-0 font-weight-bold text-white text-center col "></div>
                                    
                                     <div 
                                        className="m-0 font-weight-bold text-center col"
                                        style={{cursor:'pointer'}}
                                        onClick={()=>console.log("ddd")}
                                        data-tip='Download this Course'
                                        data-for="download"
                                        >
                                        <i class="fas fa-download fa-2x text-primary"></i>
                                        <div>Download</div>
                                     </div>
                                     <CustomTooltip idTooltip={"download"} placeTooltip={"top"} />
              
                                     <div 
                                        class="m-0 font-weight-bold text-center col"
                                        style={{cursor:'pointer'}}
                                        onClick={outPutShowCourseOverview}
                                        data-tip='Course Details'
                                        data-for="details"
                                        >
                                        <i class="fas fa-eye fa-2x text-primary"></i>
                                        <div>Details</div>
                                     </div>
                                     <CustomTooltip idTooltip={"details"} placeTooltip={"top"} />
                                     <div 
                                        class="m-0 font-weight-bold text-center col"
                                        style={{cursor:'pointer'}}
                                        onClick={outPutShowGroupChat}
                                        data-tip='Comment this Course'
                                        data-for="comment"
                                        >
                                        <i class="far fa-comment-dots fa-2x text-primary"></i>
                                        <div>Comment</div>
                                     </div>
                                     <CustomTooltip idTooltip={"comment"} placeTooltip={"top"} />
    
                                     
    
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
                                        onClick={()=>console.log("jksdfhjk")}
                                        data-tip='Download this Course'
                                        data-for="download"
                                        >
                                        <i class="fas fa-download fa-2x text-primary"></i>
                                        <div>Download</div>
                                     </div>
                                     <CustomTooltip idTooltip={"download"} placeTooltip={"top"} />
                                    
                                     
    
                                     <div 
                                        class="m-0 font-weight-bold text-center col"
                                        style={{cursor:'pointer'}}
                                        onClick={outPutShowCourseOverview}
                                        data-tip='Course Details'
                                        data-for="details"
                                        >
                                        <i class="fas fa-eye fa-2x text-primary"></i>
                                        <div>Details</div>
                                     </div>
                                     <CustomTooltip idTooltip={"details"} placeTooltip={"top"} />
    
                                     <div 
                                        class="m-0 font-weight-bold text-center col"
                                        style={{cursor:'pointer'}}
                                        onClick={outPutShowGroupChat}
                                        data-tip='Comment this Course'
                                        data-for="comment"
                                        >
                                        <i class="far fa-comment-dots fa-2x text-primary"></i>
                                        <div>Comment</div>
                                     </div>
                                     <CustomTooltip idTooltip={"comment"} placeTooltip={"top"} />
    
                                    
    
                                 </div>
                                 
                                 <div class="card-body" style={{fontSize:1+'em'}}>
                                 <div style={{width:100+'%',height:25+'vh',backgroundColor:'#1EAEC8'}}><img src='' alt=''></img></div>
                                     <h4 className="small font-weight-bold h1 mt-3">Course Name : </h4>
    
                                     <div className="mb-4" style={{width: 100+'%', height: 25+'%',backgroundColor:'#F7F7F7'}}>
                                         <div style={{marginLeft:5+'%'}}>C ++ pour debutant</div>
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
                       : showCourseList? <ListCourse isUserDisplayList={"student"} onChildClick={outPutShowEvent} /> : 
                       
                        showEvaluationList? <ListEvaluation isUserDisplayList={"student"} onChildClick={outPutShowEvent}/> :
                        
                        showEvaluationResults? <Results isUserDisplayList={"student"} onChildClick={outPutShowEvent}/> : 
                        
                        showNotifications? <Notifications isUserDisplayList={"student"} onChildClick={outPutShowEvent}/> :
                        
                        showSettings? <AccountSettings isUserDisplayList={"student"} onChildClick={outPutShowEvent}/> : 
                        
                        showCourseOverview? <CourseOverview onChildClick={outPutShowEvent}/>: 
                        
                        showGroupChat? <Chat courseName={courseName}/>: ''}  
                      
                      
    
    
    
    
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
export default DashboardStudent;