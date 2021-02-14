import React from 'react';

const Table = (props) => ( // make our table
    <table className="table"> 
        <thead> 
            <tr>
                <th onClick={props.onSort.bind(null, 'id')}>ID</th> 
                <th onClick={props.onSort.bind(null, 'firstName')}>First Name</th>
                <th onClick={props.onSort.bind(null, 'lastName')}>Last Name</th>
                <th onClick={props.onSort.bind(null, 'email')}>E-mail</th>
                <th onClick={props.onSort.bind(null, 'phone')}>Phone</th>
            </tr>
        </thead>
        <tbody>
            { props.data.map(item =>( // our data here
                <tr key={item.id + item.phone}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
            ))}
        </tbody>
    </table>
)

export default Table;