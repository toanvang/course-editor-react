import React from "react";
import {findCourseById} from "../services/CourseService";
import WidgetListContainer from "../containers/WidgetListContainer";
import ModuleListComponent from "../components/ModuleListComponent";
import {connect} from "react-redux";
import moduleService from "../services/ModuleService"
import lessonService from "../services/LessonService"
import topicService from "../services/TopicService";
import LessonTabsComponent from "../components/LessonTabsComponent";
import {Link, Route} from "react-router-dom";
import TopicPillsComponent from "./TopicPillsComponent";


class CourseEditorComponent extends React.Component {

    componentDidMount() {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        console.log(lessonId)
        this.props.findCourseById(courseId)
        this.props.findModulesForCourse(courseId)

        if(moduleId) {
            this.props.findLessonsForModule(moduleId)
        }
        if(lessonId) {
            this.props.findTopicsForLesson(lessonId)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const moduleId = this.props.match.params.moduleId
        if(moduleId !== prevProps.match.params.moduleId) {
            this.props.findLessonsForModule(moduleId)
        }
        const lessonId = this.props.match.params.lessonId
        if(lessonId !== prevProps.match.params.lessonId) {
            this.props.findTopicsForLesson(lessonId)
        }

    }
    render() {
        return(
            <div>
                <Link to="/table">
                    <button
                        className="float-right btn btn-sm btn-light mr-2 wbdv-course-editor wbdv-close">
                        <i className="fas fa-times"></i></button>
                </Link>
                <h2>Course {this.props.course.title}</h2>
                <table>
                    <Route
                        // colon mean it will pass what is actually in the url, not the word courseId
                        // path is the array, any of these two link will map to the course editor
                        path={["/course/:courseId/modules/:moduleId",  "/course/:courseId/modules/:moduleId/lessons/:lessonId"]}
                        exact
                        component={LessonTabsComponent}/>
                </table>
                <div>
                    <div className="row bg-light ml-0 mr-0">
                        <ModuleListComponent/>
                        <div className="col-9 row bg-light">
                        <Route
                            // colon mean it will pass what is actually in the url, not the word courseId
                            // path is the array, any of these two link will map to the course editor
                            path={"/course/:courseId/modules/:moduleId/lessons/:lessonId"}
                            exact
                            component={TopicPillsComponent}/>
                        <WidgetListContainer/>
                    </div>
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
            })),
    findTopicsForLesson: (lessonId) =>
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                topics,
                lessonId
            })),

})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(CourseEditorComponent)