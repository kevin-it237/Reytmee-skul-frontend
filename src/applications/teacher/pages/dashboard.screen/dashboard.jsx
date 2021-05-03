import React, { useState, useEffect, useRef} from 'react';
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
import profileImg from '../../../../assets/images/profile_icon.png';
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import CreateCourse from '../../../course/pages/course.screen/create_course';
import Topbar from '../../../../app/components/topbar/topbar';
import Notifications from '../../../notifications/pages/notifications.screen/notifications';
import AccountSettings from '../../../settings/pages/settings.screen/account_settings';
import ListEvaluation from '../../../course/pages/course.screen/list_evaluation';
import ListCourse from '../../../course/pages/course.screen/list_course';
import CustomTooltip from '../../../../app/components/tooltip/tooltip';
import ManageCourse from '../../../course/pages/course.screen/manage_course';
import EvaluationCourse from '../../../course/pages/course.screen/evaluation_course';
import CreateLesson from '../../../lesson/pages/lesson.screen/create_lesson';
import CourseSettings from '../../../settings/pages/settings.screen/course_settings';



const DashboardTeacher = ({props})  => {
    const history = useHistory()
    const [displaySide,setDisplaySide] = useState('none');
    const [showCreateCourse,setShowCreateCourse] = useState(false);
    const [showCourse,setShowCourse] = useState(true);
    const [showEvaluationModal,setShowEvaluationModal] = useState(false);
    const [showListStudentModal,setShowListStudentModal] = useState(false);
    const [showSendToModal,setShowSendToModal] = useState(false);
    const [showNotifications,setShowNotifications] = useState(false);
    const [showSettings,setShowSettings] = useState(false);
    const [showEvaluation,setShowEvaluation] = useState(false);
    const [showListCourse,setShowListCourse] = useState(false);
    const [showManageCourse,setShowManageCourse] = useState(false);
    const [showCreateLesson,setShowCreateLesson] = useState(false);
    const [showCreateEvaluation,setShowCreateEvaluation] = useState(false);
    const [showCourseSettings,setShowCourseSettings] = useState(false);
    const [showGroupChat,setShowGroupChat] = useState(false);
    
    const [courseName,setCourseName] = useState("");
    const [courseAuthor,setCourseAuthor] = useState("");

    const [isDashboard,setIsDashboard] = useState(true);
    const [displayChatSide,setDisplayChatSide] = useState('none');
    
    const refchild = useRef();

    
    const handleListStudentClose = () =>{setShowListStudentModal(false)}
    const handleEvaluationClose = () =>{setShowEvaluationModal(false)}
    const months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
    const today = new Date(),
    hour = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds(),
    
    date = today.getDate()+' '+months[today.getMonth()]+' '+today.getFullYear();
    
    const listStudentContent = {
        title: "Student Enrol to this Course",
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

    

   
    const hiddenFileInput = React.useRef(null);
    const handleClickFileInput = (event) => {hiddenFileInput.current.click()};

    const outPutShowEvent=(e)=> {
        setShowCreateCourse(false,setShowCourse(true),
        setShowNotifications(false), setShowSettings(false),
        setShowEvaluation(false),setShowListCourse(false),
        setShowManageCourse(false),setShowCreateLesson(false),
        setShowCreateEvaluation(false),setShowCourseSettings(false),
        setShowGroupChat(false));
        
    }
    
    const outPutNotifications=(e)=> {
        setShowCreateCourse(false,setShowCourse(false),
        setShowNotifications(true), setShowSettings(false),
        setShowEvaluation(false),setShowListCourse(false),
        setShowManageCourse(false),setShowCreateLesson(false),
        setShowCreateEvaluation(false),setShowCourseSettings(false),
        setShowGroupChat(false));
    }

    const outPutSettings=(e)=> {
        setShowCreateCourse(false,setShowCourse(false),
        setShowNotifications(false), setShowSettings(true),
        setShowEvaluation(false),setShowListCourse(false),
        setShowManageCourse(false),setShowCreateLesson(false),
        setShowCreateEvaluation(false),setShowCourseSettings(false),
        setShowGroupChat(false));
    }

    const outPutEvaluations=(e)=> {
        setShowCreateCourse(false,setShowCourse(false),
        setShowNotifications(false), setShowSettings(false),
        setShowEvaluation(true),setShowListCourse(false),
        setShowManageCourse(false),setShowCreateLesson(false),
        setShowCreateEvaluation(false),setShowCourseSettings(false),
        setShowGroupChat(false));
    }

    const outPutCourses=(e)=> {
        setShowCreateCourse(false,setShowCourse(false),
        setShowNotifications(false), setShowSettings(false),
        setShowEvaluation(false),setShowListCourse(true),
        setShowManageCourse(false),setShowCreateLesson(false),
        setShowCreateEvaluation(false),setShowCourseSettings(false),
        setShowGroupChat(false));
    }

    const outPutManageCourse=(e)=> {
        setShowCreateCourse(false,setShowCourse(false),
        setShowNotifications(false), setShowSettings(false),
        setShowEvaluation(false),setShowListCourse(false),
        setShowManageCourse(true,setIsDashboard(true)),setShowCreateLesson(false),
        setShowCreateEvaluation(false),setShowCourseSettings(false),
        setShowGroupChat(false));
        
    }

    const outPutCreateLesson=(e)=> {
        setShowCreateCourse(false,setShowCourse(false),
        setShowNotifications(false), setShowSettings(false),
        setShowEvaluation(false),setShowListCourse(false),
        setShowManageCourse(false),setShowCreateLesson(true),
        setShowCreateEvaluation(false),setShowCourseSettings(false),
        setShowGroupChat(false));
    }
    const outPutCreateEvaluation=(coursename,courseauthor)=> {
        setShowCreateCourse(false,setShowCourse(false),
        setShowNotifications(false), setShowSettings(false),
        setShowEvaluation(false),setShowListCourse(false),
        setShowManageCourse(false),setShowCreateLesson(false),
        setShowCreateEvaluation(true,setIsDashboard(true)),setShowCourseSettings(false),
        setShowGroupChat(false));
        setCourseName(coursename);
        setCourseAuthor(courseauthor);
    }

    const outPutCourseSettings=(e)=> {
        setShowCreateCourse(false,setShowCourse(false),
        setShowNotifications(false), setShowSettings(false),
        setShowEvaluation(false),setShowListCourse(false),
        setShowManageCourse(false),setShowCreateLesson(false),
        setShowCreateEvaluation(false),setShowCourseSettings(true),
        setShowGroupChat(false));
    }

    const outPutShowBackEvent=()=>{
        setShowCreateCourse(true,setShowCourse(false),
        setShowNotifications(false), setShowSettings(false),
        setShowEvaluation(false),setShowListCourse(false),
        setShowManageCourse(false),setShowCreateLesson(false),
        setShowCreateEvaluation(false),setShowCourseSettings(false),
        setShowGroupChat(false));
    }

    const outPutShowBackEvent1=()=>{
        setShowCreateCourse(false,setShowCourse(false),
        setShowNotifications(false), setShowSettings(false),
        setShowEvaluation(true),setShowListCourse(false),
        setShowManageCourse(false),setShowCreateLesson(false),
        setShowCreateEvaluation(false),setShowCourseSettings(false),
        setShowGroupChat(false));
    }

    const outPutShowBackAll=(e)=>{
        setShowCreateCourse(false,setShowCourse(false),
        setShowNotifications(false), setShowSettings(false),
        setShowEvaluation(false),setShowListCourse(false),
        setShowManageCourse(true),setShowCreateLesson(false),
        setShowCreateEvaluation(false),setShowCourseSettings(false),
        setShowGroupChat(false));
    }

    const outPutShowGroupChat=(e)=>{
        setShowCreateCourse(false,setShowCourse(false),
        setShowNotifications(false), setShowSettings(false),
        setShowEvaluation(false),setShowListCourse(false),
        setShowManageCourse(false),setShowCreateLesson(false),
        setShowCreateEvaluation(false),setShowCourseSettings(false),
        setShowGroupChat(true));
    }




    const outPutDash=(e)=>{
        setIsDashboard(false);
    }


    const clickHandlerChat=(e)=>{
        
     }

   

    const evaluationContent = {
        title: "Shoose Course to Create Evaluation",
        bodycontent: 
           <div className="row">
               <ul className="ul col">
                   <li className="li row" onClick={()=>outPutCreateEvaluation("programmation web","Paul ING")}>programmation web</li>
                   <li className="li row" onClick={()=>outPutCreateEvaluation("Hacking os","Sidjeu paul")}>Hacking os</li>
                   <li className="li row" onClick={()=>outPutCreateEvaluation("base de java","pierre ING")}>base de java</li>
               </ul>
           </div>
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

   
    
        return(
    <div id="wrapper" onClick={handleSideNavBody}>

        {/*  <!-- Sidebar -->*/}
        <Sidebar
             width={300} 
             height={"100%"} 
             display={displaySide} 
             isUserSidebar={"teacher"} 
             onChildClick={outPutShowEvent} 
             onChildClickNotifications={outPutNotifications} 
             onChildClickSettings={outPutSettings}
             onChildClickEvaluations={outPutEvaluations}
             onChildClickCourses={outPutCourses}>
        </Sidebar>
        {/* <!-- End of Sidebar -->*/} 


       {/*<!-- Content Wrapper --> */} 
        <div id="content-wrapper" class="d-flex flex-column">
           {/* <!-- Main Content -->*/} 
            <div id="content">

            

               {/*<!-- Topbar --> */} 
                <Topbar 
                    isUserTopbar={"teacher"} 
                    isDisplaySide={displaySide} 
                    onChildClick={outPutEvent} 
                    onChildClickSettings={outPutSettings}
                    onChildClickGroupChat={outPutShowGroupChat}
                />
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
                          {showCourse? 
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
                          : ''} 


                         {showCourse? 
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
                         : ''}    
     
                             
     
                           {/* <!-- Pending Requests Card Example -->*/}  
                            <div class="col-xl-3 col-md-3 mb-3">
                           {showCourse? 
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
                           : ''} 
                                 
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
                                    data-tip='Launch Video Course'
                                    data-for="launch"
                                    >
                                    <i class="fas fa-video fa-2x text-primary"></i>
                                    <div>Launch</div>
                                 </div>
                                 <CustomTooltip idTooltip={"launch"} placeTooltip={"top"} />
                                 
                                 <div 
                                    className="m-0 font-weight-bold text-center col"
                                    style={{cursor:'pointer'}}
                                    onClick={()=>setShowListStudentModal(true)}
                                    data-tip="Enrolled Student"
                                    data-for="enrol"
                                    >
                                    <i class="fa fa-users fa-2x text-primary"></i>
                                    <div>3</div>
                                 </div>
                                 <CustomTooltip idTooltip={"enrol"} placeTooltip={"top"} />
                                 {showListStudentModal? <ListStudentModal /> :'' }

                                 <div 
                                    class="m-0 font-weight-bold text-center col"
                                    style={{cursor:'pointer'}}
                                    onClick={outPutManageCourse}
                                    data-tip="Course Details"
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
                                    onClick={()=>history.push('/teacher/video')}
                                    data-tip='Launch Video Course'
                                    data-for="launch"
                                    >
                                    <i class="fas fa-video fa-2x text-primary"></i>
                                    <div>Launch</div>
                                 </div>
                                 <CustomTooltip idTooltip={"launch"} placeTooltip={"top"} />
                                
                                 <div 
                                    className="m-0 font-weight-bold text-center col"
                                    style={{cursor:'pointer'}}
                                    onClick={()=>setShowListStudentModal(true)}
                                    data-tip="Enrolled Student"
                                    data-for="enrol"
                                    >
                                    <i class="fa fa-users fa-2x text-primary"></i>
                                    <div>3</div>
                                 </div>
                                 <CustomTooltip idTooltip={"enrol"} placeTooltip={"top"} />
                                 {showListStudentModal? <ListStudentModal  />:'' }

                                 <div 
                                    class="m-0 font-weight-bold text-center col"
                                    style={{cursor:'pointer'}}
                                    onClick={outPutManageCourse}
                                    data-tip="Course Details"
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

                 </div>
                   : 
                   showCreateCourse? <CreateCourse onChildClick={outPutShowEvent}  onChildClickManageCourse={outPutManageCourse}  onChildClickDash={outPutDash} /> : 
                   
                   showNotifications? <Notifications isUserDisplayList={"teacher"} onChildClick={outPutShowEvent} /> : 
                   
                   showSettings? <AccountSettings isUserDisplayList={"teacher"} onChildClick={outPutShowEvent} /> : 
                   
                   showEvaluation? <ListEvaluation onChildClickDash={outPutDash}  isUserDisplayList={"teacher"} onChildClick={outPutShowEvent} onChildClickHandlerCreateEvaluation={outPutCreateEvaluation}/> : 
                   
                   showListCourse? <ListCourse isUserDisplayList={"teacher"} onChildClick={outPutShowEvent} onChildClickManageCourse={outPutManageCourse}/> : 
                   
                   showManageCourse? <ManageCourse 
                                        isDashboard={isDashboard}
                                        onChildClick={outPutShowEvent}
                                        onChildClickBack={outPutShowBackEvent} 
                                        onChildClickHandlerCourseSettings={outPutCourseSettings} 
                                        onChildClickHandlerCreateEvaluation={outPutCreateEvaluation} 
                                        onChildClickHandlerCreateLesson={outPutCreateLesson} /> : 
                   
                   showCreateEvaluation? <EvaluationCourse  
                                            isDashboard={isDashboard} 
                                            onChildClick={outPutShowEvent} 
                                            onChildClickBack1={outPutShowBackEvent1} 
                                            courseName={courseName} 
                                            courseAuthor={courseAuthor}/>: 
                   
                   showCreateLesson? <CreateLesson onChildClickBackAll={outPutShowBackAll} />:
                   
                   showCourseSettings? <CourseSettings  onChildClickBackAll={outPutShowBackAll}/>: 
                   
                   showGroupChat? <Chat 
                                    userProfile={profileImg}
                                    userPseudo={"Pierre Mvogo"}
                                    isConnected={true}
                                    chatHour={hour}
                                    chatDate={date}/>: ''}  
                  
                  




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