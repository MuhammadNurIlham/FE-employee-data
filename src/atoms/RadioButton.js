import React from 'react'

function RadioButton() {
    return (
        <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label class="form-check-label" for="inlineRadio1">Male</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label class="form-check-label" for="inlineRadio2">Female</label>
            </div>
        </div>
    )
}

export default RadioButton