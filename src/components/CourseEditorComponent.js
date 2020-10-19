import React from "react";
import {findCourseById} from "../services/CourseService";
import WidgetListContainer from "../containers/WidgetListContainer";
import ModuleListComponent from "./ModuleListComponent";
import {connect} from "react-redux";
import moduleService from "../services/ModuleService"
import lessonService from "../services/LessonService"
import LessonTabsComponent from "./LessonTabsComponent";


class CourseEditorComponent extends React.Component {

    componentDidMount() {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        this.props.findCourseById(courseId)
        this.props.findModulesForCourse(courseId)
        if(moduleId) {
            this.props.findLessonsForModule(moduleId)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const moduleId = this.props.match.params.moduleId
        if(moduleId !== prevProps.match.params.moduleId) {
            this.props.findLessonsForModule(moduleId)
        }
    }

    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <a href="#"
                       className="float-right btn btn-sm btn-light mr-2 wbdv-course-editor wbdv-close"><i
                        className="fas fa-times"></i></a>
                    {/*<a className="navbar-brand wbdv-course-title" href="#">{this.state.course.title}</a>*/}
                    <a className="navbar-brand wbdv-course-title" href="#">{this.props.course.title}</a>
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
                        <WidgetListContainer/>
                    </div>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
    findCourseById: (courseId) => findCourseById(courseId)
        .then(actualCourse => dispatch({
            type: "SET_COURSES",
            course: actualCourse
        })),
    findModulesForCourse: (courseId) => moduleService.findModulesForCourse(courseId)
        .then(actualModules => dispatch({
            type: "FIND_MODULES_FOR_COURSE",
            modules: actualModules
        })),
    findLessonsForModule: (moduleId) =>
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS_FOR_MODULE",
                lessons,
                moduleId
            }))
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(CourseEditorComponent)
