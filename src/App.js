import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';

{/* Initiated the state for storing the user data and the UI data. */}
class App extends Component {   
  state = {
    items:[],
    currentItem:{
      text:'',
      key:''
    }
  }

  
  handleInput = e => {
      {/* handleInput is the callback function that takes care of updating the state and the updated value passes through addItem.
    addItem acts as respective handler that pass values as a prop. Create handleInput and addItem to handle the form logic.
    The render method renders the input field and button required for To-Do-List*/}
    this.setState({
      currentItem: { text: e.target.value, key: Math.random()}
    })
  }
  
  addItem = e => {
     {/* e.preventDefault() prevents the page from being refreshed on form submission. */}
    e.preventDefault(); 
    const newItem = this.state.currentItem;
    if(newItem.text!=="") { {/* Check newItem.text is not Empty*/}
      const newItems=[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }

  deleteItem = key => {
      {/* filter items by condition that key doesn't match item.key and stored it in filterItem variable and update state */}
    const filterItem = this.state.items.filter(item =>
      item.key!==key);
      this.setState({
        items:filterItem
      })
  }

  setUpdate = (text, key) => {
    const items = this.state.items;
    items.map(item =>{
      if(item.key===key){
        item.text=text;
      }
    })
    this.setState({
      items: items
    })
  } 

  render() {
    return (
      <div>
          {/* Header */}

          <div className="box" id="heading">
            <h1> To-Do-List </h1>
          </div>

          {/* To-Do-Add Item Field */}

          <div className="box">
            { /* Without addItem method, can't add item to the ListItem component */}
            
            <form id="to-do-form" className="item" onSubmit={this.addItem}>
               
               { /* Without handleInput method, nothing will happen inside input box when we type */} 
   
              <input type="text" placeholder="What needs to be done?"
                className="text1" 
                value={this.state.currentItem.text} 
                onChange={this.handleInput}      
              />

              <button className="btnadd"type="submit">Add</button>
            </form>

            {/* To-Do-List Item Box */}

            { /* Pass the list items as props into ListItem Component, 
            pass key through defined deleteItem function,
            pass key, value through setUpdate function */}

            <ListItem items= {this.state.items} 
            deleteItem ={this.deleteItem} 
            setUpdate = {this.setUpdate}
            /> 

                {/* Filter Todo list items */}

            <div className='filter-container'> Filters:
              <input type='radio' name='filter' id='allFilter' className='filter-input' />
              <label for='allFilter' className='filter-label'>All</label>

              <input type='radio' name='filter' id='activeFilter' className='filter-input' />
              <label for='activeFilter' className='filter-label'>Active</label>

              <input type='radio' name='filter' id='completedFilter' className='filter-input' />
              <label for='completedFilter' className='filter-label'>Completed</label>
            </div>
          </div>

          
      </div>
    );
  }
}

export default App;
