import React, { PropTypes } from 'react'

const Todo = ({ onReadynessChange, onTextChanged, onDelete, completed, id, text }) => {
  const readyClass = completed ? ' ready' : '';
  let input;

  return (
    <div className={'todo-list__item flex-block' + readyClass} 
    id={id} >
    <input 
      className="changeStateItem" 
      onChange={onReadynessChange} 
      type="checkbox" 
      checked={completed} 
      id={'checkbox-' + id}
    />
    <label htmlFor={'checkbox-' + id} ><span></span></label> 
    <input className='itemText' value={text} onChange={onTextChanged}/>
    <span className='delete-btn' onClick={onDelete}>X</span>
  </div>)
}

Todo.propTypes = {
  onReadynessChange: PropTypes.func.isRequired,
  onTextChanged: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo