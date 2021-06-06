import AddComponent from '../components/redux/AddComponent';
import { addNewTask } from '../actions';
import { connect } from 'react-redux';
const mapStateToProps = state => {
    console.log('4-mapStateToProps: param state is a result that is returned from Reducer and HAVE a CONNECT function to map this one to be props in component');
    // console.log(state);

    return {
        tasks: !state.taskReducers ? [] : state.taskReducers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: (inputTaskName) => {
            console.log('1-mapDispatchToProps: When click this.props.onClickAdd => it emits to active this function => active addNewTask() in Actions.');
            dispatch(addNewTask(inputTaskName));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent);