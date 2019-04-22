import {todoAppRef} from './firebase'

/*
 * action types
 */
export const SET_TODOS = 'SET_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export const addTodo = (text) => async dispatch => {
  todoAppRef.child("todos").push().set({text, completed: false})
}

export const toggleTodo = (id, completed) => async dispatch => {
  todoAppRef.child("todos").child(id).put("completed", completed);
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export const fetchTodos = () => async dispatch => {
  console.log("fetchTodos is called")
  todoAppRef.on("value", snapshot => {
    console.log(snapshot.val())
    dispatch({
      type: SET_TODOS,
      payload: snapshot.val()
    })
  }, function(error) {console.log(error)})
}
