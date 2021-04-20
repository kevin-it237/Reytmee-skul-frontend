import React, { useState, useEffect } from 'react';
import Modals from '../../../../app/components/modals/modal';
import Button from '../../../../app/components/buttons/button/button';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Dropdown} from 'react-bootstrap'; 
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import BootStrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {Redirect, useHistory} from 'react-router-dom';
import Footer from '../../../../app/components/footer/footer';
import '../../../../app/components/sidebar/sidebar'
import Sidebar from '../../../../app/components/sidebar/sidebar';
import Topbar from '../../../../app/components/topbar/topbar';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './course.scss';
import CreateCourse from '../../../course/pages/course.screen/create_course';


const Results = ({isUserDisplayList,onChildClick}) => {
    const history = useHistory();
    const [displaySide,setDisplaySide] = useState('none');

    const [showCreateCourse,setShowCreateCourse] = useState(false);
    const [showListCourse,setShowListCourse] = useState(true);

    const outPutEvent=(e)=> {
        if(displaySide == 'none'){
            setDisplaySide('block');
        }else{
            setDisplaySide('none');
        }

    }

    const clickHandler=(e)=>{
        onChildClick(e.target.name);
    }

    const outPutShowEvent=(e)=> {
        setShowCreateCourse(false,setShowListCourse(true));
    }
    
    const handleSideNavBody = () => {
        if(displaySide == 'block'){
            setDisplaySide('none');
        }
    }
    const handleLogout=()=>{
        history.push('/');
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
        <div id="wrapper" onClick={handleSideNavBody}>

        {/*  <!-- Sidebar -->*/}
       
        {/* <!-- End of Sidebar -->*/} 


       {/*<!-- Content Wrapper --> */} 
        <div id="content-wrapper" class="d-flex flex-column">
           {/* <!-- Main Content -->*/} 
            <div id="content">

            

               {/*<!-- Topbar --> */} 
               
               {/* <!-- End of Topbar -->*/} 


               {/*<!-- Begin Page Content --> */} 
                {isUserDisplayList==="teacher"?
                <div className="container">

                  {/*<!-- Page Heading --> */}  
                    
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800"></h1>
                        
                    </div>    

                   {/*<!-- Content Row --> */} 
                     
                            <div class="row">

                            {/* <!-- Earnings (Monthly) Card Example --> */}
                                    <div class="col-xl-3 col-md-3 mb-3">
                                        <div class="card  shadow" style={{backgroundColor:'#17879C'}}>
                                            <div class="card-body">
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col">
                                                        <div onClick={()=>history.push('/teacher/dashboard')} class="text-xs font-weight-bold text-white text-center" style={{fontSize:'calc(3px + 2vmin)',cursor:'pointer'}}>
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
                                                            <div onClick={()=>setShowCreateCourse(true,setShowListCourse(false))} class="text-xs font-weight-bold text-white text-center" style={{fontSize:'calc(3px + 2vmin)',cursor:'pointer'}}>
                                                            <i className="fa fa-cog"/>  Create Course
                                                            </div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-md-3 mb-3"></div>
                                       
                         </div>

                        {showListCourse?
                        <div> 
                            <div className='row '>  
                                    
                                            <div class="row no-gutters" >
                                                <div class="col">
                                                    <div onClick={()=>console.log("create lesson")} class="text-xs font-weight-bold">
                                                        <span className='mr-2' style={{fontSize:'calc(10px + 2vmin)'}}>Evaluations Results</span> 
                                                    </div>
                                                                
                                                </div>
                                                            
                                            </div>
                            </div>
                            

                            

                    {/*<!-- Content Row --> */}  

                    

                        <div class="row mt-5" style={{backgroundColor: '#EFEFEF'}} >

                        {/*<!-- Area Chart --> */} 
                            <div className="col-xl-12 col-lg-12 container-editor">
                                <header className="editor-header">Current Courses</header>
                                <span className='float-right' style={{cursor:'pointer'}} onClick={clickHandler}><i class="fa fa-window-close fa-2x text-blue-400" ></i></span>
                                <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Course</th>
                                        <th>Student</th>
                                        <th>Note/20</th>
                                        <th>Author</th>
                                        <th>Edit</th>
                       
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        
                                        <td>Arithmétique</td>
                                        <td>jorque paul</td>
                                        <td>15</td>
                                        <td>Alain Paul</td>
                                        <td><i className='fas fa-edit text-primary' /></td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Arithmétique</td>
                                        <td>jorque paul</td>
                                        <td>15</td>
                                        <td>Alain Paul</td>
                                        <td><i className='fas fa-edit text-primary' /></td>
                                    </tr>
                                    <tr>
                                        <td>Arithmétique</td>
                                        <td>jorque paul</td>
                                        <td>15</td>
                                        <td>Alain Paul</td>
                                        <td><i className='fas fa-edit text-primary' /></td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            </div> 
                        
                        </div>
                    </div>
                    : showCreateCourse? <CreateCourse onChildClick={outPutShowEvent} /> : ''}
             
                </div>: 
                 isUserDisplayList==="student"?
                 <div className="container">
            
                    <div class="row mt-5" style={{backgroundColor: '#EFEFEF'}}>
                        <div className="col-xl-12 col-lg-12 container-editor">
                            <header className="editor-header">Evaluation Results</header>
                            <span className='float-right' style={{cursor:'pointer'}} onClick={clickHandler}><i class="fa fa-window-close fa-2x text-blue-400" ></i></span>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Course</th>
                                        <th>Note/20</th>
                                        <th>Author</th>
                       
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        
                                        <td>Arithmétique</td>
                                        <td>18</td>
                                        <td>Alain Paul</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Anglais</td>
                                        <td>15</td>
                                        <td>Alain atshu</td>
                                    </tr>
                                    <tr>
                                        <td>Programmation C++</td>
                                        <td>17</td>
                                        <td>Alain Paul</td>
                                    </tr>
                                </tbody>
                            </table>
                        
                        </div> 

                    </div>
                 </div>
                 :''}









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
export default Results;