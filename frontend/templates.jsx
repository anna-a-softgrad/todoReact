import React from "react";
import {Component} from "react";

class Template extends Component {
	render() {
	    return (
	    	<tr id='" + itemId + "'>
	    		<td className='event'>
	    			<input type='checkbox' name='itemState' className='changeStateItem'>
	    		</td>
	    		<td> 
	    			<input type='text' className='itemText'>
	    		</td>
	    		<td className='removeItem event'>
	    			X
	    		</td>
	    	</tr>
	      <div className={className} draggable="true" onDragStart={this.drag} id={this.props.index} >
	        <span className='delete-btn' onClick={this.deleteItem}></span>
	        <label className='item-text' onClick={this.props.onItemClicked}>{this.props.elem.text}</label>
	        <Initials user={todoItemUser}/>
	        <input type="checkbox" onChange={this.onChangeReadiness} checked={readiness} id={'checkbox-' + this.props.index}/>
	            <label htmlFor={'checkbox-' + this.props.index}><span></span></label>
	      </div>
	    )
	}
}

export default Template;