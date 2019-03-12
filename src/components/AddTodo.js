import React, { Component } from 'react'
import { Input } from 'native-base'
import { connect } from 'react-redux'

class AddTodo extends Component {
  state = { text: ''}

  onChangeText = (text) => this.setState({text})

  onSubmitEditing = () => {
    const {text} = this.state

    if (!text) return // Don't submit if empty

    console.log("submit:"+text)
    // dispatch add todo action
    this.setState({text: ''})
  }

  render() {
    return (
      <Input placeholder='Add new todo' bordered
        autoCorrect={false}
        value={this.state.text}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}/>
    )
  }
}

export default connect()(AddTodo)
