import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useMutation } from 'react-query';
import { API } from '../../config/API';
// import RadioButton from '../../atoms/RadioButton';

function AddModal() {
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

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
        if (form.nik.length == 0 || form.name.length == 0) {
            setError(true);
        }
    };

    const handleOnSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();

            if (form.nik.length == 0 || form.name.length == 0) {
                setError(true);
            } else {

                await API.post('/karyawan', form);
                <Alert variant="success" className="py-1">
                    Add data success!
                </Alert>
                handleClose();
            }

        } catch (error) {
            console.log(error);
            <Alert variant="danger" className="py-1">
                Oops! Something went wrong!
            </Alert>
        }
    })

    return (
        <>
            <Button variant="primary" className='px-3 my-2 py-2' onClick={handleShow}>
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
                            {error && form.nik.length <= 0 ?
                                <Form.Label className="text-danger">Field NIK is required, can't empty</Form.Label>
                                : ""
                            }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="AddModalForm.ControlInput1">
                            <Form.Label>FullName</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='name'
                                onChange={handleOnChange}
                            />
                            {error && form.name.length <= 0 ?
                                <Form.Label className="text-danger">Field Full name is required, can't empty</Form.Label>
                                : ""
                            }
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
                            error ? setError(true) :
                            handleOnSubmit.mutate(e)
                            handleClose()
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