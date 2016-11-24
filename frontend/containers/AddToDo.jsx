import Header from './Header.jsx'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    checkAll: state.isCheckedAll
  }
}

const AddTodo = connect(mapStateToProps)(Header)

export default AddTodo