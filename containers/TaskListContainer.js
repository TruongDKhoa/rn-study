import { connect } from 'react-redux';
import TaskListComponent from '../components/redux/TaskListComponent';

const mapStateToProps = (state) => {
    console.log(5);
    // alert(`state send to task list = ${JSON.stringify(state)}`);
    return {
        tasks: !state.tasksReducer ? [] : state.tasksReducer
    }
};

const TaskListContainer = connect(mapStateToProps)(TaskListComponent);
export default TaskListContainer;