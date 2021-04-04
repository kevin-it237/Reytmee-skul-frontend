import React, { useState, useEffect } from 'react';
import './dashboard.scss';
import Button from '../../../../app/components/buttons/button/button';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Dropdown, Modal } from 'react-bootstrap';
import SideNav, {Toggle, Nav, NavItem, NavIcon,NavText} from '@trendmicro/react-sidenav'; 
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import RegisterStudent from '../.././../auth/pages/auth.screen/auth_register_student';
import RegisterTeacher from '../../../auth/pages/auth.screen/auth_register_teacher';
import BootStrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {Redirect, useHistory} from 'react-router-dom';
import Footer from '../../../../app/components/footer/footer';
import './dashboard.scss';


const Dashboard = ({props})  => {
    const history = useHistory()
    const [isStudent, setIsStudent] = useState(false); 
    const [isTeacher, setIsTeacher] = useState(false);
    const [isHome, setIsHome] = useState(true);
    const [modalInfo, setModalInfo] = useState([]);
    const [show, setShow] = useState(false);

    const [showStudentModal, setShowStudentModal] = useState(false);
    const [showTeacherModal, setShowTeacherModal] = useState(false);

    const [updateFormStudent, setUpdateFormStudent] = useState({name: "", surname: "", email: "", address: "", phonenumber: "",  matricule: "",datenaiss: "" });
    const [updateFormTeacher, setUpdateFormTeacher] = useState({name: "", surname: "", email: "", address: "", phoneNumber: "",  code: "" });

    const [isUpdate,setIsUpdate] = useState(false);
    const [isDelete,setIsDelete] = useState(false);
    
    const handleClose = () =>{setShow(false)}
    const handleShow = () =>{setShow(true)}


    const onSubmit = (e) => {
        e.preventDefault();
            console.log(e);
    }
    const handleDelete=()=>{

    }

    const handleUpdate=()=>{

    }

            const studentColumns = [
                {dataField: "id",  text: "Id"},
                {dataField: "name",  text: "Name"},
                {dataField: "surname",  text: "surname"},
                {dataField: "email",  text: "Email"},
                {dataField: "address",  text: "Address"},
                {dataField: "phonenumber",  text: "Phone Number"},
                {dataField: "sex",  text: "Sex"},
                {dataField: "matricule",  text: "Matricule"},
                {dataField: "datenaiss",  text: "Date Naissance"},
                
                
                ];

            const studentData = [
                    {"id": 1, "name": 'Aris1', "surname" : 'pirate1', "email" : 'pirate@gmail.com', "address": 'yaounde', "phonenumber": '695892368', "sex": 'Masculin', "matricule": 'T47A8', "datenaiss": '10/11/1994',
                    },
                    
                    {"id": 2, "name": 'Aris2', "surname" : 'pirate2', "email" : 'pirate@gmail.com', "address": 'yaounde', "phonenumber": '695892368', "sex": 'Masculin', "matricule": 'T47A8', "datenaiss": '10/11/1994',
                    },

                    {"id": 3, "name": 'Aris3', "surname" : 'pirate3', "email" : 'pirate@gmail.com', "address": 'yaounde', "phonenumber": '695892368', "sex": 'Feminin', "matricule": 'T47A8', "datenaiss": '10/11/1994',
                    },

                    {"id": 4, "name": 'Aris4', "surname" : 'pirate4', "email" : 'pirate@gmail.com', "address": 'yaounde', "phonenumber": '695892368', "sex": 'Feminin', "matricule": 'T47A8', "datenaiss": '10/11/1994',
                    },

                    {"id": 5, "name": 'Aris5', "surname" : 'pirate5', "email" : 'pirate@gmail.com', "address": 'yaounde', "phonenumber": '695892368', "sex": 'Masculin', "matricule": 'T47A8', "datenaiss": '10/11/1994',
                    },
                
            ];
           

            const teacherColumns = [
                    {dataField: "id",  text: "Id"},
                    {dataField: "name",  text: "Name"},
                    {dataField: "surname",  text: "Surname"},
                    {dataField: "email",  text: "Email"},
                    {dataField: "address",  text: "Address"},
                    {dataField: "phonenumber",  text: "Phone Number"},
                    {dataField: "sex",  text: "Sex"},
                    {dataField: "code",  text: "Code"},
                    
                ];

            const teacherData = [
                    {"id": 1, "name": 'Dereck1', "surname" : 'retymee1', "email" : 'retymee@gmail.com', "address": 'yaounde', "phonenumber": '695892368', "sex": 'Masculin', "code": '5261DFGG',
                    },

                    {"id": 2, "name": 'Dereck2', "surname" : 'retymee2', "email" : 'retymee@gmail.com', "address": 'yaounde', "phonenumber": '695892368', "sex": 'Feminin', "code": 'FD2545DF', 
                    },

                    {"id": 3, "name": 'Dereck3', "surname" : 'retymee3', "email" : 'retymee@gmail.com', "address": 'yaounde', "phonenumber": '695892368', "sex": 'Feminin', "code": 'SDF525DF', 
                    },

                    {"id": 4, "name": 'Dereck4', "surname" : 'retymee4', "email" : 'retymee@gmail.com', "address": 'yaounde', "phonenumber": '695892368', "sex": 'Masculin', "code": 'DSF225FF', 
                    },

                    {"id": 5, "name": 'Dereck5', "surname" : 'retymee5', "email" : 'retymee@gmail.com', "address": 'yaounde', "phonenumber": '695892368', "sex": 'Masculin', "code": 'FDSG5254', 
                    },
                
                ];
                
                    const ModalContent=()=>{
                        return(
                                <Modal  show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Update or Delete user Information</Modal.Title>
                                        </Modal.Header>
                                         <form onSubmit={onSubmit}>
                                             <Modal.Body>
                                            <>
                                                { Object.keys(modalInfo).map((value,index)=>{
                                                    console.log(value);
                                                    return(
                                                        
                                                        <div key={index} className="form-group" style={{fontSize:15+'px'}}>
                                                            {(value === 'sex') ? '' :
                                                                <div> 
                                                                    <label htmlFor={value} className="font-weight-bold mr-5">{value} : </label>
                                                                    {modalInfo[value]}
                                                                    <input 
                                                                        name={value}
                                                                        type="text"
                                                                        onChange={(e)=>e.target.value}
                                                                        className="form-control"
                                                                        id={value}
                                                                        
                                                                    />
                                                                </div>
                                                            }
                                                        </div>
                                                    )  
                                                })
                                                    
                                                }
                                            </>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button 
                                                    variant="warning" 
                                                    type="submit" 
                                                    value="update"
                                                    size="xl"
                                                    className='dashboard-container__button'
                                                    >
                                                    Update
                                                </Button>

                                                <Button  
                                                    type="submit" 
                                                    variant="danger"  
                                                    value="delete"
                                                    size="xl"
                                                    className='dashboard-container__button'
                                                    >
                                                    Delete
                                                </Button>
                                            </Modal.Footer>
                                        </form>
                                       
                                        
                                </Modal>    
                        )
                    }

                    const handleLogout=()=>{
                        history.push('/');
                    }           

                    const selectStudentRow = {
                        mode: 'radio',
                        clickToSelect: true,
                        selectColumnPosition: 'right',
                        headerColumnStyle:{backgroundColor: 'blue'},
                        onSelect: (row,isSelect,rowIndex,e) =>{
                            setShow(!show,setShowStudentModal(!showStudentModal));
                            setModalInfo(row);
                            console.log(row);
                        }
                    }

                    const selectTeacherRow = {
                        mode: 'radio',
                        clickToSelect: true,
                        selectColumnPosition: 'right',
                        headerColumnStyle:{backgroundColor: 'yellow'},
                        onSelect: (row,isSelect,rowIndex,e) =>{
                            setShow(!show,setShowTeacherModal(!showTeacherModal)); 
                            setModalInfo(row);
                            console.log(row);
                        }
                    }
    
        return(
    <div id="wrapper">

       {/*  <!-- Sidebar -->*/}
         
       <SideNav
            onSelect={(selected) => {
                // Add your code here
                if(selected == "home"){
                    setIsTeacher(false);
                    setIsStudent(false);
                }
                if(selected == "account/student"){
                    setIsStudent(!isStudent, setIsTeacher(false));
                }else{if(selected == "account/teacher")
                    setIsTeacher(!isTeacher, setIsStudent(false));
                    }
                
                    }}
                >
                   {/* <SideNav.Toggle />*/}
                   
                   <div class="" style={{marginBottom: 65+'px'}}></div>
                    <SideNav.Nav defaultSelected="home">

                        <NavItem eventKey="home">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Dashboard
                            </NavText>
                        </NavItem>

                        <NavItem eventKey="account">
                            <NavIcon>
                                <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                            Add User
                            </NavText>
                            <NavItem eventKey="account/student">
                                <NavText>
                                    Add Student 
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="account/teacher">
                                <NavText>
                                   Add Teacher 
                                </NavText>
                            </NavItem>
                        </NavItem>


                        <NavItem eventKey="list">
                            <NavIcon>
                                <i className="fa fa-fw fa-list" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                            Users 
                            </NavText>
                            <NavItem eventKey="list/student">
                                <NavText>
                                    Student 
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="list/teacher">
                                <NavText>
                                    Teacher 
                                </NavText>
                            </NavItem>
                        </NavItem>

                    

                    </SideNav.Nav>
                </SideNav>
       {/* <!-- End of Sidebar -->*/} 







       {/*<!-- Content Wrapper --> */} 
        <div id="content-wrapper" class="d-flex flex-column" style={{marginLeft: 5+'%'}}>
           {/* <!-- Main Content -->*/} 
            <div id="content">



               {/*<!-- Topbar --> */} 
               <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                   

                    <div style={{fontSize: 2+'em'}} className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i class="fas fa-graduation-cap"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">Retymee School E-learning<sup></sup></div>
                    </div>


                    <ul class="navbar-nav ml-auto">


                    <div class="topbar-divider d-none d-sm-block"></div>

                    <Dropdown class="nav-item dropdown no-arrow" style={{zIndex: 10000}}>
                        <Dropdown.Toggle style={{border:'none'}} variant="none" class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{fontSize:20+'px'}}>
                            <span class="mr-2 d-none d-lg-inline text-gray-600 small">Admin User</span>
                            <img class="img-profile rounded-circle"
                                src="img/undraw_profile.svg"/>
                        </Dropdown.Toggle>
                        
                        <Dropdown.Menu style={{width: 100+'%', fontSize: 1.5+'em', marginRight: 2+'em'}} class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="userDropdown">

                        <Dropdown.Item href="#/action-1" class="dropdown-item mb-4">
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
               {/* <!-- End of Topbar -->*/} 


               {/*<!-- Begin Page Content --> */} 
                <div className="container-fluid">

                  {/*<!-- Page Heading --> */}  
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard Administrator</h1>
                        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>

                   {/*<!-- Content Row --> */} 
                    <div class="row" style={{fontSize: 2+'em'}}>

                       {/* <!-- Earnings (Monthly) Card Example --> */}
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary  mb-1" style={{fontSize: 1+'em'}}>
                                                Student</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">12</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fa fa-users fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        

                      {/* <!-- Pending Requests Card Example -->*/}  
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-warning shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-warning  mb-1" style={{fontSize: 1+'em'}}>
                                                Teacher</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-chalkboard-teacher fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                  {/*<!-- Content Row --> */}  






                    <div class="row">

                       {/*<!-- Area Chart --> */} 
                        <div className="col-xl-12 col-lg-10">
                            

                            {
                            
                            isStudent ? <RegisterStudent /> : isTeacher? <RegisterTeacher /> : isHome?
                            <div>
                                <span className="font-weight-bold text-primary" style={{fontSize: 15+'px'}}>Student</span>
                                <BootStrapTable 
                                        
                                        keyField="id"
                                        data={studentData}
                                        columns={studentColumns}
                                        pagination={paginationFactory()}  
                                        selectRow={selectStudentRow}
                                        
                                />
                                 <div class="topbar-divider d-none d-sm-block mb-5"></div>
                                 
                                <span className="font-weight-bold text-warning" style={{fontSize: 15+'px'}}>Teacher</span>
                                <BootStrapTable 
                                        keyField="id"
                                        data={teacherData}
                                        columns={teacherColumns}
                                        pagination={paginationFactory()} 
                                        selectRow={selectTeacherRow} 
                                />
                                {show? <ModalContent /> : null}
                            </div>  : ''
                            
                            } 
                            
                            
                            
                        </div>





                       {/* <!-- Pie Chart -->*/} 
                        
                    </div>

                   {/* <!-- Content Row -->*/} 
                    <div class="row">

                       {/* <!-- Content Column -->*/} 
                        <div class="col-lg-6 mb-4">

                           {/* <!-- Project Card Example -->
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
                                </div>
                                <div class="card-body">
                                    <h4 class="small font-weight-bold">Server Migration <span
                                            class="float-right">20%</span></h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar bg-danger" role="progressbar" style={{width: 20+'%'}}
                                            aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 class="small font-weight-bold">Sales Tracking <span
                                            class="float-right">40%</span></h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar bg-warning" role="progressbar" style={{width: 40+'%'}}
                                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 class="small font-weight-bold">Customer Database <span
                                            class="float-right">60%</span></h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar" role="progressbar" style={{width: 60+'%'}}
                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 class="small font-weight-bold">Payout Details <span
                                            class="float-right">80%</span></h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar bg-info" role="progressbar" style={{width: 80+'%'}}
                                            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 class="small font-weight-bold">Account Setup <span
                                            class="float-right">Complete!</span></h4>
                                    <div class="progress">
                                        <div class="progress-bar bg-success" role="progressbar" style={{width: 100+'%'}}
                                            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>*/} 

                           {/* <!-- Color System -->
                            <div class="row">
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-primary text-white shadow">
                                        <div class="card-body">
                                            Primary
                                            <div class="text-white-50 small">#4e73df</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-success text-white shadow">
                                        <div class="card-body">
                                            Success
                                            <div class="text-white-50 small">#1cc88a</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-info text-white shadow">
                                        <div class="card-body">
                                            Info
                                            <div class="text-white-50 small">#36b9cc</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-warning text-white shadow">
                                        <div class="card-body">
                                            Warning
                                            <div class="text-white-50 small">#f6c23e</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-danger text-white shadow">
                                        <div class="card-body">
                                            Danger
                                            <div class="text-white-50 small">#e74a3b</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-secondary text-white shadow">
                                        <div class="card-body">
                                            Secondary
                                            <div class="text-white-50 small">#858796</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-light text-black shadow">
                                        <div class="card-body">
                                            Light
                                            <div class="text-black-50 small">#f8f9fc</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-dark text-white shadow">
                                        <div class="card-body">
                                            Dark
                                            <div class="text-white-50 small">#5a5c69</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>*/} 

                        <div class="col-lg-6 mb-4">

                           {/*<!-- Illustrations --> 
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Illustrations</h6>
                                </div>
                                <div class="card-body">
                                    <div class="text-center">
                                        <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25+'rem'}}
                                            src="img/undraw_posting_photo.svg" alt=""/>
                                    </div>
                                    <p>Add some quality, svg illustrations to your project courtesy of <a
                                            target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                                        constantly updated collection of beautiful svg images that you can use
                                        completely free and without attribution!</p>
                                    <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                                        unDraw &rarr;</a>
                                </div>
                            </div>
*/} 
                           {/*<!-- Approach --> 
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Development Approach</h6>
                                </div>
                                <div class="card-body">
                                    <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
                                        CSS bloat and poor page performance. Custom CSS classes are used to create
                                        custom components and custom utility classes.</p>
                                    <p class="mb-0">Before working with this theme, you should become familiar with the
                                        Bootstrap framework, especially the utility classes.</p>
                                </div>*/}
                            </div> 

                        </div>
                    </div>

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
export default Dashboard;