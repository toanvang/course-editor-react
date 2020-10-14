import React from "react";
import {connect} from "react-redux";


const WidgetListComponent = ({
                                 widgets=[],
                                 createWidget,
                                 deleteWidget,
                                 updateWidget,
                                 editWidget,
                                 okWidget
}) =>
    <div>
        <h1>Widgets</h1>
        <ul>
            {
                widgets.map(widget =>
                    <li>
                        <button
                            onClick={() => deleteWidget(widget)}>
                            Delete
                        </button>

                        {
                            widget.editing &&
                            <span>
                                <input
                                onChange={(event) => updateWidget({
                                    ...widget,
                                    name: event.target.value
                                })}
                                value={widget.name}/>
                                <button onClick={() => okWidget(widget)}>
                                Ok
                                </button>
                            </span>
                        }

                        {
                            !widget.editing &&
                            <span>
                                {widget.name}
                                <button onClick={() => editWidget(widget)}>
                                Edit
                                </button>
                              </span>
                        }
                    </li>
                )
            }
        </ul>
        <button onClick={createWidget}>
            Create
        </button>
    </div>

export default WidgetListComponent

