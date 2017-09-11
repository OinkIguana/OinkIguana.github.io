'use strict';
import React from 'react';

export class Project extends React.Component {
  render() {
    return (
      <div className="project">
        <div className="project__repo"><a className="project__url" href={ this.props.project.html_url }><span className="project__fork">{ this.props.project.fork ? "🍴" : "" }</span> { this.props.project.name }</a></div>
        <div className="project__desc">{ this.props.project.description }</div>
        <div className="project__links">
          { this.props.project.has_pages
            ? <div className="project__link"><a className="project__url" href={this.props.project.name }>📃 Pages</a></div>
            : null }
          { this.props.project.homepage
            ? <div className="project__link"><a className="project__url" href={ this.props.project.homepage }>🏠 Homepage</a></div>
            : null }
        </div>
      </div>
    );
  }
}
