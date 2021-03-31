import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';
import NewTodo from '../components/NewTodo';
import { ITodo } from '../redux/actions';


const mapDispatchToProps = ( dispatch ) => {
  return {
    onAddTodo: ( todo: ITodo ) => dispatch( addTodo( todo ))
  }
}

export default connect(
  null,
  mapDispatchToProps
)( NewTodo );