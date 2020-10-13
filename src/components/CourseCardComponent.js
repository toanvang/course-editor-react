import React from "react";
import {Link} from "react-router-dom";
import {updateCourse} from "../services/CourseService";

export default class CourseCardComponent extends React.Component{
    state ={
        editing: false,
        course: this.props.course
    }
    render (){

        return(
            <div className="card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 m-2 p-0">
                <img className="card-img-top d-flex"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h5 className="card-title">
                    {
                        this.state.editing &&
                        <input className="form-control"
                               onChange={(event) => {
                                   const newTitle = event.target.value
                                   this.setState(prevState => ({
                                       course: {...prevState.course, title: newTitle}
                                   }))}
                               }

                               value={this.state.course.title}/>
                    }
                    {
                        !this.state.editing &&
                        // similar to concatenate edit with course id but better practice
                        <Link to ={`/edit/${this.props.course._id}`}>{this.props.course.title}</Link>
                    }
                    </h5>
                    <p className="card-text">Modified {this.props.course.modified}</p>
                    <button onClick={() => this.props.deleteCourse(this.props.course)} className="btn btn-danger"><i
                        className="far fa-trash-alt"></i></button>
                    {
                        !this.state.editing &&
                        <button onClick={() =>
                            this.setState({editing: true})}
                                className="btn btn-warning"><i className="far fa-edit"></i></button>
                    }
                    {
                        this.state.editing &&
                        <button onClick={() =>{
                            updateCourse(this.state.course._id, this.state.course)
                                .then(status =>
                                    this.setState({editing: false})
                                )
                        }}
                                className="btn btn-success"><i className="far fa-check-circle"></i></button>
                    }
                </div>
            </div>
        )
    }
}
