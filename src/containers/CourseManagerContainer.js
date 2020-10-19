import React from "react";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import"bootstrap/dist/css/bootstrap.min.css"
import Login from "../components/Login";
import Register from "../components/Register";
import Profile from "../components/Profile";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseEditorComponent from "../components/CourseEditorComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import {updateCourse} from "../services/CourseService";

export class CourseManagerContainer extends React.Component {
    state = {
        courses: [],
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <Link to="/" className="navbar-brand wbdv-label wbdv-course-manager">Course Manager</Link>
                        <button className="navbar-toggler wbdv-field wbdv-hamburger" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/courses">Course-Table</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/grid">Course-Grid</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/edit/:courseId">Course-Editor</Link>
                                </li>
                            </ul>

                        </div>
                    </nav>
                    {/*"Link to" work together with route without dumping the original content*/}
                    <Route path="/courses" exact><CourseTableComponent/></Route>
                    <Route path="/grid" exact><CourseGridComponent/></Route>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/profile" exact component={Profile}/>

                    <Route
                            // colon mean it will pass what is actually in the url, not the word courseId
                            // path is the array, any of these two link will map to the course editor
                            path={["/edit/:courseId", "/edit/:courseId/modules/:moduleId"]}
                            exact
                            component={CourseEditorComponent}/>
                </div>
            </BrowserRouter>
        );
    }
}
