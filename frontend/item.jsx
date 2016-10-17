import React from "react";
import ReactDOM from 'react-dom';
import {Component} from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      readiness: this.props.readiness
    };
  }
  render() {
    var text      = this.props.data.text,
        readiness = this.props.data.readiness;
    var itemID = 'checkbox-' + this.props.index;

    var className = 'todo-list__item flex-block';

    if (readiness) {
      className += ' ready ';
    }

    return (
      <div className={className} id={this.props.index} >
        <input className="changeStateItem" type="checkbox" checked={readiness} id={itemID}/>
        <label htmlFor={itemID}><span></span></label> 
        <input className='itemText'placeholder={text}/>
        <span className='delete-btn'>X</span>
      </div>
    )
  }
}

export default Item;