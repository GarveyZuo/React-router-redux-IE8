import { combineReducers } from 'redux'

import {
    SET_HELLOWORDNUMBER
  }from '../actions/helloWorld_Action';


  function helloNumber(state = 0, action) {
    switch (action.type) {
        case SET_HELLOWORDNUMBER:
            return action.helloNumber
        default:
            return state
    }
}


const helloWorldReducer = combineReducers({
   helloNumber
});


export default helloWorldReducer
