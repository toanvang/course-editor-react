import React from "react";

const ImageWidget = ({widget, topicId,  widgets, upWidget, downWidget, nameWidget, textWidget, typeWidget, sizeWidget, deleteWidget, editWidget, okWidget, updateWidget}) =>
    <div className="container border p-3 mb-3">
        {
            widget.editing &&
            <div>
                <button onClick={() => okWidget(widget)}>Preview</button>
                <div className="d-end">
                    <h3 className="d-inline mb-5">Image Widget: {widget.name}</h3>
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
                        <input
                            value={widget.text}
                            onChange={(event) => textWidget(
                                widget,
                                event.target.value
                            )}
                            className="form-control"
                            placeholder="Image URL"/>
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
                <h4>Preview</h4>
                {
                    widget.size === "1" &&
                    <img src={widget.text} alt=""/>
                }
                {
                    widget.size === "2" &&
                    <img src={widget.text} alt=""/>
                }
                {
                    widget.size === "3" &&
                    <img src={widget.text} alt=""/>
                }
                {
                    widget.size === "4" &&
                    <img src={widget.text} alt=""/>
                }
                {
                    widget.size === "5" &&
                    <img src={widget.text} alt=""/>
                }
                {
                    widget.size === "6" &&
                    <img src={widget.text} alt=""/>
                }


            </div>
        }
        {
            !widget.editing &&
            <div>
                <button onClick={() => editWidget(widget)}>Edit</button>
                <h4>Preview</h4>
                {
                    widget.size === "1" &&
                    <img src={widget.text} alt=""/>
                }
                {
                    widget.size === "2" &&
                    <img src={widget.text} alt=""/>
                }
                {
                    widget.size === "3" &&
                    <img src={widget.text} alt=""/>
                }
                {
                    widget.size === "4" &&
                    <img src={widget.text} alt=""/>
                }
                {
                    widget.size === "5" &&
                    <img src={widget.text} alt=""/>
                }
                {
                    widget.size === "6" &&
                    <img src={widget.text} alt=""/>
                }
            </div>

        }

    </div>


export default ImageWidget
