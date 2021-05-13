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
import Topbar from '../../../../app/components/topbar/topbar';
import Modals from '../../../../app/components/modals/modal';
import Avatar   from 'react-avatar';
import profileImg from '../../../../assets/images/profile_icon.png';
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './course.scss';
import LessonOverview from '../../../lesson/pages/lesson.screen/lesson_overview';


const ManageCourse = ({
    isDashboard,
    onChildClick,
    onChildClickBack,
    onChildClickHandlerCreateEvaluation,
    onChildClickHandlerCreateLesson,
    onChildClickHandlerCourseSettings,}) => {

    const history = useHistory()
    const [displaySide,setDisplaySide] = useState('none');
    const [showLessonModal,setShowLessonModal] = useState(false);
    const [showInviteModal,setShowInviteModal] = useState(false);
    const [lessonInfo, setLessonInfo] = useState([]);
    const [showManageLesson,setShowManageLesson] = useState(true);
    const [showLessonOverview,setShowLessonOverview] = useState(false);

    const [fileImage,setFileImage] = useState(null);
    const [isImage,setIsImage] = useState(false);
    const [ImageContent,setImageContent] = useState(''); 


    useEffect(()=>{
        if(fileImage){
            const reader = new FileReader();
            reader.onloadend = () =>{
                setImageContent(reader.result);
                console.log("my FILE IMAGE CONTENT");
                console.log(ImageContent);
            }
            reader.readAsDataURL(fileImage);
        }else{
            setImageContent(null);
        }
    },[fileImage]);


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

    const onChangeFileImage = (e) => {
        const file = e.target.files[0];
        if(file){
            setIsImage(true);
            setFileImage(file);
            console.log("my FILE IMAGE");
            console.log(fileImage);
        }else{setFileImage(null);}
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

    const outPutShowEvent=(e)=> {
        setShowManageLesson(true,setShowLessonOverview(false));
        
    }
    
    const clickBackHandler=(e)=>{
        onChildClickBack(e.target.name);
    }

    const clickHandler=(e)=>{
        onChildClick(e.target.name);
    }

    const clickHandlerCreateEvaluation=(e)=>{
        onChildClickHandlerCreateEvaluation(e.target.name);
    }

    const clickHandlerCreateLesson=(e)=>{
        onChildClickHandlerCreateLesson(e.target.name);
    }

    const clickHandlerCourseSettings=(e)=>{
        onChildClickHandlerCourseSettings(e.target.name);
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
    const handleClickFileInput = (event) => { 
       
        hiddenFileInput.current.click()
    };

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
        <form> 
           <div className='row form-group'>
              <label className='col-md-3' id='email'>Email: </label>
              <input type='email' className='form-control col-md-8 float-right' placeholder='Enter Email for Student' />
           </div>
           <Button variant='warning' className='float-right'>Send Invitation</Button>
        </form>
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

       {/*<!-- Content Wrapper --> */} 
        <div id="content-wrapper" class="d-flex flex-column">
           {/* <!-- Main Content -->*/} 
            <div id="content">


               {/*<!-- Begin Page Content --> */} 

               {showManageLesson? 
               
            
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
                                                        <div onClick={isDashboard? clickHandler: clickBackHandler} class="text-xs font-weight-bold text-white text-center" style={{fontSize:'calc(2px + 2vmin)',cursor:'pointer'}}>
                                                        <i className="fas fa-chevron-left"/>
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
                                                            <div onClick={clickHandlerCourseSettings} class="text-xs font-weight-bold text-white text-center" style={{fontSize:'calc(2px + 2vmin)',cursor:'pointer'}}>
                                                            <i className="fa fa-cog"/>  Course settings
                                                            </div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                  
                                    <div class="col-xl-3 col-md-3 mb-3">
                                        <div class="card  shadow">
                                            <div class="card-body bg-warning">
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col">
                                                            <div onClick={()=>console.log("student")} class="text-xs font-weight-bold text-white text-center" style={{fontSize:'calc(2px + 2vmin)',cursor:'pointer'}}>
                                                            <span className='mr-2'>0</span>  Students
                                                            </div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                         </div>

                        

                  {/*<!-- Content Row --> */}  


                  <div class="row mb-5" style={{backgroundColor: '#EFEFEF'}}>

                        {/*<!-- Area Chart --> */} 
                        <div 
                            className="col-xl-6 col-lg-8 text-center" 
                            style={{fontSize:'calc(3px + 2vmin)'}}>
                            <p className='font-weight-bold'>Course Name:</p> 
                            <p>PROGRAMMATION INFORMATIQUE</p>
                        </div>

                        <div 
                            className="col-xl-6 col-lg-8 text-center" 
                            style={{fontSize:'calc(3px + 2vmin)'}}>
                            <p className='font-weight-bold'>Course Author:</p>
                            <p>Pierre mvogo</p>
                        </div>
                    </div>


                    <div class="row mt-5">
                    
                    <div class="col-lg-6 mb-4">
                        <div class="shadow mb-4 border-none">
                          
                            <div class="" align="center" style={{cursor:'pointer'}} onClick={clickHandlerCreateLesson}>
                                <i class="fa fa-plus text-primary" style={{fontSize:10+'em'}}></i>
                                <p className='font-weight-bold'>Add a Lesson</p>
                                <p className='font-weight-bold'>Create Lesson for your Course</p>
                                
                            </div>
                        </div> 
                    </div>


         
                     
                    <div class="col-lg-6 mb-4">
                    <div class="shadow mb-4 border-none">
                           <div class="" align="center" style={{cursor:'pointer'}} onClick={()=>setShowInviteModal(true)}>
                                <i class="fa fa-user-friends text-warning" style={{fontSize:10+'em'}}></i>
                                <p className='font-weight-bold'>Invite Student</p>
                                <p className='font-weight-bold'>Invite Student to enrol in the course</p>
                                
                           </div>
                           {showInviteModal? <ContentInviteModal />:''}
                   </div>  
               </div>
               

               </div>
                   
                    <div class="row" style={{backgroundColor: '#EFEFEF'}}>
                       {isImage? <img className='img'  src={ImageContent}/> : 
                         <div 
                            className="col-xl-12 col-lg-12 text-center" 
                            style={{height:45+'vh',border:'2px dashed black',cursor:'pointer'}} onClick={handleClickFileInput}>
                                <i class="fas fa-image text-white" style={{fontSize:7+'em'}}></i><p>Cliquez pour Ajouter une Image de couverture</p>
                                <input 
                                    type="file" 
                                    accept="image/*"
                                    ref={hiddenFileInput} 
                                    style={{display:'none'}}
                                    onChange={onChangeFileImage} />
                        </div>}   
                    </div>

 
                  

                    <div className="row mt-2 mb-2">
                           <p style={{fontSize:'calc(5px + 2vmin)'}}>List of Lesson for this Course</p> 
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <td>Lesson Name</td>
                                        <td>Date creation</td>
                                        <td>Details</td>
                                        <td>Edit</td>
                                    </tr>
                                </thead>
                                <tbody>
                                  
                                       <tr>
                                            <td>LES BASES DE JAVASCRIPT</td>
                                            <td>12/01/2021</td>
                                            <td onClick={()=>setShowManageLesson(false,setShowLessonOverview(true))}><i className='fas fa-eye text-primary' /></td>
                                            <td onClick={clickHandlerCreateLesson}><i className='fas fa-edit text-primary' /></td>
                                        </tr>
                                   
                                   <tr>
                                        <td>INTRODUCTION AUX REGEX</td>
                                        <td>12/01/2021</td>
                                        <td onClick={()=>setShowManageLesson(false,setShowLessonOverview(true))}><i className='fas fa-eye text-primary' /></td>
                                        <td onClick={clickHandlerCreateLesson}><i className='fas fa-edit text-primary' /></td>
                                        
                                    </tr>

                                    <tr>
                                        <td>HTML CSS JAVASCRIPT</td>
                                        <td>12/01/2021</td>
                                        <td onClick={()=>setShowManageLesson(false,setShowLessonOverview(true))}><i className='fas fa-eye text-primary' /></td>
                                        <td onClick={clickHandlerCreateLesson}><i className='fas fa-edit text-primary' /></td>
                                        
                                    </tr>
                                </tbody>
                            </table>
                            {showLessonModal? <ContentLessonModal />:''}
                    </div>


                </div>
                 : showLessonOverview? <LessonOverview  isUserDisplayList={"teacher"} onChildClick={outPutShowEvent} />
                 
                 : ''}
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
export default ManageCourse;