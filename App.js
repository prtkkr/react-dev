import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading", abc: "xyz" },
//   "Hello World from React!"
// );

// Nested HTML using React
const parent = React.createElement("div", {}, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is React Dev 🚀"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is Second React Dev"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),
]);

// console.log(heading); // returns an object
// console.log(parent); // returns an object

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);

root.render(parent);
