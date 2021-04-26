import React, { useState, useEffect } from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
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
import { Dropdown } from 'react-bootstrap';
import './topbar.styles.scss';
import 'popper.js';

/**
 * @description simple sidebar component.  
 * @param {string} isUserTopbar "student|teacher"
 */

const Topbar = ({
    isUserTopbar, isDisplaySide, onChildClick, onChildClickSettings
    }) => {
        const history = useHistory();
        const handleLogout=()=>{
            history.push('/');
        }
       
        const clickHandler=(e)=>{
            onChildClick(e.target.name);
    }

    const clickHandlerSettings=(e)=>{
        onChildClickSettings(e.target.name);
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

    return (
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    
                        <div style={{fontSize: 2+'em'}} className="sidebar-brand d-flex align-items-center justify-content-center">
                            <div className="sidebar-brand-icon  mr-5" style={{cursor:'pointer'}} onClick={clickHandler}>
                                {isDisplaySide == 'none'? <i class="fas fa-bars text-primary"></i>: isDisplaySide == 'block'? <i class="far fa-window-close text-primary"></i>: ''}
                            </div>
    
                            <div className="sidebar-brand-icon">
                                {isUserTopbar==="teacher"?
                                    <Avatar 
                                        size="50"
                                        round={true}
                                        src={profileTeacherImg}
                                    />:isUserTopbar==="student"?
                                    <Avatar 
                                        size="50"
                                        round={true}
                                        src={profileStudentImg}
                                    />
                                     :isUserTopbar==="admin"?
                                     "Retymee School Elearning": ''}
                            
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
                        </Dropdown>
    
                        <Dropdown class="nav-item dropdown no-arrow " >
                            <Dropdown.Toggle variant='light'>
                            <i className="fas fa-cog text-dark"/>
                            </Dropdown.Toggle>
                            
                            <Dropdown.Menu style={{width: 100+'%', fontSize: 1.5+'em', marginRight: 2+'em'}} class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
    
                            <Dropdown.Item onClick={clickHandlerSettings}>
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
                  <NotificationContainer/>  
                </nav>
                
    )
}
export default Topbar;