// IMPORT IMPORTANT DEPENDENCIES
var React = require("react");
var ReactDOM = require("react-dom");

// IMPORT COMPONENT
import App from "./components/App";

// STYLING FOR INLINE
const customStyle = {
  color: "black",
  backgroundColor: "lightgreen",
  border: "1px solid black",
  padding: "10px",
  textAlign: "center"
};

// COMPONENT IN INDEX.JS
function Inline() {
  return <p>Inline Componenet</p>;
}

ReactDOM.render(
  <div style={customStyle}>
    <App />
    <Inline />
  </div>,
  document.getElementById("root")
);
