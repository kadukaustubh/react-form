import React from 'react'

export default function RadioBtn(props) {
    return (
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label class="form-check-label" for="flexRadioDefault1">
                {props.name}
            </label>
        </div>
    )
}
