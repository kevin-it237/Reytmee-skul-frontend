import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux'
import PrivateRoute from './private.route';
import NormalRoute from './normal.route';

import AuthScreen from '../../applications/auth/pages/auth.screen/auth_login';
//import AuthRegister from '../../applications/auth/pages/auth.screen/auth_register';
import DashboardAdmin from '../../applications/admin/pages/dashboard.screen/dashboard';
import DashboardStudent from '../../applications/student/pages/dashboard.screen/dashboard';
import DashboardTeacher from '../../applications/teacher/pages/dashboard.screen/dashboard';
import ManageCourse from '../../applications/course/pages/course.screen/manage_course';
import CreateLesson from '../../applications/lesson/pages/lesson.screen/create_lesson';

/**
 * @description this is the main routes for the main application src/app. 
 */
const Routes = () => {

    return (
        <Switch>
            {/* Private routes here */}
            {/* <PrivateRoute exact path={"/"}>
                <Route 
                    exact 
                    component={}
                    path={"/"} />
            </PrivateRoute> */}
            
            {/* Normal routes here */}
            <NormalRoute exact>
                <Route 
                    exact
                    component={AuthScreen}
                    path={'/'} />

                <Route 
                    exact
                    component={DashboardAdmin}
                    path={'/admin/dashboard'} />

                <Route 
                    exact
                    component={DashboardStudent}
                    path={'/student/dashboard'} />   

                <Route 
                    exact
                    component={DashboardTeacher}
                    path={'/teacher/dashboard'} />

                <Route 
                    exact
                    component={ManageCourse}
                    path={'/teacher/manage/course'} />

                <Route 
                    exact
                    component={CreateLesson}
                    path={'/teacher/course/create/lesson'} />

                
            </NormalRoute>
            

            

        </Switch>)
}

const mapStateToProps = () =>({
});

export default connect(mapStateToProps)(Routes);
