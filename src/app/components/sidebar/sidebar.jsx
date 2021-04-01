import React, { useState } from 'react';
import SideNav, {Toggle, Nav, NavItem, NavIcon,NavText} from '@trendmicro/react-sidenav'; 
import '@trendmicro/react-sidenav/dist/react-sidenav.css';



const Sidebar = ({parentCallBack}) => {
 
     return (

        <SideNav
            onSelect={(selected) => {
                // Add your code here
                if(selected == "account/student"){
                    console.log("student");
                }else{if(selected == "account/teacher")
                    console.log("teacher");
                }
                
            }}
        >
    <SideNav.Toggle />
    
    <SideNav.Nav defaultSelected="home">

        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Dashboard
            </NavText>
        </NavItem>

        <NavItem eventKey="account">
            <NavIcon>
                <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Add User
            </NavText>
            <NavItem eventKey="account/student">
                <NavText>
                    Student 
                </NavText>
            </NavItem>
            <NavItem eventKey="account/teacher">
                <NavText>
                    Teacher 
                </NavText>
            </NavItem>
        </NavItem>


        <NavItem eventKey="list">
            <NavIcon>
                <i className="fa fa-fw fa-list" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Users 
            </NavText>
            <NavItem eventKey="list/student">
                <NavText>
                    Student 
                </NavText>
            </NavItem>
            <NavItem eventKey="list/teacher">
                <NavText>
                    Teacher 
                </NavText>
            </NavItem>
        </NavItem>

    

    </SideNav.Nav>
</SideNav>
         
         
     )
}
export default Sidebar;



