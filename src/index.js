'use strict';
import 'reset-css/_reset.scss';
import './index.scss';

import React from 'react';

import { render } from 'react-dom';
import { Project } from './project';
import { repos } from './api';

class Index extends React.Component {
  state = { projects: [] };

  componentDidMount() {
    repos.then(projects => this.setState({ projects }))
  }

  render() {
    return (
      <div>{
        this.state.projects.map(project => (
          <Project project={project} />
        ))
      }</div>
    );
  }
}

render(<Index />, document.querySelector('#root'));
