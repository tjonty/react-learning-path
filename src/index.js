var React = require("react");
var ReactDOM = require("react-dom");

const name = "jonty";
const number = 23;
const customStyle = {
  color: "black",
  backgroundColor: "lightgreen",
  border: "1px solid black",
  padding: "10px",
  textAlign: "center"
};

ReactDOM.render(
  <div style={customStyle}>
    <h1>hello {name}</h1>
    <p>Your lucky number is {number}</p>
    <p>Your favourite number is {4 + 4}</p>
    <p>copyright {new Date().getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
