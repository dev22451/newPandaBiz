import * as React from 'react';



export default function DataTable(props) {
    return (
        <div style={{ width: '100%' }}>
            <table class="table table-sm table-hover table-bordered border-dark">
                <thead className="table-light">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Employee</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.item.data && props.item.data.map((s, index) => (
                            <tr key={s.id} className="todolist">

                                <th scope="row">{s.id}</th>
                                <td>{s.employee_name}</td>
                                <td>{s.employee_salary}</td>
                                <td>{s.employee_age}</td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>


        </div>
    );
}

