import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { API } from '../config/API';
import Form from 'react-bootstrap/Form';
import ButtonGroup from '../atoms/ButtonGroup';
import Table from 'react-bootstrap/esm/Table';
import AddModal from './modals/AddModal';
import { Button } from 'react-bootstrap';

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

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                {/* <ButtonGroup title='Add' /> */}
                <AddModal />
                {/* <ButtonGroup title='Search' /> */}
                <Button className='px-5' onClick={(e) => handleOnSubmit.mutate(e)}>Search</Button>
            </div>

            <div className='table text-center'>
                <Table responsive="md">
                    <thead>
                        <tr className="bg-primary">
                            <th>NIK</th>
                            <th>FullName</th>
                            <th>Age</th>
                            <th>BithDate</th>
                            <th>Gender</th>
                            <th>Address</th>
                            <th>Country</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {filter?.map((item, id) => {

                        return (

                            <tbody key={id}>
                                <tr>
                                    <td>{item?.nik}</td>
                                    <td>{item?.name}</td>
                                    <td>{getAge(item?.birth)} tahun</td>
                                    <td>{item?.gender}</td>
                                    <td>{item?.birth}</td>
                                    <td>{item?.address}</td>
                                    <td>{item?.country}</td>
                                    <td className="d-grid btn-sm gap-2 d-md-flex justify-content-md-end" >
                                        <ButtonGroup title='Detail' />
                                        <ButtonGroup title='Edit' />
                                        <ButtonGroup title='Delete' />
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}

                </Table>
            </div>

        </div >
    );
}

export default FormInput;