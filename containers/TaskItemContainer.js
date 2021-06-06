import { connect } from 'react-redux';
import { toggleTask } from '../actions';
import TaskItemComponent from '../components/redux/TaskItemComponent';

const TaskItemContainer = connect()(TaskItemComponent);
export default TaskItemContainer;