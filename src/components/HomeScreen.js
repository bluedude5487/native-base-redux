import React from 'react'
import { Container, Header, Content, Text } from 'native-base'

import VisibleTodoList from './VisibleTodoList'
import AddTodo from "./AddTodo"
import Footer from "./Footer"

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
        <Text>Todos</Text>
        </Header>
        <Content>
          <AddTodo />
          <VisibleTodoList />
        </Content>
        <Footer />
      </Container>
    )
  }
}
