import React from "react";

const name = "jonty";

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

function Heading() {
  return (
    <div>
      <h1>hello {name}</h1>
      <h5>{greeting}</h5>
    </div>
  );
}

export default Heading;
