import React, { Component, useState } from "react";
import "../styles/App.css";

const App = (props) => {
  let [para, setpara] = useState(false);
  const renderPargraph = () => {
    setpara(!para);
  };
  return (
    <div id="main">
      {/* Do not remove this main div!! */}
      <button id="click" onClick={renderPargraph}>
        Click me
      </button>
      {para ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ) : null}
    </div>
  );
};

export default App;
