import React from "react";

const number = 23;

function Paragraph() {
  return (
    <div>
      <p>Your lucky number is {number}</p>
      <p>Your favourite number is {4 + 4}</p>
      <p>copyright {new Date().getFullYear()}</p>
    </div>
  );
}

export default Paragraph;
