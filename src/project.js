'use strict';
import React from 'react';

export class Project extends React.Component {
  render() {
    return this.state.projects.map(project => (
      project
    ));
  }
}
