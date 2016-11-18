import React, { PropTypes } from 'react'
import Todo from './Todo.jsx'

const TodoList = ({ todos, onTodoClick, onTodoTextChanged, onTodoDelete }) => (
  <div className='item-container'>
    {todos.map(todo =>
      <div key={todo.id}>
        <Todo
          key={todo.id}
          {...todo}
          onReadynessChange={() => onTodoClick(todo.id)}
          onTextChanged={(event) => onTodoTextChanged(todo.id, event.target.value)}
          onDelete={() => onTodoDelete(todo.id)}          
        />
      </div>
    )}
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoTextChanged: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired
}

export default TodoList