import React from 'react'
import Task from './Task'



const TaskList = props => {
    
	const array = props.tasks.map((task, index) => <Task deleteHandler={props.deleteHandler} key={index}  name={task.name} date={task.taskDate} />);

    

	return (
		<div>
			Zadania do zrobienia
			{array}
		</div>
	)
}

export default TaskList
