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
import Topbar from '../../../../app/components/topbar/topbar';

const CourseSettings = ({onChildClickBackAll}) => {

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

    const outPutEvent=(e)=> {
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

    const clickBackHandler=(e)=>{
        onChildClickBackAll(e.target.name);
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
                     
                            <div class="row" style={{fontSize: 2+'em'}}>

                            {/* <!-- Earnings (Monthly) Card Example --> */}
                                    <div class="col-xl-3 col-md-3 mb-3">
                                        <div class="card  shadow" style={{backgroundColor:'#17879C'}}>
                                            <div class="card-body">
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col">
                                                        <div onClick={clickBackHandler} class="text-xs font-weight-bold text-white text-center" style={{fontSize:'calc(2px + 2vmin)',cursor:'pointer'}}>
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
                            <p className='font-weight-bold'>Course Settings</p> 
                            <p></p>
                        </div>

                        <div 
                            className="col-xl-6 col-lg-8 text-center" 
                            style={{fontSize:'calc(3px + 2vmin)'}}>
                            
                            
                        </div>
                    </div>


                    <div class="row mt-5">
                    
                    <div class="col-lg-6 mb-4">
                        <div class=" mb-4 ">
                          
                            <div class="" align="center" onClick={()=>console.log("profile settings")}>
                                <p style={{fontSize:'calc(10px + 2vmin)'}}>General Settings</p>
                               <div className='row mb-3'>
                                   <label className='col-lg-3 mt-3'>Course Name: </label>
                                   <input type='text' id='username' className='col-lg-7' value="Informatique" />
                                </div> 

                               <div className='row mb-3'>
                                   <label className='col-lg-3 mt-3'>Course Description: </label>
                                   <textarea 
                                        type={"textarea"}
                                        className="col-lg-7"
                                        rows='5'                                                   
                                        value="New ITC Technologie"           
                                    />
                                </div> 
                               
                                <div className='row mb-5'>
                                   <label className='col-lg-3'>Course Creator: </label>
                                   <div className='col-lg-2'>Paul pirate</div>
                                </div> 
                                <div className='row mb-5'>
                                   <label className='col-lg-3 mt-3'>Suggested Duration: </label>
                                   <input type='text' id='email' className='col-lg-7 mb-5' placeholder='E.g. 15 hours'/>
                                </div> 

                                <div className='row mb-5'>
                                   <label className='col-lg-3 mt-3'>Resources Required: </label>
                                   <textarea 
                                        type={"textarea"}
                                        className="col-lg-7"
                                        rows='5'                                                   
                                        placeholder='software Lab'          
                                    />
                                </div> 

                                <div className='row mb-5'>
                                   <label className='col-lg-3 mt-3'>Cover Art: </label>
                                   <div 
                                    className="col-xl-7 col-lg-7 text-center" 
                                    style={{height:40+'vh',border:'2px dashed black',cursor:'pointer'}} onClick={handleClickFileInput}>
                                    <i class="fas fa-image text-black" style={{fontSize:7+'em'}}></i><p>Upload cover image</p>
                                    <p>A jpg, gif or png file at least 1000px wide and 400px high</p>
                                    <input type="file" ref={hiddenFileInput} style={{display:'none'}} />
                                </div>
                                </div> 
                            </div>
                        </div> 
                    </div>


         
                     
                    <div class="col-lg-6 mb-4">
                    <div class="shadow mb-4 border-none" >
                           <div class="" align="center" style={{cursor:'pointer'}} onClick={handleClickFileInput}>
                                <i style={{fontSize:'calc(20px + 2vmin)',margin:'2em'}} className='fas fa-graduation-cap'></i>
                                <input 
                                    type="file" 
                                    ref={hiddenFileInput} 
                                    style={{display:'none'}} />
                           </div>
                           
                   </div>  
               </div>
               

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
export default CourseSettings;