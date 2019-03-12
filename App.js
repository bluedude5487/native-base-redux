import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './src/reducers'
import HomeScreen from './src/components/HomeScreen'

// for testing only
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './src/actions'

const store = createStore(todoApp)

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
unsubscribe()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    )
  }
}
