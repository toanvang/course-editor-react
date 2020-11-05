import React from "react";
import {findCourseById} from "../services/CourseService";
import WidgetListComponent from "../components/WidgetListComponent";
import WidgetListContainer from "../containers/WidgetListContainer";
import ModuleListComponent from "../components/ModuleListComponent";
import {connect} from "react-redux";
import moduleService from "../services/ModuleService"
import lessonService from "../services/LessonService"
import topicService from "../services/TopicService";
import LessonTabsComponent from "../components/LessonTabsComponent";
import {Link, Route} from "react-router-dom";
import TopicPillsComponent from "./TopicPillsComponent";
import widgetService from "../services/WidgetService"
// import {FIND_WIDGETS_FOR_TOPIC, DELETE_WIDGET, CREATE_WIDGET, UPDATE_WIDGET} from "../actions/widgetActions"

class CourseEditorComponent extends React.Component {

    componentDidMount() {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        const topicId = this.props.match.params.topicId
        this.props.findCourseById(courseId)
        this.props.findModulesForCourse(courseId)
        if(moduleId) {
            this.props.findLessonsForModule(moduleId)
        }
        if(lessonId) {
            this.props.findTopicsForLesson(lessonId)
        }
        if(topicId) {
            this.props.findWidgetsForTopic(topicId)
        }
        // this.props.findAllWidgets()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const topicId = this.props.match.params.topicId
        const lessonId = this.props.match.params.lessonId
        const widgetId = this.props.match.params.widgetId

        if(moduleId !== prevProps.match.params.moduleId) {
            this.props.findLessonsForModule(moduleId)
        }
        if(lessonId !== prevProps.match.params.lessonId) {
            this.props.findTopicsForLesson(lessonId)
        }
        if(topicId !== prevProps.match.params.topicId) {
            this.props.findWidgetsForTopic(topicId)
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
                        path={["/course/:courseId/modules/:moduleId",
                            "/course/:courseId/modules/:moduleId/lessons/:lessonId",
                            "/course/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                            "/course/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId"]}
                        exact
                        component={LessonTabsComponent}/>
                </table>
                <div>
                    <div className="row bg-light ml-0 mr-0">
                        <ModuleListComponent />
                        <div className="col-9 row bg-light">
                            <Route
                                // colon mean it will pass what is actually in the url, not the word courseId
                                // path is the array, any of these two link will map to the course editor
                                path={[
                                    "/course/:courseId/modules/:moduleId/lessons/:lessonId",
                                    "/course/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                                    "/course/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId"]}
                                exact
                                component={TopicPillsComponent}/>
                            <Route
                                // colon mean it will pass what is actually in the url, not the word courseId
                                // path is the array, any of these two link will map to the course editor
                                path={[
                                    "/course/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                                    "/course/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId"
                                ]}
                                exact
                                component={WidgetListComponent}/>
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
    findWidgetsForTopic: (topicId) =>
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                type: "FIND_WIDGETS_FOR_TOPIC",
                widgets: widgets,
                topicId
            })),
    findAllWidgets: () =>
        widgetService.findAllWidgets()
            .then(widgets => dispatch({
                type: "FIND_ALL_WIDGETS",
                widgets: widgets
            })),
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