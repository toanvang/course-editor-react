import React from "react";
import {lessonReducer} from "../reducers/lessonReducer";
import {connect} from "react-redux";
import lessonService from "../services/LessonService";
import {Link} from "react-router-dom";
import moduleService from "../services/ModuleService";
import LessonService from "../services/LessonService";
import "bootstrap/dist/css/bootstrap.min.css"


const LessonTabs = (
    {
        courseId,
        moduleId,
        lessons=[],
        createLessonForModule,
        deleteLesson,
        updateLesson,
        editLesson,
        okLesson
    }) =>
    <div>
        {/*<h1>Lessons ({moduleId})</h1>*/}
        <h4>Lessons</h4>
        <tr>
            {
                lessons.map(lesson =>
                    <th key={lesson._id}>
                            {
                                !lesson.editing &&
                                    <span>
                                    <button
                                        onClick={() => editLesson(lesson)}>
                                        <i className="fa fa-pencil"></i>
                                    </button>
                                        <Link
                                            className="d-sm-inline btn btn-dark btn-block wbdv-module-item-title"
                                            to={`/course/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}>
                                            {lesson.title}
                                        </Link>

                                    </span>
                            }
                            {
                                    lesson.editing &&
                                    <span>
                                        {/*<button onClick={() =>  updateLesson({...lesson, editing: false})}>*/}
                                        <button onClick={() => deleteLesson(lesson._id)}>
                                            <i className="fa fa-times"></i>
                                        </button>
                                        <button onClick={() =>  okLesson(lesson)}>
                                        <i className="fa fa-check"></i>
                                        </button>
                                        <input
                                            onChange={(event) => updateLesson({
                                                ...lesson,
                                                title: event.target.value
                                            })}
                                            value={lesson.title}
                                            className="d-sm-inline btn-block wbdv-module-item-title"
                                            />
                                    </span>
                            }
                        </th>
                )
            }
            <th>
                <button
                    className="fa fa-plus btn btn-success align-self-end"
                    onClick={() => createLessonForModule(moduleId)}>
                </button>
            </th>
        </tr>


    </div>

const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons,
    moduleId: state.lessonReducer.moduleId,
    courseId: state.courseReducer.course._id,
})

const dispatchToPropertyMapper = (dispatch) => ({
    okLesson: (lesson) =>
        LessonService.updateLesson(lesson._id, {
            ...lesson, editing: false
        }).then(status => dispatch({
            type: "UPDATE_LESSON",
            lesson: {...lesson, editing: false}
        })),

    editLesson: (lesson) =>
        // LessonService.updateLesson(lesson._id, {
        //     ...lesson, editing: true
        // }).then(status =>
            dispatch({
                type: "UPDATE_LESSON",
                lesson: {...lesson, editing: true}
            }),
    // updateLesson: (newLesson) =>
    //     lessonService.updateLesson(newLesson)
    //         .then(actuaLesson => dispatch({
    //             type: "UPDATE_LESSON",
    //             lesson: actuaLesson
    //         })),
    updateLesson: (lesson) =>
        dispatch({
            type: "UPDATE_LESSON",
            lesson: lesson
        }),
    deleteLesson: (lessonId) =>
        lessonService.deleteLesson(lessonId)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonId
            })),
    createLessonForModule: (moduleId) =>
        lessonService.createLessonForModule(
            moduleId, {
                title: "New Lesson"
            })
            .then(actualLesson => dispatch({
                type: "CREATE_LESSON_FOR_MODULE",
                lesson: actualLesson
            }))
})

export default connect
(stateToPropertyMapper,
    dispatchToPropertyMapper)
(LessonTabs)