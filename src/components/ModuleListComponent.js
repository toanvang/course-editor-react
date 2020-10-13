import React from "react";
import"bootstrap/dist/css/bootstrap.min.css"
import"../css/ModuleList.css"
import {Link} from "react-router-dom";
import {updateCourse} from "../services/CourseService";


export default class ModuleListComponent extends React.Component{
    state ={
    }
    render () {
        return (
            <div className="col-3 text-center d-block bg-secondary wbdv-module-list pr-lg-3">
                <div className="d-flex flex-column flex-md-row align-items-center wbdv-module-item">
                    <a href="#" className="d-sm-inline btn btn-dark btn-block wbdv-module-item-title">Module 1 -
                        jQuery</a>
                    <a className="btn btn-danger far fa-times-circle wbdv-module-item-delete-btn float-right"></a>
                </div>
                <div className="d-flex flex-column flex-md-row align-items-center wbdv-module-item">
                    <a href="#" className="d-sm-inline btn btn-dark btn-block wbdv-module-item-title">Module 2 -
                        React</a>
                    <a className=" btn btn-danger far fa-times-circle wbdv-module-item-delete-btn float-right"></a>
                </div>
                <div className="d-flex flex-column flex-md-row align-items-center wbdv-module-item">
                    <a href="#" className="d-sm-inline btn btn-dark btn-block wbdv-module-item-title">Module 3 -
                        Redux</a>
                    <a className=" btn btn-danger far fa-times-circle wbdv-module-item-delete-btn float-right"></a>
                </div>
                <div className="d-flex flex-column flex-md-row align-items-center wbdv-module-item">
                    <a href="#" className="d-sm-inline btn btn-dark btn-block wbdv-module-item-title">Module 4 -
                        Native</a>
                    <a className=" btn btn-danger far fa-times-circle wbdv-module-item-delete-btn float-right"></a>
                </div>
                <div className="d-flex flex-column flex-md-row align-items-center wbdv-module-item">
                    <a href="#" className="d-sm-inline btn btn-dark btn-block wbdv-module-item-title">Module 5 -
                        Angular</a>
                    <a className=" btn btn-danger far fa-times-circle wbdv-module-item-delete-btn float-right"></a>
                </div>
                <div className="d-flex flex-column flex-md-row align-items-center wbdv-module-item">
                    <a href="#" className="d-sm-inline btn btn-dark btn-block wbdv-module-item-title">Module 6 -
                        Node</a>
                    <a className=" btn btn-danger far fa-times-circle wbdv-module-item-delete-btn float-right"></a>
                </div>
                <div className="d-flex flex-column flex-md-row align-items-center wbdv-module-item">
                    <a href="#" className="d-sm-inline btn btn-dark btn-block wbdv-module-item-title">Module 7 -
                        Mongo</a>
                    <a className=" btn btn-danger wbdv-module-item-delete-btn float-right" href="#"><i className="far fa-times-circle"></i></a>
                </div>
            </div>
        )
    }
}