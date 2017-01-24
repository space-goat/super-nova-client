import React, { Component } from 'react'
// routing
import { Link } from 'react-router'
// components
import MenuItem from 'material-ui/MenuItem'
// appearance
import Radium from 'radium'

export class SubSideNav extends Component {
  renderLinks(links) {
    const activeStyle = {
      backgroundColor: 'black',
      textDecoration: 'none'
    }

    const linkStyle = {
      color: 'white'
    }

    return links.map((link) => {
      return (
        <Link to={ link.path } activeStyle={ activeStyle } key={ link.path }>
          <MenuItem style={ linkStyle }>
            { link.text }
          </MenuItem>
        </Link>
      )
    })
  }

  render() {
    const { links, header, path } = this.props

    const containerStyle = {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '20px',
      color: 'white'
    }

    const headerStyle = {
      marginLeft: '20px',
      fontWeight: '100'
    }

    const linkListStyle = {
      padding: '0'
    }

    return (
      <div style={ containerStyle }>
        <Link to={ path }>
          <h2 style={ headerStyle }>{ header }</h2>
        </Link>
        <ul style={ linkListStyle }>
          { this.renderLinks(links) }
        </ul>
      </div>
    )
  }
}

SubSideNav = Radium(SubSideNav)
