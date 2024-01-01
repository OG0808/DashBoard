import React from "react";
import "./losader.css";
const Loader = () => {
  return (
    <div class="wrapper">
      <div class="cloud">
        <div class="cloud_left"></div>
        <div class="cloud_right"></div>
      </div>
      <div class="rain">
        <div class="drop"></div>
        <div class="drop"></div>
        <div class="drop"></div>
        <div class="drop"></div>
        <div class="drop"></div>
      </div>
      <div class="surface">
        <div class="hit"></div>
        <div class="hit"></div>
        <div class="hit"></div>
        <div class="hit"></div>
        <div class="hit"></div>
      </div>
    </div>
  );
};

export default Loader;
