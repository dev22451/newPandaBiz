import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="row" >
            <div className="container">
                <div className="col-md-6 offset-md-3">
                    <nav>
                        <ul className="pagination">
                            {
                                pageNumbers.map(number => (
                                    <li key={number} className="page-item">
                                        <a href="#" className="page-link" onClick={() => paginate(number)}>
                                            {number}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
