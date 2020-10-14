import {DELETE_WIDGET, CREATE_WIDGET, UPDATE_WIDGET} from "../actions/widgetActions";

const initialState = {
    widgets: [
        {
            _id: "123",
            name: "Widget1",
            editing: false
        },
        {
            _id: "123",
            name: "Widget2",
            editing: false
        },
        {
            _id: "123",
            name: "Widget3",
            editing: false
        },
        {
            _id: "123",
            name: "Widget4",
            editing: false
        }
    ]
}

const widgetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_WIDGET:
            return {
                widgets: [...state.widgets, {
                    _id: Date.now()+"",
                    name: "New Widget"
                }]
            }
        case UPDATE_WIDGET:
            return {
                // if widget = the widget in the action, return widget in the action. Otherwise, return widget
                widgets: state.widgets.map(
                    widget => widget._id === action.widget._id ?
                        action.widget : widget)
            }

        case DELETE_WIDGET:
            return {
                // remove this widget
                widgets: state.widgets.filter(widget => widget !== action.widget )
            }
        default:
            return state
    }
}

export default widgetsReducer