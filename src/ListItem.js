import React from 'react';
import './index.css';

const ListItem = ({items, deleteItem, setUpdate}) => {
	{ /* Get items from App Component and stored it in a listItems variable */}
	{ /* For editmode put listed items inside input field with id for uniquely identify specific one. */}
	{ /* setUpdate function pass value and key value as a parameteres*/}
	
	{ /* const items = props.items; */ } 


	const listItems = items.map(item => { 
		return <div className="item" key={item.key}>
			    <input type="checkbox" />
			    <p> 
			    	<input type="text"
			    	className="text2" 
			    	id={item.key} 
			    	value={item.text} 
			    	onChange ={
			    		(e) => {
			    			setUpdate(e.target.value, item.key)
			    		}
			    	}
			    	/> 
			    </p>
			    <button className="btnd"type="submit" onClick={ () => deleteItem(item.key)}>
			    	Delete
			    </button>
		       </div>
	})
	return(
		<div> { listItems } </div>
	)
}

export default ListItem