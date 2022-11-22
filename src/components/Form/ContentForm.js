import React from 'react'

export default function ContentForm(props) {
    return (
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label class="form-check-label" for="flexRadioDefault1">
                {props.radio}
            </label>
            <select class="form-select" aria-label="Default select example">
                <option selected>Select option</option>
                <option>{props.option}</option>
            </select>
        </div>
    )
}
