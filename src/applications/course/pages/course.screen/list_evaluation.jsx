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
import EvaluationCourse from './evaluation_course';


const ListEvaluation = ({isUserDisplayList,onChildClick}) => {
    const history = useHistory();
    const [displaySide,setDisplaySide] = useState('none');

    const [showCreateEvaluation,setShowCreateEvaluation] = useState(false);
    const [showListEvaluation,setShowListEvaluation] = useState(true);

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
        setShowCreateEvaluation(false,setShowListEvaluation(true));
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

                   {/*<!-- Content Row --> */} 
                     
                            <div class="row">

                            {/* <!-- Earnings (Monthly) Card Example --> 
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
                                    </div>*/}
            
                                {/* <!-- Pending Requests Card Example --> 
                                    

                                    <div class="col-xl-3 col-md-3 mb-3">
                                        <div class="card  shadow "style={{backgroundColor:'#17879C'}}>
                                            <div class="card-body">
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col">
                                                            <div onClick={()=>setShowCreateEvaluation(true,setShowListEvaluation(false))} class="text-xs font-weight-bold text-white text-center" style={{fontSize:'calc(3px + 2vmin)',cursor:'pointer'}}>
                                                            <i className="fa fa-cog"/>  Create Evaluation
                                                            </div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>*/} 
                                    <div class="col-xl-3 col-md-3 mb-3"></div>
                                       
                         </div>

                        {showListEvaluation?
                        <div> 
                            <div className='row '>  
                                    
                                            <div class="row no-gutters" >
                                                <div class="col">
                                                    <div onClick={()=>console.log("create lesson")} class="text-xs font-weight-bold">
                                                        <span className='mr-2' style={{fontSize:'calc(10px + 2vmin)'}}>Evaluations</span> 
                                                    </div>
                                                                
                                                </div>
                                                            
                                            </div>
                            </div>
                            

                            

                    {/*<!-- Content Row --> */}  

                    

                        <div class="row mt-5" style={{backgroundColor: '#EFEFEF'}} >

                        {/*<!-- Area Chart --> */} 
                            <div className="col-xl-12 col-lg-12 container-editor">
                                <header className="editor-header">Your Current Evaluations</header>
                                <span className='float-right' style={{cursor:'pointer'}} onClick={clickHandler}><i class="fa fa-window-close fa-2x text-blue-400" ></i></span>
                                <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Course</th>
                                        <th>Author</th>
                                        <th>type</th>
                                        <th>Duration</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Details</th>
                                        <th>Edit</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='justify-content-center'>Arithmetique</td>
                                        <td>Pierre mvogo</td>
                                        <td>Session normale</td>
                                        <td>2h</td>
                                        <td>05/11/2020</td>
                                        <td>In progress</td>
                                        <td><i className='fas fa-eye text-primary'></i></td>
                                        <td><i className='fas fa-edit text-primary'></i></td>
                                    </tr>
                                    <tr>
                                        <td className='justify-content-center'>Anglais</td>
                                        <td>Aris pirate</td>
                                        <td>Controle continue</td>
                                        <td>1h</td>
                                        <td>05/11/2012</td>
                                        <td>Not start</td>
                                        <td><i className='fas fa-eye text-primary'></i></td>
                                        <td><i className='fas fa-edit text-primary'></i></td>
                                    </tr>
                                    <tr>
                                        <td className='justify-content-center'>Programmation C++</td>
                                        <td>Paul Jean</td>
                                        <td>Session normale</td>
                                        <td>3h</td>
                                        <td>05/11/2015</td>
                                        <td>In progress</td>
                                        <td><i className='fas fa-eye text-primary'></i></td>
                                        <td><i className='fas fa-edit text-primary'></i></td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            </div> 
                        
                        </div>
                    </div>
                    : showCreateEvaluation? <EvaluationCourse  /> : ''}
             
                </div>: 
                 isUserDisplayList==="student"?
                 <div className="container">

                    <div class="row mt-5" style={{backgroundColor: '#EFEFEF'}}>
                        <div className="col-xl-12 col-lg-12 container-editor">
                            <header className="editor-header">Current Evaluations</header>
                            <span className='float-right' style={{cursor:'pointer'}} onClick={clickHandler}><i class="fa fa-window-close fa-2x text-blue-400" ></i></span>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Course</th>
                                        <th>Author</th>
                                        <th>type</th>
                                        <th>Duration</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Start</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='justify-content-center'>Arithmetique</td>
                                        <td>Pierre mvogo</td>
                                        <td>Session normale</td>
                                        <td>2h</td>
                                        <td>05/11/2020</td>
                                        <td>In progress</td>
                                        <td><i className='fas fa-rocket text-primary'></i></td>
                                    </tr>
                                    <tr>
                                        <td className='justify-content-center'>Anglais</td>
                                        <td>Aris pirate</td>
                                        <td>Controle continue</td>
                                        <td>1h</td>
                                        <td>05/11/2012</td>
                                        <td>Not start</td>
                                        <td><i className='fas fa-rocket text-primary'></i></td>
                                    </tr>
                                    <tr>
                                        <td className='justify-content-center'>Programmation C++</td>
                                        <td>Paul Jean</td>
                                        <td>Session normale</td>
                                        <td>3h</td>
                                        <td>05/11/2015</td>
                                        <td>In progress</td>
                                        <td><i className='fas fa-rocket text-primary'></i></td>
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
export default ListEvaluation;