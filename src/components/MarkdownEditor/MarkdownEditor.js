import React, { Component } from 'react';

class MarkdownEditor  extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <textarea 
        id="editor" 
        type="text" 
        value={this.props.text}
        onChange={this.props.onChange}
      />
    );
  }
}

export default MarkdownEditor;