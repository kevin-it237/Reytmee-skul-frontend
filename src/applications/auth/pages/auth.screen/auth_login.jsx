import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import useError from '../../hooks/useError';
import {Redirect, useHistory} from 'react-router-dom'
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
import Dashboard from '../../../admin/pages/dashboard.screen/dashboard';



const Login = ({ error, redirect, user }) => {
    const history = useHistory()
    const dispatch= useDispatch()

    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [loginForm, setLoginForm] = useState({username: "", password: "", remember: false})
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formError, setformError] = useState(null)
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetPasswordForm,setResetPasswordForm] = useState({email: ""});
    const [tooltipOpen, setTooltipOpen] = useState(false)
 

    useEffect(() => {
        if(user) {
            history.push('/dashboard');
        }
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        if (submited) { return }
        if(isLoginForm) {
            if(loginForm.username.trim()=='admin'&&loginForm.password.trim()=='admin'){
                history.push('/admin/dashboard');
            }else if(loginForm.username.trim()=='student'&&loginForm.password.trim()=='student'){
                history.push('/student/dashboard');
            }else if(loginForm.username.trim()=='prof'&&loginForm.password.trim()=='prof'){
                history.push('/teacher/dashboard');
            }
               
             //dispatch(authSignIn({...loginForm, redirect: history.location.state?.pathname || 'dashboard'}));
        } 
        setSubmited(true);
    }
    
    // Change form input values. 
    const onChangeLogin = (e) => setLoginForm({...loginForm,  [e.target.name]: e.target.value })

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
                                <div className="row font-weight-bold " style={{fontSize:'large', marginLeft: 25+'%'}}>Retymee School E-learning</div>
                                <div className="row"><img src={skulImg} alt="" className="auth_logo" /></div>
                            </div>

                            <div className="auth-container col-lg-6  align">
                                <div className="p-6">
                                <h4 className="h4 text-gray-600 font-weight-bold auth_title text-center auth-container__title mt-5">

                                    {isLoginForm ? "Sign In":  isForgotPassword? 
                                    `Forgot Your Password? Just Enter your Email ` : ''}

                                    </h4>
                                

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
                                                                    className={`auth-container__input ${input === 'password' ? 'password' : ''}`}
                                                                />        
                                                          }             
                                                            {input === 'password' ? showPassword ? <Uneye onClick={() => setPassword(!showPassword)} /> : <Eye  onClick={() => setPassword(!showPassword)} /> : ''}

                                                        </div>
                                                        
                                                    )})}
                                                 </>:
                                                isForgotPassword ? 
                                        
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
                                       
                                                </> : ''} 
                                        {error&&<div className="error-box"><p className="error-text">{error.message}</p></div>}
                                        {formError&&<div className="error-box"><p className="error-text">{formError}</p></div>}
                                       

                                      
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
                                            Reset Password
                                        </Button>} 


                                       {isLoginForm ? 
                                           <div className="auth-container__line-element">
                                            <p onClick={() => setIsLoginForm(!isLoginForm,setIsForgotPassword(!isForgotPassword))} className="auth-text">Forgot password ?</p>
                                        </div> : ''} 

                                        {isForgotPassword ? 
                                           <div className="auth-container__line-element">
                                            <p onClick={() => setIsLoginForm(!isLoginForm,setIsForgotPassword(!isForgotPassword))} className="auth-text">Already have an account? Login!</p>
                                        </div> : ''}

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

const mapStateToProps = ({ AuthReducer }) => ({
    redirect: AuthReducer.redirect,
    error: AuthReducer.error,
    user: AuthReducer.user
})
export default connect(mapStateToProps)(Login);