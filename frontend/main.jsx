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
    this.readyAll = this.readyAll.bind(this);

    this.state = {      
      activeItems: 0
    };
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

  render() {
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