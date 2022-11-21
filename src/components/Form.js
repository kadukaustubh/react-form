import React from "react";
import useInput from "../hooks/use-input";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form2 from "./Form";
import data from "./Data/Data.js";

const isNotEmpty = (value) => value.trim() !== "";
const imageIsNotEmpty = (value) => value.length !== 0;

export default function Form1() {
  const {
    value: PaperName,
    isValid: PaperIsValid,
    hasError: PaperhasError,
    valueChangeHandler: PaperChangeHandler,
    inputBlurHandler: PaperBlurhandler,
  } = useInput(isNotEmpty);

  const {
    value: CityName,
    isValid: CityIsValid,
    hasError: CityhasError,
    valueChangeHandler: CityChangeHandler,
    inputBlurHandler: CityBlurhandler,
  } = useInput(isNotEmpty);

  const {
    value: subName,
    isValid: subIsValid,
    hasError: SubhasError,
    valueChangeHandler: subChangeHandler,
    inputBlurHandler: SubBlurhandler,
  } = useInput(isNotEmpty);

  const {
    value: imageName,
    isValid: imageIsValid,
    hasError: ImagehasError,
    valueChangeHandler: ImageChangeHandler,
    inputBlurHandler: ImageBlurhandler,
  } = useInput(imageIsNotEmpty);

  let formIsvalid = false;
  if (PaperIsValid && CityIsValid && subIsValid && imageIsValid) {
    formIsvalid = true;
  }

  const paperNameClasses = PaperhasError
    ? "form-control invalid"
    : "form-control";
  const CityNameClasses = CityhasError
    ? "form-control invalid"
    : "form-control";
  const SubNameClasses = SubhasError ? "form-control invalid" : "form-control";

  const imageNameClasses = ImagehasError
    ? "form-control invalid"
    : "form-control";

  const [imgfile, uploadimg] = useState([]);
  console.log("Image Files", imgfile);
  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      uploadimg((imgfile) => [
        ...imgfile,
        URL.createObjectURL(e.target.files[0]),
      ]);
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!formIsvalid) {
      return;
    }
  };

  return (
    <section className="app">
      <form onSubmit={formSubmissionHandler}>
        <div className="control-group">
          <div className={paperNameClasses}>
            <label htmlFor="name">News paper name</label>
            <select
              name="newspaper"
              className="form-select col-md-3"
              required="True"
              value={PaperName}
              onChange={PaperChangeHandler}
              onBlur={PaperBlurhandler}
            >
              <option value="">Select Newspaper</option>
              {data.papers.map((paper) => (
                <option value={paper.value}>{paper.value}</option>
              ))}
            </select>
            {PaperhasError && <p className={"error-text"}>Please select</p>}
          </div>
          <div className={CityNameClasses}>
            <label htmlFor="name">City</label>
            <select
              name="city"
              className="form-select col-md-3"
              required="True"
              value={CityName}
              onChange={CityChangeHandler}
              onBlur={CityBlurhandler}
            >
              <option value="">Select City</option>
              {data.cities.map((city) => (
                <option value={city.value}>{city.value}</option>
              ))}
            </select>
            {CityhasError && <p className={"error-text"}>Please select</p>}
          </div>
          <div className={SubNameClasses}>
            <label htmlFor="name">Sub</label>
            <select
              name="sub"
              className="form-select col-md-3"
              required="True"
              value={subName}
              onChange={subChangeHandler}
              onBlur={SubBlurhandler}
            >
              <option value="">Select User</option>
              {data.UserName.map((sub) => (
                <option value={sub.value}>{sub.value}</option>
              ))}
            </select>
            {SubhasError && <p className={"error-text"}>Please select</p>}
          </div>
          <div className={imageNameClasses}>
            <label htmlFor="name">Upload image</label>
            <input
              type="file"
              onChange={(imgFilehandler, ImageChangeHandler)}
              value={imageName}
              onBlur={ImageBlurhandler}
            />
            {ImagehasError && <p className={"error-text"}>Please select</p>}
          </div>
        </div>
        <div className="form-actions">
          <button disabled={!formIsvalid}>Submit</button>
        </div>
      </form>
      <BrowserRouter>
        <Routes>
          <Route path="form2" element={<Form2 />}></Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
}
