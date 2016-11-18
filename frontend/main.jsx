import React from "react"
import ReactDOM from 'react-dom'
import { Component } from "react"

import List from './list.jsx'
import Item from "./item.jsx"
import Filter from './filter.jsx'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import AddTodo from './containers/AddTodo.jsx'
import VisibleTodoList from './containers/VisibleTodoList.jsx'
import Footer from './components/Footer.jsx'

import todoApp from './reducers/reducers.jsx'

import './style.css'

import { addTodo, toggleTodo, deleteTodo, setVisibilityFilter, VisibilityFilters } from './actions/actions.jsx'

let store = createStore(todoApp);

store.subscribe(() =>
  console.log(store.getState())
)

class MainWindow extends Component {
	constructor(props) {
		super(props);

    this.deleteCompleted = this.deleteCompleted.bind(this);
    this.onChangeFilter = this.onChangeFilter.bind(this);
    this.readyAll = this.readyAll.bind(this);


    this.state = {      
      readyAll: false,
      filter: 0,
      activeItems: 0
    };

		this.filters = [
	    {text: "All", value: 0},
	    {text: "Active", value: 1},
	    {text: "Completed", value: -1}
    ];
}


  readyAll(evt) {
    for (var i = 0; i < this.list.length; i++) {
      this.list[i].readiness = !this.state.readyAll;
      store.dispatch(toggleTodo(i)); 
    }
    this.readynessChange(!this.state.readyAll);
    this.dispatchChangeEvent();
  }
  
  readynessChange(readyAll) {  // ???

    this.setState({  
      readyAll: readyAll  
    });  
  }


  deleteCompleted() {
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].readiness) {
        this.list.splice(i, 1);
        store.dispatch(deleteTodo(i));
        i--;
      }
    }
    this.dispatchChangeEvent();
  }

  onChangeFilter(evt) {
    store.dispatch(setVisibilityFilter(evt.target.value));

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

  	var filters = this.filters.map(function(elem, index) {
        return <Filter key={index} text={elem.text} value={elem.value} 
        onFilterChange={this.onChangeFilter}
        currentFilter={this.state.filter}/>;
      }.bind(this));

  	return (
	    	<div className='wrapper'>
          <AddTodo />
          <VisibleTodoList />
          <Footer /> 
	    	</div>
  	)
  }
};

ReactDOM.render(
  <Provider store={store}>
    <MainWindow />
  </Provider>,

  document.getElementById('root')
);