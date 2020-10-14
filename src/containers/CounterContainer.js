import React from "react";
import {connect} from "react-redux";
import Counter from "../components/Counter"

// go from state to the property
const stateToPropertyMapper = state => {
    return {
        count: state.fsm.count
    }
}

// go from property to state
const propertyToDispatchMapper = (dispatch) => ({
    up: () => dispatch({type: "UP"}),
    down: () => dispatch({type: "DOWN"})
})
export default connect (stateToPropertyMapper, propertyToDispatchMapper)(Counter)

