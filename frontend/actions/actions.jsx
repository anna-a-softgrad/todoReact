export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const CHECK_ALL = 'CHECK_ALL'
export const DELETE_TODO = 'DELETE_TODO'
export const DELETE_COMPLETED = 'DELETE_COMPLETED'
export const TEXT_CHANGED = 'TEXT_CHANGED'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

let nextTodoId = 0

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export const checkAllTodos = (checkedAll) => {
  return {
    type: CHECK_ALL,
    checkedAll
  }
}

export const textChangedTodo = (id, text) => {
  return {
    type: TEXT_CHANGED,
    id,
    text
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
}

export const deleteCompleted = () => {
  return {
    type: DELETE_COMPLETED
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}
