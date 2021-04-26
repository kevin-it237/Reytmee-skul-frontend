import React, { useState } from 'react';
import Modals from '../../../../app/components/modals/modal';
import Button from '../../../../app/components/buttons/button/button';
import {Redirect, useHistory} from 'react-router-dom';
import './course.scss';

const CreateCourse = ({onChildClick,onChildClickManageCourse,onChildClickDash}) => {
    const history = useHistory();
    const [createCourseForm,setCreateCourseForm] = useState({name: "", description: ""});

    const onChangeCreateCourse = (e) => {
        setCreateCourseForm({...createCourseForm,  [e.target.name]: e.target.value })
        
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        clickHandlerManageCourse(e);
        clickHandlerDash(e);
        console.log(createCourseForm.name);
            console.log(e);
    }

    const clickHandlerManageCourse=(e)=>{
        onChildClickManageCourse(e.target.name);
     }
     
     const clickHandlerDash=(e)=>{
         onChildClickDash(e.target.name);
     }

    const clickHandler=(e)=>{
            onChildClick(e.target.name);
    }
    

 
    return(
<div className="container">

<div class="row justify-content-center">

    <div class="col-xl-10 col-lg-12 col-md-9 col-sm-12">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
            
                <div class="overflow-auto">
                <h4 className="h4 title-course text-gray-600 font-weight-bold  text-center" style={{fontSize:2+'em'}}>
                    Add a Course 
                      <span className='float-right' style={{cursor:'pointer'}} onClick={clickHandler}><i class="fa fa-window-close  mr-2 text-blue-400" ></i></span>
                </h4>
                    <div className="auth-container col-lg-6">
                        <div className="p-3" style={{width:50+'vh'}}>
                        
                        
                            <form onSubmit={onSubmit}>
                         
                         <>
                             { Object.keys(createCourseForm).map((input,index)=>{
                                 console.log(input);
                                 return(
                                     
                                     <div key={index}  style={{fontSize:15+'px'}}>
                                             <div className="form-group"> 
                                                 <label htmlFor={input} className="font-weight-bold mr-5">Course {input} : </label>
                                                 {input === 'name'?
                                                 <input  
                                                     onChange={onChangeCreateCourse}   
                                                     placeholder={'Ex: The Principles of Hacking or Social Engineering'}
                                                     name={input}
                                                     type={"text"}
                                                     className="form-control"
                                                     id={input}
                                                     value={createCourseForm[input]}
                                                     
                                                 />: input === 'description'?
                                                 <textarea 
                                                    onChange={onChangeCreateCourse}  
                                                    placeholder={'Provide here a description of the course content'} 
                                                    name={input}
                                                    type={"textarea"}
                                                    className="form-control"
                                                    rows='5'
                                                    id={input}
                                                    value={createCourseForm[input]}
                                                 
                                             />: ''
                                                }
                                                 
                                             </div>
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
                                Create Course
                             </Button>
                         
                     </form> 
                          

                        </div>
                    </div>

                </div>



                
            </div>
        </div>

    </div>

</div>

</div>
              
    )  
}
export default CreateCourse;