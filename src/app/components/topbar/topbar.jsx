
import { Dropdown } from 'react-bootstrap';
import React, { useState } from 'react';
import './topbar.styles.scss';
import 'popper.js';

const Topbar = () => {

    return (
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>
                
                    
                    <div style={{fontSize: 2+'em'}} className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i class="fas fa-graduation-cap"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">Retymee School E-learning<sup></sup></div>
                    </div>

                    
                    <ul class="navbar-nav ml-auto">


                        <div class="topbar-divider d-none d-sm-block"></div>

                        <Dropdown class="nav-item dropdown no-arrow">
                            <Dropdown.Toggle style={{border:'none'}} variant="none" class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{fontSize:20+'px'}}>
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Admin User</span>
                                <img class="img-profile rounded-circle"
                                    src="img/undraw_profile.svg"/>
                            </Dropdown.Toggle>
                            
                            <Dropdown.Menu style={{width: 100+'%',height: 20+'vh', fontSize: 1.5+'em', marginRight: 2+'em'}} class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">

                                <Dropdown.Item href="#/action-1" class="dropdown-item mb-3">
                                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </Dropdown.Item>

                                <Dropdown.Item href="#/action-1" class="dropdown-item mb-3">
                                    <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </Dropdown.Item>

                                <Dropdown.Item href="#/action-1" class="dropdown-item mb-3">
                                    <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </Dropdown.Item>

                                <div class="dropdown-divider"></div>
                                <Dropdown.Item href="#/action-1" class="dropdown-item mb-3" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>

                    </ul>

                </nav>
    )
}
export default Topbar;