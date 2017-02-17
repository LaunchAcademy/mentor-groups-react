import React, { Component } from 'react'
import Launcher from './Launcher'

class MentorGroup extends Component {
  constructor(props) {
    super(props)
    this.state = { presenter: null }
    this.makePresenter = this.makePresenter.bind(this)
  }

  makePresenter(presenterName) {
    this.setState({
      presenter: presenterName
    })
  }
  render() {
    let launcherComponents = []
    this.props.launchers.forEach((launcher) => {
      let presenter = this.state.presenter === launcher ? "PRESENTER -" : ""
      console.log(presenter)
      launcherComponents.push(<Launcher name={launcher} presenter={presenter} makePresenter={this.makePresenter} />)
    })
    return (
      <li>
        { this.props.name }
        <ul>
          { launcherComponents }
        </ul>
      </li>
    )
  }
}

export default MentorGroup
