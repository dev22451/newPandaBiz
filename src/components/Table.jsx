import * as React from 'react';
import { DataGrid, ColDef } from '@material-ui/data-grid';

const columns: ColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'employee_name', headerName: 'Employee name', width: 200 },
    { field: 'employee_salary', headerName: 'Salary', width: 130 },
    {
        field: 'employee_age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
];

const rows = [
    { id: 1, employee_name: 'Jon', employee_age: 35, employee_salary: 50000 },
];

export default function DataTable(props) {
    const d = props.list.data;
    return (
        <div style={{ height: 400, width: '100%' }}>
            {console.log(d)}
            <DataGrid rows={d} columns={columns} pageSize={5} checkboxSelection />
        </div>
    );
}
