import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { API } from '../../config/API';


function DeleteModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let handleDelete = async () => {
        await API.delete("/karyawan/" + props?.id);
        alert("berhasil hapus data")
    };

    return (
        <>
            <Button variant="danger" onClick={handleShow} className="mx-2">
                Delete
            </Button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Title className='mx-5 my-5'>Anda Yakin Menghapus data ke {props?.id} ?</Modal.Title>

                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={() => {
                            handleClose()
                            handleDelete()
                        }
                        }>
                        Oke
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Batal
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteModal