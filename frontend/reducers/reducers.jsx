import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/actions.jsx'

const { SHOW_ALL } = VisibilityFilters

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }

    case 'TEXT_CHANGED':
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
         text: action.text,
      })

    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        completed: !state.completed
      })
    case 'DELETE_TODO':
      if (state.id !== action.id) {
        return state       
      }
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )     
    case 'TEXT_CHANGED':
      return state.map(t =>
        todo(t, action)
      ) 
    case 'DELETE_TODO':
      var tempState = [];
      var counter = 0;
      for (var i = 0; i < state.length; i++) {
        if (state[i].id !== action.id)  {
          tempState[counter++] = Object.assign({}, state[i])
        }
      }      
      return tempState
    default:
      return state
  }
}

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp