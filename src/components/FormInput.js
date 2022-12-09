import Form from 'react-bootstrap/Form';

function FormInput() {
    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-5'>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='fw-bold'>NIK</Form.Label>
                            <Form.Control type="text" placeholder="Masukkan NIK Anda" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className='fw-bold'>Nama</Form.Label>
                            <Form.Control type="text" placeholder="Masukkan Nama Anda" />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default FormInput;