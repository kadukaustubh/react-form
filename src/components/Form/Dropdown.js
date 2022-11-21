import React from 'react'

export default function Dropdown(props) {
    return (
        <div>
            <select class="form-select" aria-label="Default select example">
                <option selected>{props.selected}</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    )
}
