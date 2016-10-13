import React from "react";
import ReactDOM from 'react-dom';
import {Component} from "react";

class Item extends Component {
  render () {
    var className = 'todo-list__item flex-block';
    var readiness = this.props.elem.readiness;
    if (readiness) {
      className += ' ready ';
    }
    var todoItemUser = userListStore.getUserByKey(this.props.elem.user);

    return (
      <div className={className} ref='item' id={this.props.index} >
        <input type="checkbox" onChange={this.onChangeReadiness} checked={readiness} id={'checkbox-' + this.props.index}/>
        <label htmlFor={'checkbox-' + this.props.index}><span></span></label> 
        <label className='item-text' onClick={this.props.onItemClicked}>{this.props.elem.text}</label>
        <span className='delete-btn' onClick={this.deleteItem}></span>
      </div>
    )
  }
}

export default Item;