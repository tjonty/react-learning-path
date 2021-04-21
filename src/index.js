// IMPORT IMPORTANT DEPENDENCIES
var React = require("react");
var ReactDOM = require("react-dom");

// IMPORT COMPONENTS
import List from "./List";

//DEFINING VARIABLES
const name = "jonty";
const number = 23;

// STYLING FOR INLINE
const customStyle = {
  color: "black",
  backgroundColor: "lightgreen",
  border: "1px solid black",
  padding: "10px",
  textAlign: "center"
};

var greeting;
const date = new Date();
const currentHour = date.getHours();

// IF-ELSE
if (currentHour < 12) {
  greeting = "Good Morning";
} else if (currentHour < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Night";
}

// FIRST COMPONENT IN INDEX.JS
function Heading() {
  return <h1>hello {name}</h1>;
}

ReactDOM.render(
  <div style={customStyle}>
    <Heading />
    <h5>{greeting}</h5>
    <p>Your lucky number is {number}</p>
    <p>Your favourite number is {4 + 4}</p>
    <List />
    <p>copyright {new Date().getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
