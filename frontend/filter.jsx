import React from "react";
import {Component} from "react";

class Filter extends Component {
  render () {
    return (
      <label>
        <input type="radio" name="toggle" value={this.props.value} 
        onChange={this.props.onFilterChange} 
        checked={this.props.value == this.props.currentFilter}/>
        <span>{this.props.text}</span>
      </label>
    )
  }
}

export default Filter;