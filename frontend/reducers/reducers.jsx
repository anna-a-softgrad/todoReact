import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, CHECK_ALL, DELETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/actions.jsx'

const { SHOW_ALL } = VisibilityFilters

export let aciveItems = 0

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      aciveItems++;

      return {
        id: action.id,
        text: action.text,
        completed: false
      }

    case 'TEXT_CHANGED':
      if (state.id !== action.id) {
        return state
      }
      aciveItems++;
      return Object.assign({}, state, {
         text: action.text,
      })

    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
      aciveItems++
      return Object.assign({}, state, {
        completed: !state.completed
      })      
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      aciveItems = 0;
      return [
        ...state,
        todo(undefined, action)
      ]

    case 'TOGGLE_TODO':
      aciveItems = 0;
      return state.map(t =>
        todo(t, action)
      )

    case 'TEXT_CHANGED':
      aciveItems = 0;
      return state.map(t =>
        todo(t, action)
      )
    case 'CHECK_ALL':
      var tempState = [];
      aciveItems = 0;

      for (var i = 0; i < state.length; i++) {
        tempState[i] = Object.assign({}, state[i], {
          completed: !state[i].completed
        }) 
      }
      return tempState

    case 'DELETE_TODO':
      var tempState = [];
      var counter = 0;
      aciveItems = 0;

      for (var i = 0; i < state.length; i++) {
        if (state[i].id !== action.id)  {
          aciveItems++;
          tempState[counter++] = Object.assign({}, state[i])
        }
      }
      return tempState

      case 'DELETE_COMPLETED':
        var tempState = [];
        var counter = 0;
        aciveItems = 0;
        for (var i = 0; i < state.length; i++) {
          if (state[i].completed != true)  {
            aciveItems++
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
const isCheckedAll = (state = false, action) => {
  switch (action.type) {
    case CHECK_ALL:
      return action.checkedAll
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  isCheckedAll,
  todos
})

export default todoApp