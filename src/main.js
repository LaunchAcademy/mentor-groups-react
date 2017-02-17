import React from 'react'
import ReactDOM from 'react-dom'

import MentorGroup from './MentorGroup'

let mentors = {
  "sebastian": [
    "Devin",
    "Arielle"
  ],
  "ezra": [
    "Evianne",
    "Corey"
  ]
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let mentorGroups = []

    for(let mentor in mentors) {
      mentorGroups.push(
        <MentorGroup name={mentor} launchers={mentors[mentor]} />
      )
    }

    return (
      <ul>
        { mentorGroups }
      </ul>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
