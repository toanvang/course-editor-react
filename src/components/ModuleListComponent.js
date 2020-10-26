import React from "react";
import {connect} from "react-redux";
import moduleService from "../services/ModuleService"
import {Link} from "react-router-dom";
import {ModuleList} from "../css/ModuleList.css"
import classNames from "classnames"
const ModuleListComponent = (
    {
        course={},
        modules=[],
        deleteModule,
        createModule,
        updateModule,
        edit,
        selectModule,
        ok,

    }) =>

    <div className="col-3 text-center d-block bg-secondary wbdv-module-list pr-lg-3">
        {/*<h4>Modules for {course.title}</h4>*/}
        <h4>Modules</h4>
        {
            modules.map(module =>
                <div key={module._id} className={`${module === selectModule? ""
                    : "btn-success"} list-group-item wbdv-module-item`} >
                    {
                        !module.editing &&
                        <div
                            className="d-flex flex-column flex-md-row align-items-center wbdv-module-item">
                                    {/*<Link*/}
                                    {/*    onClick={() => selectId(module._id)}*/}
                                    {/*    to={`/course/${course._id}/modules/${module._id}`}*/}
                                    {/*    className="d-sm-inline btn-primary btn-block wbdv-module-item-title">*/}
                                    {/*    {module.title}*/}
                                    {/*</Link>*/}

                                <Link
                                    onClick={()=> selectModule(module)}
                                    className="d-sm-inline btn btn-dark btn-block wbdv-module-item-title"
                                    to={`/course/${course._id}/modules/${module._id}`}>
                                    {module.title}
                                </Link>

                            <button
                                onClick={() => edit(module)}
                                className="btn btn-danger fas fa-edit float-right">
                            </button>
                        </div>
                    }
                    {
                        module.editing &&
                        <div className="d-flex flex-column flex-md-row align-items-center wbdv-module-item">
                            <input
                                onChange={(event) => updateModule({
                                    ...module,
                                    title: event.target.value
                                })}
                                value={module.title}
                                className="d-sm-inline btn-block wbdv-module-item-title"
                            />
                            <button
                                className ="btn btn-light fa fa-check float-right"
                                onClick={() => ok(module)}>
                            </button>
                            <button
                                className="btn btn-danger far fa-times-circle wbdv-module-item-delete-btn float-right"
                                onClick={() => deleteModule(module)}>
                            </button>
                        </div>
                    }
                </div>
            )
        }
        {/*course object let we know which module belong to the course*/}
        <button
            className="fa fa-plus btn btn-success align-self-end"
            onClick={() => createModule(course)}>
        </button>
    </div>

// export default ModuleListComponent
const stateToPropertyMapper = (state) => ({
    selectedModuleId: state.moduleReducer.selectedModule,
    moduleId: state.moduleReducer.moduleId,
    modules: state.moduleReducer.modules,
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
    selectModule: (module) => dispatch ({
        type: "SELECT_MODULE",
        module: module
    }),

    ok: (module) =>
        moduleService.updateModule(module._id, {
            ...module, editing: false
        }).then(status => dispatch({
            type: "UPDATE_MODULE",
            module: {...module, editing: false}
        })),

    edit: (module) =>
        moduleService.updateModule(module._id, {
            ...module, editing: true
        }).then(status =>
            dispatch({
                type: "UPDATE_MODULE",
                module: {...module, editing: true}
            })),
    deleteModule: (module) =>
        moduleService.deleteModule(module._id)
            .then(status => dispatch({
                type: "DELETE_MODULE",
                module: module
            })),
    createModule: (course) =>
        moduleService.createModuleForCourse(course._id, {
            title: "New Module"
        }).then(actualModule => dispatch({
            type: "CREATE_MODULE",
            module: actualModule
        })),
    updateModule: (module) =>
        dispatch({
            type: "UPDATE_MODULE",
            module: module
        })
    // moduleService.updateModule(module._id, module)
    //   .then(status => dispatch({
    //     type: "UPDATE_MODULE",
    //     module: module
    //   }))
})

export default connect
( stateToPropertyMapper,
    propertyToDispatchMapper)
(ModuleListComponent)