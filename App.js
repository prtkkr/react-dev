import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "React Dev 🚀");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX
const Title = () => {
  return (
    <>
      <h1 className="heading" tabIndex="5">
        React Dev using JSX 🚀
      </h1>
    </>
  );
};

// React Functional Components
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      {Title()}
      <Title></Title>
      <h2 className="head">React Functional Component</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
