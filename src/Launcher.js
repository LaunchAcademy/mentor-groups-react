import React, { Component } from 'react'

class Launcher extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log('CLICKED')
    this.props.makePresenter(this.props.name)
  }

  render() {
    return (
      <li key={this.props.name} onClick={this.handleClick}>
        { this.props.presenter }
        { this.props.name }
      </li>
    )
  }
}

export default Launcher
