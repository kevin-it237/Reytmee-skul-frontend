import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
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
        footercontent      
               }) => {

 
    return (
        <Modal  show={show} onHide={onhide}>
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