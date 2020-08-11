import React, { Component } from "react";
import marked from "marked";
import both from "../assets/both.svg";

const placeholderText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
marked.setOptions({
  breaks: true,
});
class MarkdownEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholderText,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ markdown: e.target.value });
  }
  render() {
    return (
      <div className="markdown-page">
        <h1 className="markdown-title">Markdown - Editor</h1>
        <div className="flex-container">
          <div className="editor">
            <h3 className="editor-heading">Editor - Type your text here</h3>
            <textarea
              id="editor"
              cols="40"
              rows="20"
              value={this.state.markdown}
              onChange={this.handleChange}
              className="editor-textarea"
            ></textarea>
          </div>
          <img src={both} alt="Github markdown to html" className="image" />
          <div
            id="preview"
            className="previewer"
            dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
          ></div>
        </div>
      </div>
    );
  }
}
export default MarkdownEditor;
