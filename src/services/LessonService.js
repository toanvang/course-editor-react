const moduleUrl = "https://wbdv-generic-server.herokuapp.com/api/tv3/modules"
const lessonUrl = "https://wbdv-generic-server.herokuapp.com/api/tv3/lessons"

export const findLessonsForModule = (moduleId) =>
    fetch(`${moduleUrl}/${moduleId}/lessons`)
        .then(response => response.json())

export const createLessonForModule = (moduleId, lesson) =>
    fetch(`${moduleUrl}/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const updateLesson = (lessonId, lesson) =>{
    return fetch(`${lessonUrl}/${lessonId}`, {
        method: "PUT",
        body: JSON.stringify(lesson),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())
}

export const deleteLesson = lessonId =>
    fetch(`${lessonUrl}/${lessonId}`,{
        method: "DELETE"
    }).then(response => response.json())


export default {
    findLessonsForModule,
    createLessonForModule,
    deleteLesson,
    updateLesson
}