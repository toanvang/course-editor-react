// import {FIND_WIDGETS_FOR_TOPIC, DELETE_WIDGET, CREATE_WIDGET, UPDATE_WIDGET} from "../actions/widgetActions"

const initialState = {
    widgets: [],
}
const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_WIDGETS_FOR_TOPIC":
            const newState = {
                ...state,
                // overwrite the widget with info come back from the server
                widgets: action.widgets,
                topicId: action.topicId
            }
            return newState
        case "FIND_ALL_WIDGETS":
            return {
                ...state,
                widgets: action.widgets
            }
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [...state.widgets, action.widget]
            }

        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(
                    widget => widget.id === action.widget.id ?
                        action.widget : widget)
            }
        case "RELOAD_WIDGET":
            return {
                widgets: action.widgets
            }
        case "DELETE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        default:
            return state
    }
}

export default widgetReducer