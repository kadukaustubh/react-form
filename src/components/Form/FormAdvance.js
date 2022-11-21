import React from "react";
import Content from "./Content";
import Slider from "./slider";
import RadioBtn from "./RadioBtn";
import Dropdown from "./Dropdown";

import classes from "./Form.modules.css";
const FormAdvance = () => {
  return (
    <div className="container">
      <form action="">
        <div className="user-details">
          <div className="headers">
            <h3>News paper name</h3>
          </div>
          <div className="headers">
            <h3>City</h3>
          </div>
          <div className="headers">
            <h3>Sub</h3>
          </div>
        </div>
        <div className="information-container">
          <Slider />
          <div className="form-btn">
            <RadioBtn name="Positive" />
            <RadioBtn name="Negative" />
            <RadioBtn name="Positive/Negative" />
            <Dropdown selected="Select" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormAdvance;
