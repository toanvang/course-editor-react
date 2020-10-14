

const initialState ={
    communications:{
        title: "this is the communication",
        msg: "WebDev Rocks!!!"
    },
    count: 123
}
// finance state machine
const fsm = (state = initialState, action) => {
    // action at least need to have a type
    switch (action.type) {
        case "UP":
            return ({
                ...state,
                count: state.count + 1
            })
        case "DOWN":
            return ({
                ...state,
                count: state.count - 1
            })
        default:
            return state

    }
}

export default fsm