import * as React from 'react';

export default function DataTable(props) {
    return (
        <div className="row">
            <div className="container">
                <div className="col-md-6 offset-md-3">
                    <div class="table-responsive mt-5">
                        <table class="table table-sm table-hover caption-top">
                            {/* <caption className="text-center text-dark -primary lead">List of users</caption> */}
                            <thead className="table-dark">
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
                                        <tr key={s.id} className="table-border table-primary">
                                            <th scope="row text-center">{s.id}</th>
                                            <td>{s.employee_name}</td>
                                            <td>{s.employee_salary}</td>
                                            <td>{s.employee_age}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

