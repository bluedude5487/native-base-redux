import { combineReducers } from 'redux'
import {
  SET_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_TODOS:
      return action.payload
    default:
      return state
  }
}

export default todoApp
