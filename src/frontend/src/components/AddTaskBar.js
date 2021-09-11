import { useState } from 'react';
import { addTask } from '../api';

const AddTaskBar = ({ forceUpdate }) => {
    const [newTask, setNewTask] = useState('');

//     useEffect(() => {
// 
//     }, [updateFunc])

    const addnewTask = () => {
        if (newTask) {
            addTask(newTask).then(res => {
                setNewTask('');
                forceUpdate();
            })
        }
    }

    return(
        <div>
            <input type="text" value={newTask} onChange={ (e) => setNewTask(e.target.value) } />
            <button onClick={addnewTask}>ADD TASK</button>
        </div>
    )
}

export default AddTaskBar;