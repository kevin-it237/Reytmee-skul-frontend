import React, { useState, useEffect } from 'react';
import './dashboard.scss';
import Button from '../../../../app/components/buttons/button/button';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Dropdown} from 'react-bootstrap';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import RegisterStudent from '../.././../auth/pages/auth.screen/auth_register_student';
import RegisterTeacher from '../../../auth/pages/auth.screen/auth_register_teacher';
import BootStrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {Redirect, useHistory} from 'react-router-dom';
import Footer from '../../../../app/components/footer/footer';
import '../../../../app/components/sidebar/sidebar'
import Sidebar from '../../../../app/components/sidebar/sidebar';
import Modals from '../../../../app/components/modals/modal';
import Topbar from '../../../../app/components/topbar/topbar';


const DashboardAdmin = ({props})  => {
    const history = useHistory()
    const [isStudent, setIsStudent] = useState(false); 
    const [isTeacher, setIsTeacher] = useState(false);
    const [isHome, setIsHome] = useState(true);
    const [modalInfo, setModalInfo] = useState([]);
    const [showTab, setShowTab] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false)
    const [showStudentModal, setShowStudentModal] = useState(false);
    const [showTeacherModal, setShowTeacherModal] = useState(false);

    const [showStudentTabModal, setShowStudentTabModal] = useState(false);
    const [showTeacherTabModal, setShowTeacherTabModal] = useState(false);

    const [updateFormStudent, setUpdateFormStudent] = useState({name: "", surname: "", email: "", address: "", phonenumber: "",  matricule: "",datenaissance: "" });
    const [updateFormTeacher, setUpdateFormTeacher] = useState({name: "", surname: "", email: "", address: "", phoneNumber: "",  code: "" });

    const [isUpdate,setIsUpdate] = useState(false);
    const [isDelete,setIsDelete] = useState(false);
    
    const handleTabClose = () =>{setShowTab(false)}
    const handleCloseStudent = () =>{setShowStudentModal(false)}
    const handleCloseTeacher = () =>{setShowTeacherModal(false)}
    const handleCloseProfile = () =>{setShowProfileModal(false)}
    



    const [displaySide,setDisplaySide] = useState('none');
 

    const onSubmit = (e) => {
        e.preventDefault();
            console.log(e);
    }
    const handleDelete=()=>{

    }

    const handleUpdate=()=>{

    }

   
    
    const handleSideNav = () => {
        if(displaySide == 'none'){
            setDisplaySide('block');
        }else{
            setDisplaySide('none');
        }
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
                {dataField: "datenaissance",  text: "Date Naissance"},
                {dataField: "role",  text: "Role"},
                
                
                ];

            const studentData = [
                    {"id": 1, "name": 'Aris1', "surname" : 'pirate1', "email" : 'pirate@gmail.com', "address": 'yaounde', "phonenumber": '695892368', "sex": 'Masculin', "matricule": 'T47A8', "datenaissance": '10/11/1994',
                    },
                    
                    {"id": 2, "name": 'Aris2', "surname" : 'pirate2', "email" : 'pirate@gmail.com', "address": 'yaounde', "phonenumber": '695892368', "sex": 'Masculin', "matricule": 'T47A8', "datenaissance": '10/11/1994',
                    },

                    {"id": 3, "name": 'Aris3', "surname" : 'pirate3', "email" : 'pirate@gmail.com', "address": 'yaounde', "phonenumber": '695892368', "sex": 'Feminin', "matricule": 'T47A8', "datenaissance": '10/11/1994',
                    },

                    {"id": 4, "name": 'Aris4', "surname" : 'pirate4', "email" : 'pirate@gmail.com', "address": 'yaounde', "phonenumber": '695892368', "sex": 'Feminin', "matricule": 'T47A8', "datenaissance": '10/11/1994',
                    },

                    {"id": 5, "name": 'Aris5', "surname" : 'pirate5', "email" : 'pirate@gmail.com', "address": 'yaounde', "phonenumber": '695892368', "sex": 'Masculin', "matricule": 'T47A8', "datenaissance": '10/11/1994',
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
                    {dataField: "role",  text: "Role"},
                    
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

                    const ModalContentStudent=()=>{
                       const modalcontstudent = {
                           title: "Register Student",
                           bodycontent: <RegisterStudent />
                       }
                        return(
                            <div>
                            <Modals  
                                show={showStudentModal} 
                                onhide={handleCloseStudent}
                                titlecontent={modalcontstudent.title}
                                bodycontent={modalcontstudent.bodycontent}
                                footercontent={modalcontstudent.footercontent}
                                dialogclassname={"custom-register"}
                            />    
                            </div> 
                    )
                    }
                    const ModalContentTeacher=()=>{
                        const modalcontteacher = {
                            title: "Register Teacher",
                            bodycontent: <RegisterTeacher />
                        }
                        return(
                            <Modals  
                                show={showTeacherModal} 
                                onhide={handleCloseTeacher}
                                titlecontent={modalcontteacher.title}
                                bodycontent={modalcontteacher.bodycontent}
                                footercontent={modalcontteacher.footercontent}
                                dialogclassname={"custom-register"}
                                
                            />     
                    )
                    }


                    const ModalContentProfile=()=>{
                        const modalcontprofile = {
                            title: "Your Admin Profile",
                            bodycontent: 
                            <div class="col-lg-6 mb-4">
                               <div class="">
                              
                                <div class="" align="center" onClick={()=>console.log("profile settings")}>
                                    <p style={{fontSize:'calc(10px + 2vmin)'}}>General Settings</p>

                                    <form>
                                        <div className='row mb-3'>
                                            <label className='col-lg-3 mt-3'>Username: </label>
                                            <input type='text' id='username' className='col-lg-7' value="Pirate" />
                                            </div>
                                        <div className='row mb-3'>
                                            <label className='col-lg-3 mt-3'>First Name: </label>
                                            <input type='text' id='username' className='col-lg-7' value="mvogo"/>
                                            </div> 
                                        <div className='row mb-5'>
                                            <label className='col-lg-3 mt-3'>Last Name: </label>
                                            <input type='text' id='username' className='col-lg-7 mb-5' value="paul"/>
                                        </div> 
                                        <div className='row mb-5'>
                                            <label className='col-lg-3 mt-3'>Email: </label>
                                            <input type='text' id='email' className='col-lg-7 mb-5' value="paul@gmail.com"/>
                                        </div> 

                                        <Button 
                                            variant="warning" 
                                            type="submit" 
                                            value="update"
                                            
                                            size=""
                                            className='dashboard-container__button'
                                        >
                                        Save
                                        </Button>
                                    </form>

                                </div>
                            </div> 
                        </div>
                        }
                        return(
                            <Modals  
                                show={showProfileModal} 
                                onhide={handleCloseProfile}
                                titlecontent={modalcontprofile.title}
                                bodycontent={modalcontprofile.bodycontent}
                                footercontent={modalcontprofile.footercontent}
                                dialogclassname={"custom-profile"}
                                
                            />     
                    )
                    }
                
                    const ModalContent=()=>{

                        const modalcont = {
                            title : "Update or Delete user Information",
                            bodycontent : <form onSubmit={onSubmit}>
                                             
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
                            
                        </form> 
                        }
                        return( 
                        
                            <Modals  
                                show={showTab} 
                                onhide={handleTabClose}
                                titlecontent={modalcont.title}
                                bodycontent={modalcont.bodycontent}
                                footercontent={modalcont.footercontent}
                                dialogclassname={"custom-tabuser"}
                            />
                                   
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
                            setShowTab(!showTab,setShowStudentTabModal(!showStudentTabModal));
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
                            setShowTab(!showTab,setShowTeacherTabModal(!showTeacherTabModal)); 
                            setModalInfo(row);
                            console.log(row);
                        }
                    }
                    const handleSideNavBody = () => {
                        if(displaySide == 'block'){
                            setDisplaySide('none');
                        }
                    }

                    const outPutShowEvent=(e)=>{
                        setIsHome(true);
                    } 

                    const outPutStudentModal=(e)=>{
                        setShowStudentModal(true);
                    }
                    
                    const outPutTeacherModal=(e)=>{
                        setShowTeacherModal(true);
                    }
                    const outPutShowSettings=(e)=>{
                        setShowProfileModal(true);
                    }

                    const outPutEvent=(e)=> {
                        if(displaySide == 'none'){
                            setDisplaySide('block');
                        }else{
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
                isUserSidebar={"admin"}
                onChildClick={outPutShowEvent}
                onChildClickStudentModal={outPutStudentModal}
                onChildClickTeacherModal={outPutTeacherModal}
                onChildClickSettings={outPutShowSettings}>
                
            </Sidebar>
            {showStudentModal? <ModalContentStudent />: ''}
            {showTeacherModal? <ModalContentTeacher />: ''}
            {showProfileModal? <ModalContentProfile />: ''}
        {/* <!-- End of Sidebar -->*/} 







       {/*<!-- Content Wrapper --> */} 
        <div id="content-wrapper" class="d-flex flex-column">
           {/* <!-- Main Content -->*/} 
            <div id="content">

            

               {/*<!-- Topbar --> */} 
               <Topbar  
                    isUserTopbar={"admin"} 
                    isDisplaySide={displaySide} 
                    onChildClick={outPutEvent}  
                    onChildClickSettings={outPutShowSettings}
               />

               {/* <!-- End of Topbar -->*/} 


               {/*<!-- Begin Page Content --> */} 
                <div className="container-fluid">

                  {/*<!-- Page Heading --> */}  
                   {isHome? 
                      <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard Administrator</h1>
                        {/*<a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>*/}
                    </div> : ''}   

                   {/*<!-- Content Row --> */} 
                    {isHome? 
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
                         </div>: ''}

                  {/*<!-- Content Row --> */}  

                    <div class="row">

                       {/*<!-- Area Chart --> */} 
                        <div className="col-xl-12 col-lg-10">
                            

                            { 
                             isHome?
                            <div>
                                
                                <Button className="font-weight-bold text-primary float-right mb-5" onClick={()=>setShowStudentModal(true)} style={{fontSize: 15+'px'}}>Add Student</Button>
                                <span className="font-weight-bold text-primary" style={{fontSize: 15+'px'}}>Student</span>
                                <BootStrapTable 
                                        
                                        keyField="id"
                                        data={studentData}
                                        columns={studentColumns}
                                        pagination={paginationFactory()}  
                                        selectRow={selectStudentRow}
                                        
                                />
                                 <div class="topbar-divider d-none d-sm-block mb-5"></div>
                                 <Button className="font-weight-bold text-warning float-right mb-5" onClick={()=>setShowTeacherModal(true)} style={{fontSize: 15+'px'}}>Add Teacher</Button>
                                <span className="font-weight-bold text-warning" style={{fontSize: 15+'px'}}>Teacher</span>
                                <BootStrapTable 
                                        keyField="id"
                                        data={teacherData}
                                        columns={teacherColumns}
                                        pagination={paginationFactory()} 
                                        selectRow={selectTeacherRow} 
                                />
                                {showTab? <ModalContent /> : 'null' }
                            </div>  : 'Noting to show'
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
                            </div>

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
export default DashboardAdmin;