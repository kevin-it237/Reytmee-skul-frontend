import React  from 'react';
import "./sidebar.styles.scss";
/**
 * @description simple sidebar component.  
 * @param {string} width
 * @param {boolean} height 
 * @param {boolean} backgroundcolor
 * @param {boolean} display "none|block"
 */

const Sidebar = ({
    width,
    height,
    backgroundcolor='#17879C',
    display,
    ...res}) => {
    
     return (
            
                <div className="side-bar" style={{
                    width:width,
                    minHeight:height, 
                    backgroundColor:backgroundcolor,
                    display: display
                    }}>
                        
                    <React.Fragment>{res.children}</React.Fragment>                   
                 </div>
          

     )
    }
export default Sidebar;



