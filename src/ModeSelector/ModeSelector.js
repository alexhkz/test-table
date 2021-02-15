import React from 'react';

const ModeSelector = (props) =>{
    
	const smallData = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
   const bigData = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
    
	return ( // take classes from bootstrap
		<div style={{display:'flex', justifyContent:'center', padding: '400px 500px', width: '100px'}}>
			<button onClick={()=>props.onSelect(smallData)} className="btn btn-primary">32 элемента</button> 
			<button onClick={()=>props.onSelect(bigData)} className="btn btn-success">1000 элементов</button>
		</div>
	)
}

export default ModeSelector;