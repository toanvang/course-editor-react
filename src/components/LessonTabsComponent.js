import React from "react";

export default class LessonTabsComponent extends React.Component{
    state ={
    }
    render () {
        return (
            <div className="collapse navbar-collapse navbar-nav" id="navbarSupportedContent">
                <ul className="navbar-nav justify-content-around w-100">
                    <li><a className="nav-link btn-lg text-lg nav-item wbdv-lesson-tabs" href="#">Build</a></li>
                    <li><a className="nav-link btn-lg nav-item wbdv-lesson-tabs" href="#">Pages</a></li>
                    <li><a className="nav-link btn-lg nav-item wbdv-lesson-tabs" href="#">Theme</a></li>
                    <li><a className="nav-link btn-lg nav-item wbdv-lesson-tabs" href="#">Store</a></li>
                    <li><a className="nav-link btn-lg nav-item wbdv-lesson-tabs" href="#">Apps</a></li>
                    <li><a className="nav-link btn-lg nav-item wbdv-lesson-tabs" href="#">Settings</a></li>
                    <li><a className="btn btn-sm btn-success wbdv-lesson-add-btn" href="#"><i className="fas fa-plus"></i></a></li>
                </ul>
            </div>
        )
    }
}