import React from "react";
import './menu.css'
import useDarkmode from "../../store/useDarkmode";
const Menu = () => {
const {setOpenMenu}= useDarkmode()
  return (
    <div>
      <input onClick={setOpenMenu} type="checkbox" id="checkbox" />
      <label for="checkbox" className="toggle">
        <div className="bar bar--top"></div>
        <div className="bar bar--middle"></div>
        <div className="bar bar--bottom"></div>
      </label>
    </div>
  );
};

export default Menu;
