import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import RadioButton from '../../atoms/RadioButton';

function AddModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Data
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="AddModalForm.ControlInput1">
                            <Form.Label>NIK</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="AddModalForm.ControlInput1">
                            <Form.Label>FullName</Form.Label>
                            <Form.Control
                                type="text"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="AddModalForm.ControlInput1">
                            <Form.Label>Gender</Form.Label>
                            <RadioButton />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="AddModalForm.ControlInput1">
                            <Form.Label>Birth Date</Form.Label>{" "}
                            <input type='date' />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="AddModalForm.ControlInput1">
                            <Form.Label>Country</Form.Label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Choose Country</option>
                                <option value="1">Indonesia</option>
                                <option value="2">Malaysia</option>
                                <option value="3">Singapore</option>
                            </select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddModal;
// render(<Example />);