import React from 'react';
import Table from 'react-bootstrap/Table';
import ButtonGroup from '../atoms/ButtonGroup';

function EmployeeTable() {
    return (
        <div className='table text-center'>
            <Table responsive="md">
                <thead>
                    <tr>
                        <th>No.</th>
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
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>123456789000000</td>
                        <td>Lionel Messi</td>
                        <td>23 Years</td>
                        <td>1 January 1987</td>
                        <td>Male</td>
                        <td>Sobang</td>
                        <td>Indonesia</td>
                        <td className="d-grid btn-sm gap-2 d-md-flex justify-content-md-end" >
                            <ButtonGroup title='Detail' />
                            <ButtonGroup title='Edit' />
                            <ButtonGroup title='Delete' />
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>123456789000001</td>
                        <td>C. Ronalado</td>
                        <td>23 Years</td>
                        <td>2 January 1988</td>
                        <td>Male</td>
                        <td>Panimbang</td>
                        <td>Indonesia</td>
                        <td className="d-grid btn-sm gap-2 d-md-flex justify-content-md-end" >
                            <ButtonGroup title='Detail' />
                            <ButtonGroup title='Edit' />
                            <ButtonGroup title='Delete' />
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>123456789000002</td>
                        <td>Neymar Jr</td>
                        <td>23 Years</td>
                        <td>3 January 1989</td>
                        <td>Male</td>
                        <td>Rangkasbitung</td>
                        <td>Indonesia</td>
                        <td className="d-grid btn-sm gap-2 d-md-flex justify-content-md-end" >
                            <ButtonGroup title='Detail' />
                            <ButtonGroup title='Edit' />
                            <ButtonGroup title='Delete' />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default EmployeeTable;