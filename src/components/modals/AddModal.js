import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useMutation } from 'react-query';
import { API } from '../../config/API';
// import RadioButton from '../../atoms/RadioButton';

function AddModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [form, setForm] = useState({
        nik: "",
        name: "",
        gender: "",
        birth: "",
        address: "",
        country: ""
    });

    const handleOnChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();

            await API.post('/karyawan', form);
            alert('add data success');
        } catch (error) {
            console.log(error);
            alert('add data failed');
        }
    })

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
                    <Form onSubmit={(e) => handleOnSubmit.mutate(e)}>

                        <Form.Group className="mb-3" controlId="AddModalForm.ControlInput1">
                            <Form.Label>NIK</Form.Label>
                            <Form.Control
                                autoFocus
                                required
                                type="text"
                                name="nik"
                                onChange={handleOnChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="AddModalForm.ControlInput1">
                            <Form.Label>FullName</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='name'
                                onChange={handleOnChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="AddModalForm.ControlInput1">
                            <Form.Label>Gender</Form.Label>
                            {/* <RadioButton /> */}
                            <div className='d-grid gap-2 d-md-flex justify-content-md-start'>

                                <div className="form-check form-check-inline">
                                    <input
                                        required
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="male"
                                        value="male"
                                        onChange={handleOnChange}
                                    />
                                    <label className="form-check-label" for="male">Male</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input
                                        required
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="female"
                                        value="female"
                                        onChange={handleOnChange}
                                    />
                                    <label className="form-check-label" for="female">Female</label>
                                </div>

                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="AddModalForm.ControlInput1">
                            <Form.Label>Birth Date</Form.Label>{" "}
                            <input
                                required
                                type='date'
                                id='date'
                                name='birth'
                                onChange={handleOnChange}
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                required
                                type='text'
                                name='address'
                                onChange={handleOnChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="AddModalForm.ControlInput1">
                            <Form.Label>Country</Form.Label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                required
                                name='country'
                                id='country'
                                onChange={handleOnChange}
                            >
                                <option selected disabled>Choose Country</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Jepang">Jepang</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Korea Selatan">Korea Selatan</option>
                                <option value="Rusia">Rusia</option>
                                <option value="Eropa">Eropa</option>
                                <option value="China">China</option>
                            </select>
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>

                    <Button
                        variant="primary"
                        onClick={(e) => {
                            handleClose()
                            handleOnSubmit.mutate(e)
                        }}>Save
                    </Button>

                    <Button variant="danger" onClick={handleClose}>
                        Cancel
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddModal;
// render(<Example />);