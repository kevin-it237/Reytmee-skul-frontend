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


const RegisterStudent  = ({ error, redirect, user}) => {

    const history = useHistory()
    const dispatch= useDispatch()

    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [registerFormStudent, setRegisterFormStudent] = useState({name: "", surname: "", email: "", address: "", PhoneNumber: "",   sex: ["M", "F"],  matricule: "", confirmation: "",dateNaiss: "", profilImage: "", remember: false});
    const [formError, setformError] = useState(null);
    const [tooltipOpen, setTooltipOpen] = useState(false);

    useEffect(() => {
        if(user) {
            history.push('/')
        }
    }, [])
    
    const toggle = () => setTooltipOpen(!tooltipOpen);
 
    

    const onSubmit = (e) => {
        e.preventDefault();
        if (submited) { return }
            if(validateForm() ) {
                
                   dispatch(authRegister({...registerFormStudent, redirect: history.location.state?.pathname || '/'}))
                   setformError(null)
    
            } else {
                return;
            }
        
        setSubmited(true);
    }

    const validateForm = () => {
        if(registerFormStudent.name.trim().length < 5) {
            setformError('Name min length is 5 caracters')
            return false
        }

        else if(registerFormStudent.matricule.trim().length < 6){
            setformError('Matricule min length is 5 caracters')
            return false
        }

        else if(registerFormStudent.matricule !== registerFormStudent.confirmation){
            setformError('Passwords dont match')
            return false
        }

        return true
    }

    const onChangeRegisterStudent = (e) => {
        setRegisterFormStudent({...registerFormStudent,  [e.target.name]: e.target.value })
        setformError(null)
    }

        return(
        <div className="container">

        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9 col-sm-12">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                    
                        <div class="row overflow-auto">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image auth_container align">
                                <div className="row font-weight-bold" style={{fontSize:'large', marginLeft: 25+'%'}}>Retymee School E-learning</div>
                                <div className="row"><img src={skulImg} alt="" className="auth_logo" /></div>
                            </div>

                            <div className="auth-container col-lg-6  align">
                                <div className="p-6">
                                <h4 className="h4 text-gray-600 font-weight-bold auth_title text-center auth-container__title mt-5">

                                    Register Student
                                    
                                    </h4>
                                

                                  <form className="auth-container__card" onSubmit={onSubmit}>
                                                                             
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
            </>

            {error&&<div className="error-box"><p className="error-text">{error.message}</p></div>}
            {formError&&<div className="error-box"><p className="error-text">{formError}</p></div>}
           

           <Button 
                variant="primary" 
                type="submit" 
                loading={submited}
                size="xl"
                className="auth-container__button-primary" 
                disabled={submited}>
                Save Student
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
export default  RegisterStudent;