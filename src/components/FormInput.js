import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { API } from '../config/API';
import Form from 'react-bootstrap/Form';

function FormInput() {
    const [filter, setFilter] = useState([]);
    const [form, setForm] = useState({
        nik: "",
        name: "",
    });

    let { data: employee, refetch } = useQuery("employeeCache", async () => {
        const response = await API.get("/karyawan")
        setFilter(response.data)
        return response.data;
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
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const body = JSON.stringify(form);
            const response = await API.post("/karyawan/search", body, config);
            console.log("ini response post search", response)

            if (response.status === 200) {
                setFilter(response.data)
            }

        } catch (error) {
            console.log(error);
        }
    });

    function getAge(dateString) {
        let today = new Date();
        let birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }


    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-5'>
                    <Form onSubmit={(e) => handleOnSubmit.mutate(e)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='fw-bold'>NIK</Form.Label>
                            <Form.Control
                                placeholder="Masukkan NIK Anda"
                                type="text"
                                id="nik"
                                name="nik"
                                onChange={handleOnChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className='fw-bold'>Nama</Form.Label>
                            <Form.Control 
                            placeholder="Masukkan Nama Anda"
                            type="text" 
                            id="name"
                            name="name"
                            onChange={handleOnChange}
                             />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default FormInput;