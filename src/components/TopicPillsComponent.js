import React from "react";
import {lessonReducer} from "../reducers/lessonReducer";
import {connect} from "react-redux";
import lessonService from "../services/LessonService";
import {topicReducer} from "../reducers/topicReducer";
import {Link} from "react-router-dom";
import moduleService from "../services/ModuleService";
import LessonService from "../services/LessonService";
import ModuleList from "../css/ModuleList.css"
import TopicService from "../services/TopicService";
import "bootstrap/dist/css/bootstrap.min.css"
import widgetService from "../services/WidgetService";

const TopicPillsComponent = (
    {
        courseId,
        moduleId,
        lessonId,
        topics=[],
        createTopicForLesson,
        deleteTopic,
        updateTopic,
        editTopic,
        okTopic
    }) =>
    <div className="col-xs-12 col-md-9 d-flex align-items-start wbdv-topic-pill-list w-100">
        <h4>Topics</h4>
        {/*<li>*/}
        {/*    <Link to={`/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/topic123`} className="nav-link">*/}
        {/*        Topic 123*/}
        {/*    </Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*    <Link to={`/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/topic234`} className="nav-link">*/}
        {/*        Topic 234*/}
        {/*    </Link>*/}
        {/*</li>*/}
        <div>
            {
                topics.map(topic =>
                    <div key={topic._id}>
                            {
                                !topic.editing &&
                                <span>
                                    <button
                                        onClick={() => editTopic(topic)}>
                                        <i className="fa fa-pencil"></i>
                                    </button>
                                        <Link className =" btn btn-success m-1 wbdv-module-item-title"
                                            to={`/course/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}>
                                            {topic.title}
                                        </Link>
                                </span>
                            }
                            {
                                topic.editing &&
                                <span>
                                        {/*<button onClick={() =>  updateLesson({...lesson, editing: false})}>*/}
                                    <button onClick={() => deleteTopic(topic._id)}>
                                        <i className="fa fa-times"></i>
                                    </button>
                                        <button onClick={() =>  okTopic(topic)}>
                                        <i className="fa fa-check"></i>
                                        </button>

                                        <input
                                            onChange={(event) => updateTopic({
                                                ...topic,
                                                title: event.target.value
                                            })}
                                            value={topic.title}
                                            className="wbdv-module-item-title"
                                        />
                                    </span>
                            }
                    </div>
                )
            }
        </div>
        <button
            className="fa fa-plus btn btn-success"
            onClick={() => createTopicForLesson(lessonId)}>
        </button>
    </div>

const stateToPropertyMapper = (state) => ({
    lessonId: state.topicReducer.lessonId,
    topics: state.topicReducer.topics,
    moduleId: state.lessonReducer.moduleId,
    courseId: state.courseReducer.course._id,
})

const dispatchToPropertyMapper = (dispatch) => ({
    okTopic: (topic) =>
        TopicService.updateTopic(topic._id, {
            ...topic, editing: false
        }).then(status => dispatch({
            type: "UPDATE_TOPIC",
            topic: {...topic, editing: false}
        })),

    editTopic: (topic) =>
        // LessonService.updateLesson(lesson._id, {
        //     ...lesson, editing: true
        // }).then(status =>
        dispatch({
            type: "UPDATE_TOPIC",
            topic: {...topic, editing: true}
        }),

    updateTopic: (topic) =>
        dispatch({
            type: "UPDATE_TOPIC",
            topic: topic
        }),
    deleteTopic: (topicId) =>
        TopicService.deleteTopic(topicId)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicId
            })),
    createTopicForLesson: (lessonId) =>
        TopicService.createTopicForLesson(
            lessonId, {
                title: "New Topic"
            })
            .then(actualTopic => dispatch({
                type: "CREATE_TOPIC_FOR_LESSON",
                topic: actualTopic
            }))
})

export default connect
(stateToPropertyMapper,
    dispatchToPropertyMapper)
(TopicPillsComponent)