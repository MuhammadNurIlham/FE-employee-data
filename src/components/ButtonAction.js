import React from 'react'
import ButtonGroup from '../atoms/ButtonGroup'
import AddModal from './modals/AddModal'

function ButtonAction() {
    return (
        <div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                {/* <ButtonGroup title='Add' /> */}
                <AddModal />
                <ButtonGroup title='Search' />
            </div>
        </div>
    )
}

export default ButtonAction