import React from "react";
import {Link} from "react-router-dom";
import {updateCourse} from "../services/CourseService";

export default class TopicPillsComponent extends React.Component{
    state ={
    }
    render () {
        return (
            <div className="col-9 row bg-light">
                <div className="col-12 d-flex align-items-start wbdv-topic-pill-list">
                    <a href="#" className="btn btn-dark btn-block wbdv-topic-pill">Topic 1</a>
                    <a href="#" className="btn btn-dark btn-block wbdv-topic-pill">Topic 2</a>
                    <a href="#" className="btn btn-dark btn-block wbdv-topic-pill">Topic 3</a>
                    <a href="#" className="btn btn-dark btn-block wbdv-topic-pill">Topic 4</a>
                    <a className="btn btn-md btn-dark wbdv-topic-add-btn" href="#"><i className="fas fa-plus"></i></a>
                </div>

                <div className="col-12 d-flex align-items-center justify-content-end topic">
                    <a href="#" className="btn btn-sm btn-success">Save</a>
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="customSwitches"/>
                        <label className="custom-control-label" htmlFor="customSwitches">Preview</label>
                    </div>
                </div>

                <div className="container">
                    <div className="d-end">
                        <h3 className="d-inline mb-5">Heading Widget</h3>
                        <a href="#"
                           className="float-right btn btn-sm btn-danger wbdv-row wbdv-button wbdv-delete"><i className="fas fa-plus"></i></a>
                        <select className="float-right">
                            <option value="Heading 1">Heading 1</option>
                            <option value="Heading 2">Heading 2</option>
                        </select>
                        <a className="far btn btn-sm btn-warning fa-arrow-alt-circle-up float-right m-1"></a>
                        <a className="far btn btn-sm btn-warning fa-arrow-alt-circle-down float-right m-1"></a>
                    </div>

                    <form className="mt-2">
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Heading text"/>
                        </div>
                        <div className="form-group">
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Widget Name"/>
                        </div>
                    </form>
                    <h4>Preview</h4>
                    <h2>Heading text</h2>
                    <a href="#"
                       className="float-right btn btn-sm btn-danger wbdv-row wbdv-button wbdv-delete far fa-times-circle "></a>
                </div>
            </div>
        )
    }
}