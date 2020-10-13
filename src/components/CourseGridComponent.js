import React from "react"
import CourseCardComponent from "./CourseCardComponent";
import CourseTableComponent from "./CourseTableComponent";
import {createCourse, findAllCourses, deleteCourse} from "../services/CourseService";
import {Link, Route} from "react-router-dom";
const myInput = React.createRef()

export default class CourseGridComponent extends React.Component {
    state = {
        courses: [],
        courseBeingEdited: {},
    }

    // will be invoke when the course list on server is ready to render
    componentDidMount() {
        findAllCourses()
            .then(courses => {
                this.setState({
                    courses: courses
                })
            })
    }

    // this function needs to live where state live
    deleteCourse = (course) => {
        deleteCourse(course._id)
            .then(status => this.setState(prevState => ({
                    // return true mean the function will keep the value(delete)
                    // remove course with different id in this case
                    courses: prevState.courses.filter(c => c._id !== course._id)
                })
            ))
            .catch(error => {
            })
    }


    addCourse = () => {
        // remove id because server will take care
        const newCourse = {
            title: myInput.current.value,
            owner: "me",
            modified: (new Date()).toDateString()
        }
        createCourse(newCourse)
            // actualyCourse have id and meta data
            .then(actualCourse => this.setState(prevState => ({
                courses: [
                    //... mean clone the object
                    ...prevState.courses, actualCourse
                ]
            })))
    }

    editCourse = (course) => {
        this.setState({
            courseBeingEdited: course
        })
    }

    render() {
        return (
            <div>
                {this.props.displayMode}
                <div className="form-inline">
                    <input ref={myInput} type="text" className="float-right form-control mr-sm-2 wbdv-field wbdv-new-course"
                           placeholder="New Course Title"/>
                    <button onClick={this.addCourse} className="float-right btn btn-success">
                        Add Course</button>
                </div>
                <table className="table">
                    <tr>
                        <td>Recent Documents</td>
                        <td>Owned By</td>
                        <td>
                            <button
                                className="btn btn-sm btn-success mx-2 fa fa-sort-alpha-down wbdv-header wbdv-sort"></button>
                            <Link to="/courses">
                                <button
                                    onClick={
                                        this.props.displayMode
                                    }
                                className="btn btn-sm btn-success mx-2 fa fa-list wbdv-button wbdv-list-layout"></button>
                            </Link>
                            <Route path="/courses" exact><CourseTableComponent/></Route>
                        </td>
                    </tr>
                </table>
                <div className="row">
                {/*// use classname to avoid keyword with*/}
                    {
                        // map is the iterator function (pass two parameter)

                        this.state.courses.map((course) =>

                            <CourseCardComponent
                                course={course}
                                deleteCourse={this.deleteCourse}
                            />
                        )
                    }
                </div>
            </div>
        );
    }
}

