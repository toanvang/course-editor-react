import React from "react";

const ParagraphWidget = ({widget, nameWidget, textWidget, typeWidget, sizeWidget, deleteWidget, editWidget, okWidget, updateWidget}) =>
    <div>
        {
            widget.editing &&
            <div className="container border p-3 mb-3">
                <button onClick={() => okWidget(widget)}>Preview</button>
                <div className="d-end">
                    <h3 className="d-inline mb-5">Paragraph Widget: {widget.name}</h3>
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
                    </select>
                    <a className="far btn btn-sm btn-warning fa-arrow-alt-circle-up float-right m-1"></a>
                    <a className="far btn btn-sm btn-warning fa-arrow-alt-circle-down float-right m-1"></a>
                </div>

                <form className="mt-2">
                    <div className="form-group">
                <textarea
                    value={widget.text}
                    onChange={(event) => textWidget(
                        widget,
                        event.target.value
                    )}
                    className="form-control" name="" id="" cols="30" rows="10"></textarea>
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

export default ParagraphWidget