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

    this.deleteCompleted = this.deleteCompleted.bind(this);
    this.onChildChanged = this.onChildChanged.bind(this);
    this.dispatchChangeEvent = this.dispatchChangeEvent.bind(this);
    this.onChangeFilter = this.onChangeFilter.bind(this);
    this.readyAll = this.readyAll.bind(this);

    this.state = {      
      listInfo: [],
      readyAll: false,
      filter: 0,
      activeItems: 0
    };

    this.list = [
      {text: '1', readiness: false },
      {text: '2', readiness: false },
      {text: '3', readiness: false},
      {text: '4', readiness: false}
    ]

		this.onAdd = this.onAdd.bind(this);

		this.filters = [
	    {text: "All", value: 0},
	    {text: "Active", value: 1},
	    {text: "Completed", value: -1}
    ];
}

	onAdd(evt) {
	  if (evt.keyCode != 13) {
        return;
      }
      // add to List
	  var dict = {text: evt.target.value, readiness: false};
    evt.target.value = '';   
    this.list.unshift(dict);

    this.dispatchChangeEvent();
  }

  readyAll(evt) {
    for (var i = 0; i < this.list.length; i++) {
      this.list[i].readiness = !this.state.readyAll;
    }
    this.readynessChange(!this.state.readyAll);
    this.dispatchChangeEvent();
  }
  
  readynessChange(readyAll) {  
    this.setState({  
      readyAll: readyAll  
    });  
  }

  onChildChanged(event, id, prop) {
    switch(event) {
      case 'delete':
        this.list.splice(id, 1);
        break;
      case 'edit':
        this.list[id][prop.property] = prop.value;
        break;
      default:
        return;
    }
    this.dispatchChangeEvent();
  }

  deleteCompleted() {
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].readiness) {
        this.list.splice(i, 1);
        i--;
      }
    }
    this.dispatchChangeEvent();
  }

  onChangeFilter(evt) {
    this.setState({
      filter: evt.target.value,
      listInfo: this.list
    })
  }

  dispatchChangeEvent() {
    this.setState({
      listInfo: this.list
    })
  }

  render() {
  	var activeItems = 0,
        listInfo = this.list;

    for(var i = 0; i < listInfo.length; i++) {      
      if(this.state.readyAll == true) {
        listInfo[i].readiness = true
      }

      if (listInfo[i].readiness == false) {
          activeItems++;    
      }
    }

  	var filters = this.filters.map(function(elem, index) {
        return <Filter key={index} text={elem.text} value={elem.value} 
        onFilterChange={this.onChangeFilter}
        currentFilter={this.state.filter}/>;
      }.bind(this));

    var listTemplate = listInfo.map(function(item, index) {
      if (this.state.filter < 0 && !item.readiness || this.state.filter > 0 && item.readiness)
            return;

      return (
        <div key={index}>
          <Item key={index} onItemChanged={this.onChildChanged} data={item} index={index}/>
        </div>
      )
    }.bind(this))
  	
  	return (
	    	<div className='wrapper'>
	    		<div className='main-header flex-block'>
            <input type="checkbox" className="changeStateItem" onClick={this.readyAll}/>
            <input 
            	className='todo-list__input' 
            	type='text' 
            	id='usertext' 
            	ref='list'
            	onKeyUp={this.onAdd}
            	placeholder="What needs to be done?"/>            
        	</div>

          <List>
            {listTemplate}
          </List>

	      	<div className='footer'>
	      		<label>{activeItems} items left</label>
          		<div className='filters'>
          			{filters}
          		</div>
          		<button onClick={this.deleteCompleted}>Clear completed</button>
        		</div>
	    	</div>
  	)
  }
};

ReactDOM.render(
  <MainWindow />,
  document.getElementById('root')
);