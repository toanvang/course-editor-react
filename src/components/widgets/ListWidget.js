import React from "react";
let array;
let item;
const ListWidget = ({widget,  listWidgetDisplay, widgets,downWidget, upWidget, nameWidget, textWidget, typeWidget, sizeWidget, deleteWidget, editWidget, okWidget, updateWidget}) =>
    <div>
        {
            widget.editing &&
            <div className="container border p-3 mb-3">
                <button onClick={() => okWidget(widget)}>Preview</button>
                <div className="d-end">
                    <h3 className="d-inline mb-5">List Widget: {widget.name}</h3>
                    <button
                        className="float-right btn btn-sm btn-danger wbdv-row wbdv-button wbdv-delete far fa-times-circle"
                        onClick={() => deleteWidget(widget.id)}>
                    </button>
                    <select
                        value={widget.type}
                        onChange={(event) =>
                            typeWidget(widget, event.target.value)}
                        className="float-right">
                        <option value="HEADING">Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                        <option value="LIST">List</option>
                        <option value="IMAGE">Image</option>
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
                <textarea
                    placeholder="Enter one list item per line"
                    value={widget.text}
                    onChange={(event) => textWidget(
                        widget,
                        event.target.value
                    )}
                    className="form-control" name="" id="" cols="30" rows="10"></textarea>
                        <div className="form-group">
                            <select
                                id="size"
                                className="form-control"
                                value={widget.size}
                                onChange={(event) =>
                                    sizeWidget(widget, event.target.value)}
                            >
                                <option value="1">Unordered List</option>
                                <option value="2">Ordered List</option>
                            </select>
                        </div>
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
                            type="submit" className="btn btn-sm btn-success">Save
                    </button>

                </form>
                <h4>Preview</h4>
                <div class="d-none">
                    {
                        array = widget.text.split("\n")
                    }
                </div>
                {
                    widget.size === "1" &&
                    <ul>
                        {array.map((item) => <li>{item}</li>)}
                    </ul>
                }
                {
                    widget.size === "2" &&
                    <ol>
                        {array.map((item) => <li>{item}</li>)}
                    </ol>
                }
            </div>
        }
        {
            !widget.editing &&
            <div>

                <button onClick={() => editWidget(widget)}>Edit</button>
                <h4>Preview</h4>
                <div class="d-none">
                {
                    array = widget.text.split("\n")
                }
                </div>
                {
                    widget.size === "1" &&
                        <ul>
                            {array.map((item) => <li>{item}</li>)}
                        </ul>
                }
                {
                    widget.size === "2" &&
                    <ol>
                        {array.map((item) => <li>{item}</li>)}
                    </ol>
                }
            </div>
        }
    </div>

export default ListWidget
