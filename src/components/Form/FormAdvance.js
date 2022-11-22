import React from "react";
import { useState } from "react";
import Content from "./Content";
import Slider from "./slider";
import RadioBtn from "./RadioBtn";
import Dropdown from "./Dropdown";
import data from "../Data/Data";

import classes from "./Form.modules.css";
const FormAdvance = () => {

  const [paper, setPaper] = useState('');
  const [city, setCity] = useState('');
  const [sub, setSub] = useState('');

  return (
    <div className="container">
      <form action="">
        <div className="control-group">
          <div>
            <select
              name="newspaper"
              className="form-select col-md-3"
              required="True"
              value={paper}
              onChange={(paper) => { setPaper(paper.target.value) }}
            >
              <option value="">Select Newspaper</option>
              {data.papers.map((paper) => (
                <option value={paper.value}>{paper.value}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              name="city"
              className="form-select col-md-3"
              required="True"
              value={city}
              onChange={(city) => { setCity(city.target.value) }}
            >
              <option value="">Select City</option>
              {data.cities.map((city) => (
                <option value={city.value}>{city.value}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              name="sub"
              className="form-select col-md-3"
              required="True"
              value={sub}
              onChange={(sub) => { setSub(sub.target.value) }}
            >
              <option value="">Select User</option>
              {data.UserName.map((sub) => (
                <option value={sub.value}>{sub.value}</option>
              ))}
            </select>
          </div>
          <div className="form-actions">
            <button >Submit</button>
          </div>
        </div>

        <div className="information-container">
          <Slider />
          <div className="form-btn">
            <RadioBtn name="Positive" />
            <RadioBtn name="Negative" />
            <RadioBtn name="Positive/Negative" />
            <Dropdown selected="Select" />
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormAdvance;
