import React from 'react'
import Task from './Task'

const TaskList = () => {
	return (
        <div>
            Zadania do zrobienia
            <Task name='Daniel' date='2019-01-02' />
            <Task />
        </div>
    ) 
}

export default TaskList
