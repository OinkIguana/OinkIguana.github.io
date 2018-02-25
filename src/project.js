'use strict';
import React from 'react';
import EmojiConverter from 'emoji-js';
const MY_LOGIN = 'OinkIguana';

const emoji = new EmojiConverter();
emoji.replace_mode = 'unified';
emoji.allow_native = true;

export function Project(props) {
  const { html_url, fork, name, homepage, has_pages, description, owner: { login } } = props.project;
  const owner = login === MY_LOGIN ? '' :  `${login}/`;
  return (
    <div className="project">
      <div className="project__repo"><a className="project__url" href={ html_url }><span className="project__fork">{ fork ? "🍴" : "" }</span> { owner }{ name }</a></div>
      <div className="project__desc">{ emoji.replace_colons(description || "") }</div>
      <div className="project__links">
        <div className="project__link"><a className="project__url" href={ html_url }>📕 Repository</a></div>
        { has_pages && name !== "oinkiguana.github.io"
          ? <div className="project__link"><a className="project__url" href={ name }>📃 Pages</a></div>
          : null }
        { homepage
          ? <div className="project__link"><a className="project__url" href={ homepage }>🏠 Homepage</a></div>
          : null }
      </div>
    </div>
  );
}
