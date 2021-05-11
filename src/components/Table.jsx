import * as React from 'react';

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="row" >
            <div className="container">
                <div className="col-md-6 offset-md-3">
                    <div className="table-responsive mt-5">
                        <table className="table table-sm table-bordered border-dark caption-top">
                            <caption className="text-center text-dark -primary lead">List of users</caption>
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
                                    posts && posts.map((s, index) => (
                                        <tr key={s.id} className="table-border">
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
        </div >
    );
}

export default Posts;