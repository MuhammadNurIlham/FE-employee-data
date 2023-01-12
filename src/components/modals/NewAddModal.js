import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function NewAddModal() {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState(null);

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

    const validateInput = () => {
        let nik = document.getElementById('nik').value
        let name = document.getElementById('name').value
        if (nik === '' || name === '') {
            const ValidationInput = (
                <Alert variant="danger" className="py-1">
                    this field required
                </Alert>
            );
            setMessage(ValidationInput);
        }
    }

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()


    const handleOnChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
        validateInput();
    };

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

                    <Form className="needs-validation" novalidate>

                        <div class="mb-3">
                            <label for="validationDefault01" class="form-label">First name</label>
                            <input type="text" class="form-control" id="validationDefault01" required />
                        </div>

                        <label for="validationCustomUsername" class="form-label">Username</label>
                        <div class="input-group has-validation">
                            <span class="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                            <div class="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                        <Form.Group className="mb-3" controlId="AddModalForm.ControlInput1">
                            {/* <Form.Label>NIK</Form.Label>
                            <Form.Control
                                autoFocus
                                required
                                type="text"
                                name="nik"
                                id="nik"
                                onChange={handleOnChange}
                            />
                            {message && message} */}

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="AddModalForm.ControlInput1">
                            <Form.Label>FullName</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='name'
                                id="name"
                                onChange={handleOnChange}
                            />
                        </Form.Group>
                        {message && message}

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
                                    // onChange={handleOnChange}
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
                                    // onChange={handleOnChange}
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
                            // onChange={handleOnChange}
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
                            // onChange={handleOnChange}
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
                            // onChange={handleOnChange}
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

                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type='submit' onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Form>

                </Modal.Body>

            </Modal>
        </>
    );
}

export default NewAddModal;
// render(<Example />);