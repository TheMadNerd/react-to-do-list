import React from 'react'

const AddTask = props => {
	return (
		<div>
			<div>
				<input type="text" placeholder="dodaj zadanie" value={props.taskName} onChange={props.taskNameHandler}></input>
				<input type="checkbox" value={props.prio} onClick={props.checkBoxHandler}></input> Priorytet
			</div>
			Do kiedy zrobić{' '}
			<input type="date" value={props.newTaskDate} min={props.newTaskDate} onChange={props.dateChangeHandler}></input>
			<button onClick={props.addButtonHandler}>DODAJ</button>
		</div>
	)
}

export default AddTask
