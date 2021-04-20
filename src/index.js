var React = require("react");
var ReactDOM = require("react-dom");

const name = "jonty";
const number = 23;

ReactDOM.render(
  <div>
    <h1>hello {name}</h1>
    <p>Your lucky number is {number}</p>
    <p>Your favourite number is {4 + 4}</p>
    <p>copyright {new Date().getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
