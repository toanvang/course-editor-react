import React from "react";
import {connect} from "react-redux"
import WidgetListComponent from "../components/WidgetListComponent"
import {createWidget, deleteWidget, updateWidget, editWidget, okWidget} from "../actions/widgetActions"

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetsReducer.widgets
})

const propertyToDispatchMapper = (dispatch) =>({
    deleteWidget: (widget) => deleteWidget(dispatch, widget) ,
    createWidget: () => createWidget(dispatch),
    updateWidget: (widget) => updateWidget(dispatch, widget),
    editWidget: (widget) => editWidget(dispatch, widget),
    okWidget: (widget) => okWidget(dispatch, widget)
})
export default connect
    // connect pass state to this stateToPropertyMapper, pass dispatch to propertyToDispatchMapper
(stateToPropertyMapper, propertyToDispatchMapper)
(WidgetListComponent)