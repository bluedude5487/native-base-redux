import React from 'react'
import { List, ListItem, Text } from 'native-base'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'

function VisibleTodoList(props){
  const { list, onTodoClick } = props

  return (
    <List
      dataArray={list}
      renderRow={(item, _, index)=>
        <ListItem onPress={()=>{onTodoClick(Number(index))}}>
          <Text
            style={{textDecorationLine: item.completed ? 'line-through' : 'none'}}>
            {item.text}
          </Text>
        </ListItem>
      }>
    </List>
  )
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = state => {
  return {
    list: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList)
