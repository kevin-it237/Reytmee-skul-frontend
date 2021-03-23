import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import useError from '../../hooks/useError';
import {useHistory} from 'react-router-dom'
import useRedirect from '../../hooks/useRedirect';
import { authSignIn, authRegister} from '../../redux/reducer/actions';
import { ReactComponent as Eye } from '../../../../assets/icons/eye.svg';
import { ReactComponent as Uneye } from '../../../../assets/icons/uneye.svg';
import Button from '../../../../app/components/buttons/button/button';
import carImg from '../../../../assets/images/car.png'
import './auth.screen.scss'
import '../../../../assets/vendor/fontawesome-free/css/all.min.css';
import '../../../../assets/css/sb-admin-2.scss';
import skulImg from '../../../../assets/images/imskul.png';
import {Tooltip} from 'reactstrap';



const Login = ({ error, redirect, user }) => {
    const history = useHistory()
    const dispatch= useDispatch()

    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [loginForm, setLoginForm] = useState({username: "", password: "", remember: false})
    const [registerFormTeacher, setRegisterFormTeacher] = useState({name: "", surname: "", email: "", address: "", PhoneNumber: "",  sex: ["M","F"],  code: "", confirmation: "", profilImage: "", remember: false})
    const [registerFormStudent, setRegisterFormStudent] = useState({name: "", surname: "", email: "", address: "", PhoneNumber: "",   sex: ["M", "F"],  matricule: "", confirmation: "",dateNaiss: "", profilImage: "", remember: false})
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formError, setformError] = useState(null)
    const [isDisplayForm, setIsDisplayForm] = useState(true);
    const [isRegisterFormStudent, setIsRegisterFormStudent] = useState(true);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetPasswordForm,setResetPasswordForm] = useState({email: ""});
    const [tooltipOpen, setTooltipOpen] = useState(false)
 

    useEffect(() => {
        if(user) {
            history.push('/')
        }
    }, [])
    const toggle = () => setTooltipOpen(!tooltipOpen);

    const onSubmit = (e) => {
        e.preventDefault();
        if (submited) { return }
        if(isLoginForm) {
            dispatch(authSignIn({...loginForm, redirect: history.location.state?.pathname || '/'}));
        } else {
            if(validateForm() ) {
                if(isRegisterFormStudent){
                   dispatch(authRegister({...registerFormStudent, redirect: history.location.state?.pathname || '/'}))
                   setformError(null)
                }
                   dispatch(authRegister({...registerFormTeacher, redirect: history.location.state?.pathname || '/'}))
                   setformError(null)
            } else {
                return;
            }
        }
        setSubmited(true);
    }



    const validateForm = () => {
        if(registerFormStudent.name.trim().length < 5) {
            setformError('Name min length is 5 caracters')
            return false
        }else if(registerFormTeacher.name.trim().length < 5){
            setformError('Name min length is 5 caracters')
            return false
        }

        if(registerFormTeacher.code.trim().length < 6) {
            setformError('Code min length is 6 caracters')
            return false
        }else if(registerFormStudent.matricule.trim().length < 6){
            setformError('Matricule min length is 5 caracters')
            return false
        }

        if(registerFormTeacher.code !== registerFormTeacher.confirmation) {
            setformError('Passwords dont match')
            return false
        }else if(registerFormStudent.matricule !== registerFormStudent.confirmation){
            setformError('Passwords dont match')
            return false
        }

        return true
    }
    
    // Change form input values. 
    const onChangeLogin = (e) => setLoginForm({...loginForm,  [e.target.name]: e.target.value })

    const onChangeRegisterTeacher = (e) => {
        setRegisterFormTeacher({...registerFormTeacher,  [e.target.name]: e.target.value })
        setformError(null)
    }

    const onChangeRegisterStudent = (e) => {
        setRegisterFormStudent({...registerFormStudent,  [e.target.name]: e.target.value })
        setformError(null)
    }

    const onChangeResetPassword = (e) => {
        setResetPasswordForm({...resetPasswordForm,  [e.target.name]: e.target.value })
        setformError(null)
    }

    useError(error, [() => setSubmited(false)]); 
    useRedirect(redirect);

    return (
        <div className="container">

        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9 col-sm-12">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                    
                        <div class="row overflow-auto">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image auth_container align">
                                <div className="row auth_rety  font-weight-bold">Retymee School E-learning</div>
                                <div className="row"><img src={skulImg} alt="" className="auth_logo" /></div>
                            </div>

                            <div className="auth-container col-lg-6  align">
                                <div className="p-6">
                                <h4 className="h4 text-gray-600 font-weight-bold auth_title text-center auth-container__title mt-5">

                                    {isLoginForm ? "Sign In": !isDisplayForm ? "Create Account as": !isRegisterFormStudent? "Create Student Account": isForgotPassword? 
                                    `Forgot Your Password? Just Enter your Email ` : "Create Teacher Account"}

                                    </h4>
                                
                                  {isDisplayForm ?
                                  <form className="auth-container__card" onSubmit={onSubmit}>
                                            {
                                                isLoginForm ?
                                                 <>
                                                    {Object.keys(loginForm).map((input,index)=>{
                                                            return(
                                                            <div key={index} className="form-group auth-container__input-container">
                                                            { input === 'remember'?<div className='row auth-container__input'>
                                                                <input
                                                                    name={input}
                                                                    onChange={onChangeLogin}
                                                                    value={loginForm[input]}                              
                                                                    type={'checkbox'}
                                                                    autoComplete={"off"}    
                                                                    id={'customCheck'}                                                                        
                                                                    className={`ml-3 mr-5`}
                                                                />
                                                               <label className="mt-1" for="customCheck">Remember Me</label>
                                                            </div> :
                                                                <input
                                                                    name={input}
                                                                    onChange={onChangeLogin}
                                                                    value={loginForm[input]}
                                                                    placeholder={`${input}`}
                                                                    type={input === 'password' ? showPassword ? 'text' : 'password' :  'text'}
                                                                    autoComplete={"off"}
                                                                    required                   
                                                                    className={`auth-container__input`}
                                                                />        
                                                          }             
                                                            {input === 'password' ? showPassword ? <Uneye onClick={() => setPassword(!showPassword)} /> : <Eye  onClick={() => setPassword(!showPassword)} /> : ''}

                                                        </div>
                                                        
                                                    )})}
                                                 </>:
                                                    !isRegisterFormStudent ?
                                                 <>           
                                            
     {Object.keys(registerFormStudent).map((input, index) => {
        let type = 'text'
        if(input === 'matricule' || input ==='confirmation') {
            if(showPassword) {
                type = 'text'
            } else {
                type = 'password'
            }
            } else if (input === 'name' || input === 'surname') {
                type = 'text'
            }else if(input === 'remember'){
                type = 'checkbox'
            }else if(input === 'sex'){
                type = 'radio'
            }else if(input === 'profilImage'){
                type = 'file'
            }else if(input === 'dateNaiss'){
                type = 'date'
            }
            return (
                <div key={index} className=" form-group auth-container__input-container">
                {input === 'profilImage' ?<span className="row  auth-container__input">
                    <label className="mr-5 mt-1" for="customprofile">Profile Image</label>
                    <input
                        name={input}
                        onChange={onChangeRegisterStudent}
                        value={registerFormStudent[input]}
                        placeholder={input === 'confirmation'? 'Confirm code': `${input}`}
                        type={type}
                        autoComplete={"off"}
                        required
                        id={'customprofile'}
                        className={``}
                    />
                                     </span>: input === 'sex' ?
                            <div className="row auth-container__input">
                                <label className="mr-5 mt-1">Sex:</label>
                                <label className='mr-2 mt-1 ml-5' for='customradio1'>Masculin</label>
                                <input
                                    name={input}
                                    onChange={onChangeRegisterStudent}
                                    value={registerFormStudent[input[0]]}                             
                                    type={type}
                                    autoComplete={"off"}
                                    required
                                    id={'customradio1'}
                                    className={`mr-5`}
                                />
                                <label className='ml-5 mt-1 mr-2' for='customradio2'>Feminin</label>
                                <input
                                    name={input}
                                    onChange={onChangeRegisterStudent}
                                    value={registerFormStudent[input[1]]}                               
                                    type={type}
                                    autoComplete={"off"}
                                    required
                                    id={'customradio2'}
                                    className={``}
                                />
                            </div>: input === 'remember'?
                            <div className='row auth-container__input'>
                                <input
                                name={input}
                                onChange={onChangeRegisterStudent}
                                value={registerFormStudent[input[1]]}                              
                                type={type}
                                autoComplete={"off"}
                                id={'customCheck'}
                                className={`ml-3 mr-5`}
                            />
                                <label className="mt-1" for="customCheck">Remember Me</label>
                            </div>  

                            :    input === 'dateNaiss'?
                            <div className='row auth-container__input'>
                                <label className=" mr-5 mt-2">Birthday</label>
                                <input
                                    name={input}
                                    onChange={onChangeRegisterStudent}
                                    value={registerFormStudent[input]}                              
                                    type={type}
                                    autoComplete={"off"}
                                    required                            
                                    className={`ml-4`}
                               />
                                
                            </div>:
                    <input
                        name={input}
                        onChange={onChangeRegisterStudent}
                        value={registerFormStudent[input]}
                        placeholder={input === 'confirmation'? 'Confirm matricule': `${input}`}
                        type={type}
                        autoComplete={"off"}
                        required    
                        id={input === 'name'? 'tooltip1': ''}                           
                        className={`auth-container__input `}
                    /> }     
                {(input === 'matricule' || input === 'confirmation') ? showPassword ? <Uneye  onClick={() => setPassword(!showPassword)} /> : <Eye onClick={() => setPassword(!showPassword)} /> : ''}
            </div>
                    )
        })}



</>: isForgotPassword ? 
 
 <>
 {Object.keys(resetPasswordForm).map((input,index)=>{
         return(
         <div key={index} className="auth-container__input-container">
            <input
                name={input}
                onChange={onChangeResetPassword}
                value={resetPasswordForm[input]}
                placeholder={`${input}`}
                type={'email'}
                autoComplete={"off"}
                required             
                className={`auth-container__input`}
            />                     
        
        </div>
 )})}
</>: 
 <>     
        {Object.keys(registerFormTeacher).map((input, index) => {
        let type = 'text'
        if(input === 'code' || input ==='confirmation') {
            if(showPassword) {
                type = 'text'
            } else {
                type = 'password'
            }
            } else if (input === 'name') {
                type = 'text'
            }else if(input === 'remember'){
                type = 'checkbox'
            }else if(input === 'profilImage'){
                type = 'file'
            } else if(input=== 'sex'){
                type = 'radio'
            }
            return (
                        <div key={index} className="form-group auth-container__input-container">
                            {input === 'profilImage' ?<span className="row auth-container__input">
                                <label className="mr-5 mt-1" for="customprofile">Profile Image</label>
                                <input
                                    name={input}
                                    onChange={onChangeRegisterTeacher}
                                    value={registerFormTeacher[input]}
                                    placeholder={input === 'confirmation'? 'Confirm code': `${input}`}
                                    type={type}
                                    autoComplete={"off"}
                                    required
                                    id={'customprofile'}
                                    className={``}
                                />
                                                 </span>: input === 'sex' ?
                                        <div className="row auth-container__input">
                                            <label className="mr-5 mt-1">Sex:</label>
                                            <label className='mr-2 mt-1 ml-5' for='customradio1'>Masculin</label>
                                            <input
                                                name={input}
                                                onChange={onChangeRegisterTeacher}
                                                value={registerFormTeacher[input[0]]}                                             
                                                type={type}
                                                autoComplete={"off"}
                                                required
                                                id={'customradio1'}
                                                className={`mr-5`}
                                            />
                                            <label className='ml-5 mt-1 mr-2' for='customradio2'>Feminin</label>
                                            <input
                                                name={input}
                                                onChange={onChangeRegisterTeacher}
                                                value={registerFormTeacher[input[1]]}                                    
                                                type={type}
                                                autoComplete={"off"}
                                                required
                                                id={'customradio2'}
                                                className={``}
                                            />
                                        </div>: input === 'remember'?
                                        <div className='row auth-container__input'>
                                            <input
                                            name={input}
                                            onChange={onChangeRegisterTeacher}
                                            value={registerFormTeacher[input]}                                          
                                            type={type}
                                            autoComplete={"off"}
                                            id={'customCheck'}                     
                                            className={`mr-5`}
                                        />
                                            <label className="mt-1" for="customCheck">Remember Me</label>
                                        </div>                                      
                                        :    
                                <input
                                    name={input}
                                    onChange={onChangeRegisterTeacher}
                                    value={registerFormTeacher[input]}
                                    placeholder={input === 'confirmation'? 'Confirm code': `${input}`}
                                    type={type}
                                    autoComplete={"off"}
                                    required                               
                                    className={`auth-container__input `}
                                /> }     
                            {(input === 'code' || input === 'confirmation') ? showPassword ? <Uneye  onClick={() => setPassword(!showPassword)} /> : <Eye onClick={() => setPassword(!showPassword)} /> : ''}
                        </div>
                    )
        })}
 </> 
    }
                                        {/*error&&<div className="error-box"><p className="error-text">{error.message}</p></div>*/}
                                        {/*formError&&<div className="error-box"><p className="error-text">{formError}</p></div>*/}
                                        {formError&&<Tooltip 
                                                        placement="top" 
                                                        isOpen={tooltipOpen}
                                                        target="tooltip1"
                                                        toggle={toggle}>
                                                             {formError}
                                                    </Tooltip>}

                                      
                                       {isLoginForm? 
                                       <Button 
                                            variant="primary" 
                                            type="submit" 
                                            loading={submited}
                                            size="xl"
                                            className="auth-container__button-primary" 
                                            disabled={submited}>
                                            Login
                                        </Button>: 
                                        <Button 
                                            variant="primary" 
                                            type="submit" 
                                            loading={submited}
                                            size="xl"
                                            className="auth-container__button-primary" 
                                            disabled={submited}>
                                            {!isRegisterFormStudent ? 'Register Student'  : isForgotPassword? 'Reset Password' : 'Register Teacher'}
                                        </Button>} 


                                       {isLoginForm ? 
                                           <div className="auth-container__line-element">
                                            <p onClick={() => setIsLoginForm(!isLoginForm,setIsForgotPassword(!isForgotPassword))} className="auth-text">Forgot password ?</p>
                                            <p onClick={() => setIsLoginForm(!isLoginForm,setIsDisplayForm(!isDisplayForm))} className="auth-text">Create an Account</p>
                                        </div> : ''} 

                                        {isForgotPassword ? 
                                           <div className="auth-container__line-element">
                                           <p onClick={() => setIsLoginForm(isLoginForm,setIsDisplayForm(!isDisplayForm),setIsForgotPassword(!isForgotPassword))} className="auth-text">Create an Account</p>
                                            <p onClick={() => setIsLoginForm(!isLoginForm,setIsDisplayForm(isDisplayForm), setIsForgotPassword(!isForgotPassword))} className="auth-text">Already have an account? Login!</p>
                                        </div> : ''}

                                        

                                    </form> :  
                                           <div className="auth-container__line-element mt-5 mline mb-5">
                                            <Button onClick={() => setIsRegisterFormStudent(!isRegisterFormStudent, setIsDisplayForm(!isDisplayForm),)} className="auth-text">Student</Button>
                                            <Button onClick={() => setIsRegisterFormStudent(isRegisterFormStudent, setIsDisplayForm(!isDisplayForm))} className="auth-text">Teacher</Button>
                                        </div>  }  



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

const mapStateToProps = ({ AuthReducer }) => ({
    redirect: AuthReducer.redirect,
    error: AuthReducer.error,
    user: AuthReducer.user
})
export default connect(mapStateToProps)(Login);