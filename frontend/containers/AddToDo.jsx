import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions.jsx'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className='main-header flex-block'>
      <input type="checkbox" className="changeStateItem" 
        onClick={e => {
          e.preventDefault()
          // ...
        }}/>
      <input ref={node => {
          input = node
        }}
        className='todo-list__input' 
        type='text' 
        id='usertext' 

        onKeyUp={e => {
          if (e.keyCode != 13) {
            return;
          }
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
        placeholder="What needs to be done?"/>            
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo