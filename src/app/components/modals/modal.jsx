import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import './modal.scss';
/**
 * @description simple modal component.  
 * @param {boolean} show
 * @param {boolean} onhide,
 * @param {string} titlecontent, 
 * @param {any} bodycontent,
 * @param {any} footercontent
 */
 
const Modals = ({
        show,
        onhide,
        titlecontent,
        bodycontent,
        footercontent,
        dialogclassname     
               }) => {

 
    return (
        <Modal  show={show} onHide={onhide} dialogClassName={
                  dialogclassname==="custom-register"? "custom-register": dialogclassname==="custom-profile"? "custom-profile" :
                  dialogclassname==="custom-tabuser"? "custom-tabuser" : '' }>
                <Modal.Header closeButton>
                   <Modal.Title>{titlecontent}</Modal.Title> 
                </Modal.Header>
         
                <Modal.Body>
                    <>{bodycontent}</>
                </Modal.Body>

                <Modal.Footer>
                    {footercontent}
                </Modal.Footer>       
        </Modal>
       
    )
    
}
export default Modals;