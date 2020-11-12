import React from "react";
import {connect} from "react-redux";
// import {
//     deleteWidget,
//     createWidget,
//     updateWidget,
//     editWidget,
//     okWidget, UPDATE_WIDGET, DELETE_WIDGET, CREATE_WIDGET,
// } from "../actions/widgetActions";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import {Link} from "react-router-dom";
import widgetService, {findWidgetsForTopic} from "../services/WidgetService";
import TopicService from "../services/TopicService";

const WidgetListComponent = ({
                        widgets=[], typeWidget, textWidget, upWidget, downWidget,
                        sizeWidget,
                        nameWidget,
                        topicId,
                        widgetId,
                        deleteWidget,
                        createWidgetForTopic,
                        updateWidget,
                        editWidget,
                        okWidget}) =>
    <div>
        {console.log(widgets)}
        <h1>Widgets!!!{topicId}</h1>
        {/*<a href="#" className="btn btn-sm btn-success">Save</a>*/}

        {/*<div className="custom-control custom-switch">*/}
        {/*    <input type="checkbox" className="custom-control-input" id="customSwitches"/>*/}
        {/*    <label className="custom-control-label" htmlFor="customSwitches">Preview</label>*/}
        {/*</div>*/}
        <ul>
            {
                widgets.map(widget =>
                        <div key={widget.id}>
                            {/*<button*/}
                            {/*    onClick={() => deleteWidget(widget)}>*/}
                            {/*    Delete*/}
                            {/*</button>*/}
                {/*            {*/}
                {/*                widget.editing &&*/}
                {/*                <span><input*/}
                {/*                    onChange={(event) => updateWidget({*/}
                {/*                        ...widget,*/}
                {/*                        name: event.target.value*/}
                {/*                    })}*/}
                {/*                    value={widget.name}/>*/}
                {/*<button onClick={() => okWidget(widget)}>*/}
                {/*  Ok*/}
                {/*</button>*/}
                {/*</span>*/}
                {/*            }*/}
                {/*            {*/}
                {/*                !widget.editing &&*/}
                {/*                <span>*/}
                {/*                    {widget.name}*/}
                {/*                    {widget.type}*/}

                                    {
                                        widget.type ==="HEADING" &&
                                        <HeadingWidget typeWidget={typeWidget}
                                                       topicId={topicId}
                                                       widgets={widgets}
                                                       upWidget={upWidget}
                                                       downWidget={downWidget}
                                                       textWidget={textWidget}
                                                       nameWidget={nameWidget}
                                                       sizeWidget={sizeWidget}
                                                       updateWidget={updateWidget}
                                                       okWidget={okWidget}
                                                       deleteWidget={deleteWidget}
                                                       editWidget={editWidget}
                                                       widget ={widget} />
                                    }
                                    {
                                        widget.type ==="PARAGRAPH" &&
                                        <ParagraphWidget typeWidget={typeWidget}
                                                         widgets={widgets}
                                                         upWidget={upWidget}
                                                         downWidget={downWidget}
                                                         nameWidget={nameWidget}
                                                         textWidget={textWidget}
                                                         sizeWidget={sizeWidget}
                                                         updateWidget={updateWidget}
                                                         okWidget={okWidget}
                                                         deleteWidget={deleteWidget}
                                                         editWidget={editWidget} widget ={widget} />
                                    }
                                    {/*<button onClick={() => editWidget(widget)}>Edit</button>*/}
                {/*</span>*/}
                {/*            }*/}
                        </div>
                )
            }
        </ul>
        <button className={"fas fa-plus btn-success"} onClick={() => createWidgetForTopic(topicId)}></button>
    </div>

// export default WidgetList

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetsReducer.widgets,
    topicId: state.widgetsReducer.topicId,
})


