import SingleTask from './SingleTask';
import { useState } from 'react';



const TaskList = ({ tasks, forceUpdate }) => {
    const [dummy, setDummy] = useState(true);

    const updateList = () => {
        setDummy(!dummy);
    }

    return(
        <ul>
          {
            tasks.map((task) => (
                <SingleTask key={task._id} task={task} forceUpdate = {forceUpdate} updateList = {updateList} />
            ))
          }  
        </ul>
    )
}

export default TaskList;