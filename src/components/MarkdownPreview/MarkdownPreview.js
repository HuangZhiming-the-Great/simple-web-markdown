import React, { Component } from 'react';
import marked from 'marked';

marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
};

class MarkdownPreview extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div
      dangerouslySetInnerHTML={{
        __html: marked(this.props.text, { renderer: renderer })
      }}
      id='preview'
    />
    );
  }
}

export default MarkdownPreview;