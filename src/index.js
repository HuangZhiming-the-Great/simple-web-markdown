import React from 'react';
import ReactDOM from 'react-dom';

import MarkdownEditor from './components/MarkdownEditor/MarkdownEditor.js';
import MarkdownPreview from './components/MarkdownPreview/MarkdownPreview.js';

import './style.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      markdown: placeholder
    }
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      markdown: e.target.value
    });
  }

  render(){
    return (
      <div id="App">
        <MarkdownEditor text={this.state.markdown} onChange={this.handleChange}/>
        <MarkdownPreview text={this.state.markdown} />
      </div>
    );
  }
}

const placeholder="# hello world!";

ReactDOM.render(<App />,document.getElementById("root"));