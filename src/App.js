import React, {Component} from 'react';
import Preloader from './Preloader/Preloader';
import Table from './Table/Table';
import _ from 'lodash'; // for sorting

class App extends Component {

	state ={ // make state
		isLoading: true,
		data: [],
		sort: 'asc',
    	sortColumn: 'id'
	 }

	async componentDidMount() {  // make response to server
		const response = await fetch(`http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
		const data = await response.json()  //return our data 
			this.setState({
				isLoading: false,
				data 
			})
	}

	 onSort = sortColumn => {
    
		const cloneData = this.state.data.concat(); // copy of our massive
		const sortType = this.state.sort === 'asc' ? 'desc' : 'asc';
		const orderedData = _.orderBy(cloneData, sortColumn, sortType); // sort method (copy massive, sorted field, direction)
  
		this.setState({
		  data: orderedData,
		  sort: sortType,
		  sortColumn
		})
	 }

	render() {
		return ( 
			<div className = "container" >
				{
					this.state.isLoading 
						? <Preloader />
						: <Table data={this.state.data} onSort={this.onSort} />
					}
			</div>
		);
	}
}

export default App;