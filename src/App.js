import React, {Component} from 'react';
import Preloader from './Preloader/Preloader';
import Table from './Table/Table';
import _ from 'lodash'; // for sorting
import DetailView from './DetailView/DetailView';
import ModeSelector from './ModeSelector/ModeSelector';
import ReactPaginate from 'react-paginate';

class App extends Component {

	state ={ // make state
		isModeSelected: false,
		isLoading: false,
		data: [],
		sort: 'asc',
    	sortColumn: 'id',
		row: null,
		currentPage: 0
	 }

	async fetchData(url) {  // make response to server
		const response = await fetch(url)
		const data = await response.json()  //return our data 
			this.setState({
				isLoading: false,
				data: _.orderBy(data, this.state.sortField, this.state.sort) 
			})
	}

	onSort = (sortColumn) => {
	
		const cloneData = this.state.data.concat(); // copy of our massive
		const sort = this.state.sort === 'asc' ? 'desc' : 'asc';
		const data = _.orderBy(cloneData, sortColumn, sort); // sort method (copy massive, sorted field, direction)

		this.setState({
			data,
			sort,
			sortColumn
		})
	}

	onRowSelect = (row) => (
		this.setState({row})
	)

	modeSelectHandler = (url) => {
		// console.log(url)
		this.setState({
		  isModeSelected: true,
		  isLoading: true,
		})
		this.fetchData(url)
	 }

	 pageChangeHandler = ({selected}) => (
		this.setState({currentPage: selected})
	 )

	render() {
		const pageSize = 50;
		if(!this.state.isModeSelected){
			return (
			  <div className="container">
				 <ModeSelector onSelect={this.modeSelectHandler} />
			  </div>
			)
		}
		const displayData = _.chunk(this.state.data, pageSize)[this.state.currentPage] // lodash method _.chunk

		return ( 
			<div className = "container" >
				{
				this.state.isLoading 
					? <Preloader />
					: <Table 
							data={displayData} 
							onSort={this.onSort} 
							sort={this.state.sort} 
							sortColumn={this.state.sortColumn} 
							onRowSelect={this.onRowSelect} />
				}
				{
				this.state.data.length > pageSize
					? <ReactPaginate
							previousLabel={'<'}
							nextLabel={'>'}
							breakLabel={'...'}
							breakClassName={'break-me'}
							pageCount={20}
							marginPagesDisplayed={2}
							pageRangeDisplayed={5}
							onPageChange={this.pageChangeHandler}
							containerClassName={'pagination'}
							activeClassName={'active'}
							pageClassName="page-item"
							pageLinkClassName="page-link"
							previousClassName="page-item"
							nextClassName="page-item"
							previousLinkClassName="page-link"
							nextLinkClassName="page-link"
							forcePage={this.state.currentPage}
					/> : null
				}
				{
					this.state.row ? <DetailView person={this.state.row} /> : null
				}
			</div>
		);
	}
}

export default App;