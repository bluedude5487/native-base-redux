import React from 'react'
import { List, ListItem, Text } from 'native-base'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'

function VisibleTodoList(props){
  const { list, onTodoClick } = props

  return (
    <List
      dataArray={list}
      renderRow={(item, _, index)=>{
        //{console.log("item:"+JSON.stringify(item))}
        return (
          <ListItem onPress={()=>{onTodoClick(item["id"], !item.completed)}}>
          <Text
            style={{textDecorationLine: item.completed ? 'line-through' : 'none'}}>
            {item.text}
          </Text>
          </ListItem>
        )
      }}>
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
  
  //console.log("todos:"+JSON.stringify(array))
  switch (filter) {
    case 'SHOW_ALL':
      return array
    case 'SHOW_COMPLETED':
      return array.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return array.filter(t => !t.completed)
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
