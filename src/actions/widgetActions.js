import widgetService from "../services/WidgetService"
import TopicService from "../services/TopicService";
export const DELETE_WIDGET = "DELETE_WIDGET"
export const CREATE_WIDGET = "CREATE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC"

export const okWidget = (dispatch, widget) =>
        widgetService.updateWidget(widget.id, {
            ...widget, editing: false
        }).then(status => dispatch({
            type: UPDATE_WIDGET,
            widget: {...widget, editing: false}
        }))
export const editWidget = (dispatch, widget) =>
    // LessonService.updateLesson(lesson._id, {
    //     ...lesson, editing: true
    // }).then(status =>
    dispatch({
        type: UPDATE_WIDGET,
        widget: {...widget, editing: true}
    })

export const updateWidget =(dispatch, widget) =>
    dispatch({
        type: UPDATE_WIDGET,
        widget: widget
    })

export const deleteWidget = (dispatch, widgetId) =>
    widgetService.deleteWidget(widgetId)
        .then(status => dispatch({
            type: DELETE_WIDGET,
            widgetId
        }))
        // .then(resp => widgetService.findWidgetsForTopic())


// export const editWidget = (dispatch, widget) =>
//     dispatch({type: UPDATE_WIDGET, widget: {...widget, editing: true}})
//
// export const okWidget = (dispatch, widget) =>
//     dispatch({type: UPDATE_WIDGET, widget: {...widget, editing: false}})
//
// export const deleteWidget = (dispatch, widget) =>
//     dispatch({type: DELETE_WIDGET, widget:widget})

// export const updateWidget = (dispatch, widget) =>
//     dispatch({type: UPDATE_WIDGET, widget: widget})

export const createWidget = (dispatch, topicId) =>
    widgetService.createWidget(topicId)
        .then(widget => dispatch({
            type: CREATE_WIDGET,
            widget
        }))





