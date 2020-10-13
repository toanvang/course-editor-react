import React from "react";
import"bootstrap/dist/css/bootstrap.min.css"
import"font-awesome/css/font-awesome.css"
import {findCourseById} from "../services/CourseService";
import LessonTabsComponent from "./LessonTabsComponent";
import ModuleListComponent from "./ModuleListComponent";
import TopicPillsComponent from "./TopicPillsComponent";

export default class CourseEditorComponent extends React.Component {
    state ={
        course :{
            _id: "",
            title: "",
        }
    }
    // this will set the course in state from the server
    componentDidMount() {
        findCourseById(this.props.match.params.courseId)
            .then(actualCourse => this.setState({
                course: actualCourse
            }))
    }
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <a href="#"
                       className="float-right btn btn-sm btn-light mr-2 wbdv-course-editor wbdv-close"><i
                        className="fas fa-times"></i></a>
                    <a className="navbar-brand wbdv-course-title" href="#">{this.state.course.title}</a>
                    <button className="navbar-toggler wbdv-field wbdv-hamburger" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <LessonTabsComponent/>
                </nav>
                <div>
                    <div className="row bg-light ml-0 mr-0">
                        <ModuleListComponent/>
                        <TopicPillsComponent/>
                        {/*<WidgetListComponent/>*/}

                    </div>
                </div>
            </div>
        )
    }
}