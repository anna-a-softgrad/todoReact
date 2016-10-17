import React from "react";
import {Component} from "react";

import Item from "./item.jsx";

var todoList = [
   {text: '1', readiness: false },
   {text: '2', readiness: false },
   {text: '3', readiness: false},
   {text: '4', readiness: false}
  ];

class List extends Component {
  constructor(props) {
    super(props);
    this.listInfo = todoList;
  }

  addItemMethod(dict) {
    this.listInfo.unshift(dict);   
  }

  render() {
    var listTemplate;
    //changeItemMethod = this.state.changeItemMethod;

    listTemplate = this.listInfo.map(function(item, index) {
      return (
        <div key={index}>
          <Item key={index} data={item} index={index}/>
        </div>
      )
    })

    return (
      <div className='item-container'>
        <div id='beforeFirstItem'>
          {listTemplate}
        </div>    
      </div>    
    )
  }
}

export default List;