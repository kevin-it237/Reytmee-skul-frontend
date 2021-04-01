import React, { useState, useEffect } from 'react';
import Register from '../../../applications/auth/pages/auth.screen/auth_register';
import {MDBContainer,MDBBtn,MDBModal,MDBModalBody,MDBModalHeader,MDBModalFooter} from 'mdbreact';
const Modal = (props) => {
    
    const [isShowStudent,setIsShowStudent] = useState(true);
    const [isShowTeacher,setIsShowTeacher] = useState(false);
    console.log('gvdshfsd');
    return (

        <MDBContainer>   
        <MDBModal isOpen={isShowStudent} toggle={setIsShowStudent(!isShowStudent)}>
            <MDBModalHeader toggle={setIsShowStudent(!isShowStudent)}>
                Student Register
            </MDBModalHeader>
            <MDBModalBody>
                <Register />
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="secondary" onClick={()=>setIsShowStudent(!isShowStudent)}>
                    close
                </MDBBtn>
            </MDBModalFooter>
        </MDBModal>
        </MDBContainer>
    )
    
}
export default Modal;