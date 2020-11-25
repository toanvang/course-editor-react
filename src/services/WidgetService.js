const WIDGET_URL = "http://localhost:8080/api/widgets"
const TOPIC_URL = "http://localhost:8080/api/topics"

export const findAllWidgets = () =>
    fetch(WIDGET_URL)
        .then(response => response.json())

export const createWidgetForTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify({name: "NEW WIDGET", type: "HEADING"}),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`)
        .then(response => response.json())

export const updateWidget = (widgetId, widget) =>
    fetch(`${WIDGET_URL}/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const reloadWidgets = (widgets) =>
    fetch(`${WIDGET_URL}`, {
        method: "PUT",
        body: JSON.stringify(widgets),
        headers: {
            "content-type": "application/json"
        }
    })

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGET_URL}/${widgetId}`,{
        method: "DELETE"
    })

export default {
    findAllWidgets, createWidgetForTopic, findWidgetsForTopic, updateWidget, deleteWidget, reloadWidgets
}
