import "./sidebar.styles.scss";
import React, { useState, useEffect } from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Dropdown} from 'react-bootstrap';
import SideNav, {Toggle, Nav, NavItem, NavIcon,NavText} from '@trendmicro/react-sidenav'; 
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import BootStrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {Redirect, useHistory} from 'react-router-dom';
import Avatar   from 'react-avatar';
import profileTeacherImg from '../../../assets/images/profile_icon.png';
import profileStudentImg from '../../../assets/images/profilestudent_icon.png';
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

/**
 * @description simple sidebar component.  
 * @param {string} width
 * @param {string} height 
 * @param {string} backgroundcolor
 * @param {string} display "none|block"
 * @param {string} isUserSidebar "student|teacher"
 */

const Sidebar = ({
    width,
    height,
    backgroundcolor='#17879C',
    display,
    isUserSidebar,
    onChildClick,
    onChildClickNotifications,
    onChildClickSettings,
    onChildClickEvaluations,
    onChildClickCourses,
    ...res}) => {
        const history = useHistory();

        const clickHandlerNotifications=(e)=>{
               onChildClickNotifications(e.target.name);
            }
                
        const clickHandlerSettings=(e)=>{
            onChildClickSettings(e.target.name);
        }

        const clickHandlerEvaluation=(e)=>{
            onChildClickEvaluations(e.target.name);
        }

        const clickHandlerCourses=(e)=>{
            onChildClickCourses(e.target.name);
        }

        const clickHandler=(e)=>{
            onChildClick(e.target.name)
        }
    
     return (
                <div className="side-bar" style={{
                    width:width,
                    minHeight:height, 
                    backgroundColor:backgroundcolor,
                    display: display
                    }}>
               
             <div style={{marginTop:25+'%'}}>
                    <div className='row' style={{fontSize:12+'px', margin: 2+'px', cursor:'pointer'}} onClick={console.log("home")}>
                        <div className='row bg-white ' style={{marginLeft: 25+'%'}}>
                          {isUserSidebar==="student"?
                               <Avatar 
                                        size="100"
                                        round={true}
                                        src={profileStudentImg}
                                />
                          : isUserSidebar==="teacher"?
                                <Avatar 
                                    size="100"
                                    round={true}
                                    src={profileTeacherImg}
                                />
                          : ''}   
                        </div> 
                    
                    </div>
        
                    <div className='row text-white justify-content-center' style={{fontSize:2+'em'}}>{isUserSidebar==="teacher"? 'Pierre Mvogo': isUserSidebar==="student"? 'Paul Aris': ''}</div>
                    <div className='row text-white justify-content-center' style={{fontSize:1.5+'em'}}>{isUserSidebar==="teacher"? 'Retymee School Educator': isUserSidebar==="student"? 'Retymee School Student': ''}</div>
                    <hr/>
                    <div className='row' style={{fontSize:12+'px', margin: 2+'px', cursor:'pointer'}} onClick={clickHandler}>
                        <div className='col-md-2'><i className="fas fa-tachometer-alt text-white mb-5" style={{ fontSize: '1.75em' }}/></div>
                        <div className='col-md-8 text-white'>Dashboard</div>
                    </div>
                    <hr/>
                    <div className='row' style={{fontSize:12+'px', margin: 2+'px',cursor:'pointer'}} onClick={clickHandlerNotifications}>
                        <div className='col-md-2'><i className="fa fa-bell text-white mb-5" style={{ fontSize: '1.75em' }}/></div>
                        <div className='col-md-8 text-white'>Notifications</div>
                        
                    </div>
                    <hr/>
                    {isUserSidebar==="teacher"?
                    <div className='row' style={{fontSize:12+'px', margin: 2+'px',cursor:'pointer'}} onClick={clickHandlerCourses}>
                        <div className='col-md-2'><i className="fas fa-tasks text-white mb-5" style={{ fontSize: '1.75em' }} /></div>
                        <div className='col-md-8 text-white'>Manages Courses</div>
                    </div>
                    : ''}

                    {isUserSidebar==="teacher"?
                    <div className='row' style={{fontSize:12+'px', margin: 2+'px',cursor:'pointer'}} onClick={clickHandlerEvaluation}>
                        <div className='col-md-2'><i className="fas fa-tasks text-white mb-5" style={{ fontSize: '1.75em' }} /></div>
                        <div className='col-md-8 text-white'>Manage Evaluations</div>
                    </div>
                    : ''}
                    
                    <div className='row' style={{fontSize:12+'px', margin: 2+'px',cursor:'pointer'}} onClick={clickHandlerSettings}>
                        <div className='col-md-2'><i className="fa fa-cog text-white mb-5" style={{ fontSize: '1.75em' }} /></div>
                        <div className='col-md-8 text-white'>Accounts settings</div>
                    </div>
                    <hr/>
                    <div className='row' style={{fontSize:12+'px', margin: 2+'px',cursor:'pointer'}} onClick={()=>history.push('/')}>
                        <div className='col-md-2'><i className="fas fa-sign-out-alt text-white mb-5" style={{ fontSize: '1.75em' }} /></div>
                        <div className='col-md-8 text-white'>Logout</div>
                    </div>
                    </div>
                 </div> 
     )
    }
export default Sidebar;



