import React from 'react'
import { List, ListItem, Text } from 'native-base'
import { connect } from 'react-redux'

function VisibleTodoList(props){
  const { list } = props

  return (
    <List
      dataArray={list}
      renderRow={(item, _, index)=>
        <ListItem>
          <Text>{item.text}</Text>
        </ListItem>
      }>
    </List>
  )
}

const mapStateToProps = state => {
  return {
    list: state.todos
  }
}

export default connect(mapStateToProps)(VisibleTodoList)
