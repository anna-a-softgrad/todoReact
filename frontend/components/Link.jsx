import React, { PropTypes } from 'react'

const Link = ({ active, children, onClick }) => {
  return (
    <label>
      <input type="radio" name="toggle" 
      onChange={onClick} 
      checked={active}/>
      <span>{children}</span>
    </label>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link