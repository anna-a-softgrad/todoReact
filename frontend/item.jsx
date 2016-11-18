import React from "react";
import ReactDOM from 'react-dom';
import {Component} from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.onChangeReadiness = this.onChangeReadiness.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.state = {
      readiness: this.props.readiness
    };
  }

  onChangeReadiness(event) {
    var val = event.target.checked;
    this.setState({readiness: val});
    this.props.onItemChanged('edit', this.props.index, {property: 'readiness', value: val});
  }

  onDelete(event) {
    this.props.onItemChanged('delete', this.props.index);
  }

  render() {
    var text      = this.props.data.text,
        readiness = this.props.data.readiness;

    var className = 'todo-list__item flex-block';

    if (readiness) {
      className += ' ready ';
    }

    return (
      <div className={className} id={this.props.index} >
        <input 
          className="changeStateItem" 
          onChange={this.onChangeReadiness} 
          type="checkbox" 
          checked={readiness} 
          id={'checkbox-' + this.props.index}
        />
        <label htmlFor={'checkbox-' + this.props.index} ><span></span></label> 
        <input className='itemText' value={text}/>
        <span className='delete-btn' onClick={this.onDelete} >X</span>
      </div>
    )
  }
}

export default Item;