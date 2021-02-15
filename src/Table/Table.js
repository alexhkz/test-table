import React from 'react';

const Table = (props) => ( // make our table
	<table className="table"> 
		<thead> 
			<tr>
				<th onClick={props.onSort.bind(null, 'id')}>
					ID{props.sortColumn === 'id' ? <small>{props.sort}</small> : null}</th> 
				<th onClick={props.onSort.bind(null, 'firstName')}>
					First Name {props.sortColumn === 'firstName' ? <small>{props.sort}</small> : null}</th>
				<th onClick={props.onSort.bind(null, 'lastName')}>
					Last Name {props.sortColumn === 'lastName' ? <small>{props.sort}</small> : null}</th>
				<th onClick={props.onSort.bind(null, 'email')}>
					E-mail {props.sortColumn === 'email' ? <small>{props.sort}</small> : null}</th>
				<th onClick={props.onSort.bind(null, 'phone')}>
					Phone {props.sortColumn === 'phone' ? <small>{props.sort}</small> : null}</th>
			</tr>
		</thead>
		<tbody>
			{ props.data.map(item =>( // our data here
					<tr key={item.id + item.phone} onClick={props.onRowSelect.bind(null, item)}>
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