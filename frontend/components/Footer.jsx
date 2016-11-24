import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { activeItems } from '../reducers/reducers.jsx'
import { deleteCompleted } from '../actions/actions.jsx'
import FilterLink from '../containers/FilterLink.jsx'

let Footer = ({ dispatch }) => {
  console.log(activeItems)

  return (
    <div className='footer'>
      <label>{activeItems} items left</label>
      <div className='filters'>
        <FilterLink filter="SHOW_ALL">
          All
        </FilterLink>
        <FilterLink filter="SHOW_ACTIVE">
          Active
        </FilterLink>
        <FilterLink filter="SHOW_COMPLETED">
          Completed
        </FilterLink>
      </div>
      <button onClick={() => {dispatch(deleteCompleted()) }}>Clear completed</button>
    </div>
  )
}

Footer = connect()(Footer)

export default Footer