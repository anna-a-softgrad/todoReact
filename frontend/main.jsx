import React from "react";
import ReactDOM from 'react-dom';
import {Component} from "react";

import List from './list.jsx';
import Item from "./item.jsx";
import Filter from './filter.jsx';

import './style.css';


class MainWindow extends Component {
	constructor(props) {
		super(props);
		this.onAdd = this.onAdd.bind(this);

		this.filters = [
	        {text: "All", value: 0},
	        {text: "Active", value: 1},
	        {text: "Completed", value: -1}
      	];
      	this.state = {
	        filter: 0
      };
  	}

	onAdd(evt) {
	  if (evt.keyCode != 13) {
        return;
      }
      // add to List
	  var dict = {text: evt.target.value, readiness: false};
      evt.target.value = '';   
      
      ReactDOM.render(
        <div key={5}>
            <Item key={5} data={dict} index={5}/>
          </div>,
        document.getElementById('beforeFirstItem') 
      );

	  //painting
  	}

	addItemMethod(dict) {
		//     
      ReactDOM.render(
        <div key={5}>
            <Item key={5} data={dict} index={5}/>
          </div>,
        document.getElementById('beforeFirstItem') 
      );
	}


  render() {
  	var activeItems = 0;
  	var filters = this.filters.map(function(elem, index) {
        return <Filter key={index} text={elem.text} value={elem.value} onFilterChange={this.onChangeFilter}
        currentFilter={this.state.filter}/>;
      }.bind(this));
  	
  	return (
	    	<div className='wrapper'>
	    		<div className='main-header flex-block'>
          		<input 
          			className='todo-list__input' 
          			type='text' 
          			id='usertext' 
          			ref='list'
          			onKeyUp={this.onAdd}
          			placeholder="What needs to be done?"/>
          		<input type="checkbox" name="checkAllItems" className="changeStateItem"/>
        		</div>

	      	<List addItemMethod={this.addItemMethod}/> 

	      	<div className='footer'>
	      		<label>{activeItems} items left</label>
          		<div className='filters'>
          			{filters}
          		</div>
          		<button>Clear completed</button>
        		</div>
	    	</div>
  	)
  }
};

ReactDOM.render(
  <MainWindow />,
  document.getElementById('root')
);