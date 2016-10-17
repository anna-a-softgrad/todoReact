import React from "react";
import {Component} from "react";

class List extends Component {
  constructor(props) {
    super(props);    
  }

  render() {

    return (
      <div className='item-container'>
          {this.props.children}
      </div>    
    )
  }
}

export default List;