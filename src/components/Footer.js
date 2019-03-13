import React from 'react'
import { Footer, FooterTab } from 'native-base'
import Link from "./Link"
import { VisibilityFilters } from '../actions'

export default function(props){
  const { list } = props

  return (
    <Footer>
      <FooterTab>
        <Link filter={VisibilityFilters.SHOW_ALL} label="All" />
        <Link filter={VisibilityFilters.SHOW_ACTIVE} label="Active" />
        <Link filter={VisibilityFilters.SHOW_COMPLETED} label="completed"/>
      </FooterTab>
    </Footer>
  )
}
