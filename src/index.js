//Create a react app from scratch.
var React = require("react");
var ReactDOM = require("react-dom");

//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
ReactDOM.render(
  <div>
    <h1>hello</h1>
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>
  </div>,
  document.getElementById("root")
);
