import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import"bootstrap/dist/css/bootstrap.min.css"
import"font-awesome/css/font-awesome.css"
import App from './App';
import * as serviceWorker from './serviceWorker';
import {CourseManagerContainer} from "./containers/CourseManagerContainer";
import Hello from "./components/Hello";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import CounterContainer from "./containers/CounterContainer";
import HelloContainer from "./containers/HelloContainer";
import fsm from "./reducers/fsm"
import widgetsReducer from "./reducers/widgetsReducer"

const reducers = combineReducers({
    fsm, widgetsReducer
})

// where fsm store the state
const store = createStore(reducers)



ReactDOM.render(
    // Provider take the store and trickles down to all component that care about that state
    <Provider store={store}>
        <CourseManagerContainer/>
        {/*Hello only wants msg in the state which is called substate*/}
        {/*When Provider instantiate Hello component, connect function is invoked*/}
        <HelloContainer />
        <CounterContainer />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
