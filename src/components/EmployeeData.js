import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { Button, Form, Table } from 'react-bootstrap';


import { API } from '../config/API';
import AddModal from './modals/AddModal';
import DetailModal from './modals/DetailModal';
import EditModal from './modals/EditModal';
import DeleteModal from './modals/DeleteModal';

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
            <h3 className="text-center py-3">Data Karyawan</h3>
            <div className='row'>
                <div className='col-md-5'>
                    <Form onSubmit={(e) => handleOnSubmit.mutate(e)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='fw-bold'>NIK</Form.Label>
                            <Form.Control
                                placeholder="Insert NIK here ..."
                                type="text"
                                id="nik"
                                name="nik"
                                onChange={handleOnChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className='fw-bold'>Nama</Form.Label>
                            <Form.Control
                                placeholder="Insert Name here ..."
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
                <Button className='px-3 my-2 py-2' onClick={(e) => handleOnSubmit.mutate(e)}>Search</Button>
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
                                        <DetailModal
                                            nik={item?.nik}
                                            name={item?.name}
                                            birth={item?.birth}
                                            age={getAge(item?.birth)}
                                            gender={item?.gender}
                                            address={item?.address}
                                            country={item?.country}

                                        />
                                        <p>_</p>
                                        <EditModal
                                            id={item?.id}
                                            nik={item?.nik}
                                            name={item?.name}
                                            birth={item?.birth}
                                            gender={item?.gender}
                                            address={item?.address}
                                            country={item?.country}
                                        />
                                        <p>_</p>
                                        <DeleteModal
                                            id={item?.id}
                                        />
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