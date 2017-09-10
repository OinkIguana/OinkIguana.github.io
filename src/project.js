'use strict';
import React from 'react';

export class Project extends React.Component {
  render() {
    return (
      <div className="project">
        <div className="project__url"><a href={ this.props.project.html_url }>{ this.props.project.name }</a></div>
        <div className="project__desc">{ this.props.project.description }</div>
        { this.props.project.has_pages
          ? <div className="project__docs"><a href={ this.props.project.url }>Pages</a></div>
          : null }
      </div>
    );
  }
}
