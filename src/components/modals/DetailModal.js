import React, { useState } from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import { API } from '../../config/API';
import { useQuery } from 'react-query'

import { AiFillIdcard } from "react-icons/ai";

function DetailModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // let { data } = useQuery("dataDetail", async () => {
    //   const response = await API.get("/data/" + props?.nik);
    //   return response.data;
    // });

    return (
        <>
            <Button variant="success" onClick={handleShow} className="mx-2">
                Detail
            </Button>

            <Modal show={show} onHide={handleClose}>
                <div className='d-flex flex-row mb-3'>
                    <AiFillIdcard style={{ fontSize: "50" }} className="mx-2" />
                    <h4 className='mt-2 ms-3'>Employee Data</h4>
                </div>
                <Modal.Body>
                    <Form>
                        <Form.Group className="d-flex flex-column mb-3">
                            <Form.Label>NIK : {props?.nik}</Form.Label>
                            <Form.Label>Nama : {props?.name}</Form.Label>
                            <Form.Label>Umur : {props?.age} tahun</Form.Label>
                            <Form.Label>Jenis Kelamin : {props?.gender}</Form.Label>
                            <Form.Label>Tanggal lahir : {props?.birth}</Form.Label>
                            <Form.Label>Alamat : {props?.address}</Form.Label>
                            <Form.Label>kewarganegaraan : {props?.country}</Form.Label>

                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DetailModal