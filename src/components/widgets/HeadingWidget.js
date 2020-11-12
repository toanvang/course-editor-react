import React from "react";

const HeadingWidget = ({widget, topicId,  widgets, upWidget, downWidget, nameWidget, textWidget, typeWidget, sizeWidget, deleteWidget, editWidget, okWidget, updateWidget}) =>
    <div className="container border p-3 mb-3">
    {
        widget.editing &&
        <div>
            <button onClick={() => okWidget(widget)}>Preview</button>
            <div className="d-end">
                <h3 className="d-inline mb-5">Heading Widget: {widget.name}</h3>
                <button className="float-right btn btn-sm btn-danger wbdv-row wbdv-button wbdv-delete far fa-times-circle"
                    onClick={() => deleteWidget(widget.id)}>
                </button>
                <select
                    value={widget.type}
                    onChange={(event) =>
                        typeWidget(widget, event.target.value)}
                    className="float-right">
                    <option value="HEADING">Heading</option>
                    <option value="PARAGRAPH">Paragraph</option>
                </select>
                {
                    widgets.indexOf(widget) === 0 && widgets.length > 1 &&
                    <button
                        onClick={() => downWidget(widget,widgets)}
                        className="far btn btn-sm btn-warning fa-arrow-alt-circle-down float-right m-1"></button>
                }
                {
                    widgets.indexOf(widget) === widgets.length - 1 && widgets.length > 1 &&
                    <button
                        onClick={() => upWidget(widget,widgets)}
                        className="far btn btn-sm btn-warning fa-arrow-alt-circle-up float-right m-1"></button>
                }
                {
                    widgets.indexOf(widget) !== 0 && widgets.indexOf(widget) !== widgets.length - 1 && widgets.length > 1 &&
                    <div>
                            <button
                                onClick={() => downWidget(widget,widgets)}
                                className="far btn btn-sm btn-warning fa-arrow-alt-circle-down float-right m-1"></button>
                            <button
                                onClick={() => upWidget(widget, widgets)}
                                className="far btn btn-sm btn-warning fa-arrow-alt-circle-up float-right m-1"></button>
                        </div>
                }
            </div>

            <form className="mt-2">
                <div className="form-group">
                    <input
                        value={widget.text}
                        onChange={(event) => textWidget(
                            widget,
                            event.target.value
                        )}
                        className="form-control"
                        placeholder="Heading text"/>
                </div>
                <div className="form-group">
                    <select
                        id="size"
                        className="form-control"
                        value={widget.size}
                        onChange={(event) =>
                            sizeWidget(widget, event.target.value)}
                            >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
                <div className="form-group">
                    <input
                        onChange={(event) => nameWidget(
                            widget,
                            event.target.value
                        )}
                        value={widget.name}
                        type="text" className="form-control" placeholder="Widget Name"/>
                </div>
                <button onClick={() => updateWidget(widget)}
                    type="submit" className="btn btn-sm btn-success">Save</button>

            </form>

        </div>
    }
    {
        !widget.editing &&
            <div>
                <button onClick={() => editWidget(widget)}>Edit</button>
                <h4>Preview</h4>
                {
                    widget.size === "1" &&
                    <h1>{widget.text}</h1>
                }
                {
                    widget.size === "2" &&
                    <h2>{widget.text}</h2>
                }
                {
                    widget.size === "3" &&
                    <h3>{widget.text}</h3>
                }
                {
                    widget.size === "4" &&
                    <h4>{widget.text}</h4>
                }
                {
                    widget.size === "5" &&
                    <h5>{widget.text}</h5>
                }
                {
                    widget.size === "6" &&
                    <h6>{widget.text}</h6>
                }
            </div>

    }

    </div>


export default HeadingWidget
