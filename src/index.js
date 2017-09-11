'use strict';
import 'reset-css/_reset.scss';
import './index.scss';

import React from 'react';

import { render } from 'react-dom';
import { Project } from './project';
import { repos } from './api';

function alphabetical(left, right) {
  return left.name < right.name
    ? -1
    : 1;
}

class Index extends React.Component {
  state = { projects: [] };

  componentDidMount() {
    repos.then(projects => {
      console.table(projects);
      this.setState({ projects });
    });
  }

  render() {
    return (
      <div className="projects">{
        this.state.projects.sort(alphabetical).map(project => (
          <Project project={project} key={project.name}/>
        ))
      }</div>
    );
  }
}

render(<Index />, document.querySelector('#root'));
