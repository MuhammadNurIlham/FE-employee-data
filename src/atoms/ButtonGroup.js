import React from 'react'

function ButtonGroup(props) {
  return (
    <div className='button-group'>
        <button class="btn btn-primary" type="button">{props.title}</button>
    </div>
  )
}

export default ButtonGroup