const propertyToDispatchMapper = (dispatch) => ({
    updateWidget: (widget) =>
        widgetService.updateWidget(widget.id, {
            ...widget
        }).then(status =>
            dispatch({
                type: "UPDATE_WIDGET",
                widget: widget
            })),
    // changeOrder: (widgets, widget) => {
    //     let i;
    //     for (i = 0; i < 10; i++){
    //         if(widgets[i].order === widget.order + 1){
    //             let temp = widgets[i].order;
    //             widgets[i].order =  widget.order
    //             widget.order = temp;
    //         }
    //     }
    // },
    typeWidget: (widget, value) =>
        widgetService.updateWidget(widget.id, {
            ...widget,
            type: value
        }).then(status =>
            dispatch({
                type: "UPDATE_WIDGET",
                widget: {...widget, type: value}
            })),

    downWidget: (widget, widgets, topicId) => {
        for (let i = 0; i < widgets.length; i++){
            if(i === widgets.indexOf(widget)){
                let temp = widgets[i+1];
                widgets[i+1] = widgets[i];
                widgets[i] = temp;
                break;
            }
        }

            widgetService.reloadWidgets(widgets)
                .then(status =>
                dispatch({
                    type: "FIND_WIDGETS_FOR_TOPIC",
                    widgets: widgets,
                    topicId

                }))
    },
    upWidget: (widget, widgets, topicId) => {
        for (let i = 0; i < widgets.length; i++){
            if(i === widgets.indexOf(widget)){
                let temp = widgets[i-1];
                widgets[i-1] = widgets[i];
                widgets[i] = temp;
                break;
            }
        }
        widgetService.reloadWidgets(widgets).then(status =>
            dispatch({
                type: "FIND_WIDGETS_FOR_TOPIC",
                widgets: widgets,
                topicId
            }))
    },

    textWidget: (widget, value) =>
        // widgetService.updateWidget(widget.id, {
        //     ...widget, text: value
        // }).then(status =>
            dispatch({
                type: "UPDATE_WIDGET",
                widget: {...widget, text: value}
            }),
    nameWidget: (widget, value) =>
        // widgetService.updateWidget(widget.id, {
        //     ...widget, name: value
        // }).then(status =>
        dispatch({
            type: "UPDATE_WIDGET",
            widget: {...widget, name: value}
        }),
    sizeWidget: (widget, value) =>
        // widgetService.updateWidget(widget.id, {
        //     ...widget, size: value
        // }).then(status =>
            dispatch({
                type: "UPDATE_WIDGET",
                widget: {...widget, size: value}
            }),
    okWidget: (widget) =>
        widgetService.updateWidget(widget.id, {
            ...widget, editing: false
        }).then(status => dispatch({
            type: "UPDATE_WIDGET",
            widget: {...widget, editing: false}
        })),
    editWidget: (widget) =>
        widgetService.updateWidget(widget.id, {
            ...widget, editing: true
        }).then(status =>
        dispatch({
            type: "UPDATE_WIDGET",
            widget: {...widget, editing: true}
        })),

    deleteWidget : (widgetId) =>
        widgetService.deleteWidget(widgetId)
            .then(status => dispatch({
                type: "DELETE_WIDGET",
                widgetId
            })),
            // .then(resp => widgetService.findWidgetsForTopic(topicId)),

    createWidgetForTopic : (topicId) =>
        widgetService.createWidgetForTopic(topicId)
            .then(widget => dispatch({
                type: "CREATE_WIDGET",
                widget
            })),

    // createWidgetForTopic: (topicId) => {
    //     createWidget(dispatch, topicId)
    // },
    // deleteWidget: (widget, topicId) => deleteWidget(dispatch, widget.id, topicId),
    // updateWidget: (widget) => updateWidget(dispatch, widget),
    // editWidget: (widget) => editWidget(dispatch, widget),
    // okWidget: (widget) => okWidget(dispatch, widget),
})

export default connect
( stateToPropertyMapper,
    propertyToDispatchMapper)
(WidgetListComponent)