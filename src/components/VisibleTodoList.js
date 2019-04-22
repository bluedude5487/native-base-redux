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
        <ListItem onPress={()=>{onTodoClick(Number(item.id), !item.completed)}}>
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
  let array = []
  const keys = Object.keys(todos)
  for (const key of keys) {
    array.push({id:key, text:todos[key].text, 
                completed:todos[key].completed})
  }

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
    onTodoClick: (id, completed) => {
      dispatch(toggleTodo(id, completed))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList)
