import {call, put, takeLatest, takeLeading} from 'redux-saga/effects';
import { types } from "../reducer/types";
import authClass from "./auth.class";

/**
 * @description user sign in.  
 */
function* authSignIn ({payload}) 
{
    try {
    } 
    catch (error)
    {
    }
}

/**
 * @description user sign in.  
 */
function* authRegister ({payload}) 
{
    try {
    } 
    catch (error)
    {
        
    }
}


/**
 * @description check the current autheticated user.   
 */
function* authCurrentAuthenticatedUser () 
{
    try {
        
    } 
    catch (error)
    { 
        
    }
}



/**
 * @description user logout.  
 */
function* authLogout ({payload}) 
{
    try {
        
    } 
    catch (error)
    {
        
    }
}

/**
 * @description get the status of user's profile
 */
function* authProfileInfo () {
    try {
        const {data} = yield call(authClass.profileInfo);
        
    } 
    catch (error)
    { 
        
    }
}

export default function* AuthSaga() 
{
    yield takeLatest(types.CURRENT_AUTHENTICATED_USER_REQUEST, authCurrentAuthenticatedUser);
    yield takeLatest(types.SIGN_IN_USER_REQUEST, authSignIn);
    yield takeLatest(types.REGISTER_USER_REQUEST, authRegister);
    yield takeLatest(types.PROFILE_INFO_REQUEST, authProfileInfo);
    yield takeLeading(types.LOGOUT_USER_REQUEST, authLogout);
}