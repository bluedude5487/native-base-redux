import React from 'react'
import { Button, Text } from 'native-base'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'

function Link({ active, label, onClick }){
  return (
    <Button active={active} onPress={onClick}>
      <Text>{label}</Text>
    </Button>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
