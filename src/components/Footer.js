import React from 'react'
import { Footer, FooterTab, Button, Text } from 'native-base'

export default function(props){
  const { list } = props

  return (
    <Footer>
      <FooterTab>
        <Button active>
          <Text>All</Text>
        </Button>
        <Button>
          <Text>Active</Text>
        </Button>
        <Button>
          <Text>Completed</Text>
        </Button>
      </FooterTab>
    </Footer>
  )
}
