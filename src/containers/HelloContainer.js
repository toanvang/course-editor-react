import React from "react";
import {connect} from "react-redux";
import Hello from "../components/Hello"

const stateToPropertyMapper = state => ({
        message: state.fsm.communications.msg
})

// responsible of connect is what to do with the state
export default connect (stateToPropertyMapper) (Hello)