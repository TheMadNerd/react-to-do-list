import React, { Component } from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'
import './App.css'

class App extends Component {

	

	state = {
		prio: false,
		newTaskDate: new Date().toISOString().slice(0, 10),
		taskName: '',
		id: 0,
		

		tasks: [
	
				
		] 
	}

	checkBoxHandler = () => {
		this.setState({
			prio: !this.state.prio,
		})
	}

	dateChangeHandler = e => {
		this.setState({
			newTaskDate: e.target.value,
		})
	}

	taskNameHandler = e => {
		this.setState({
			taskName: e.target.value,
		})
	}

	addButtonHandler = () => {

		if(this.state.taskName == '' ) {
			console.error();
		} else {
			this.setState({
				tasks: [...this.state.tasks, {
					name: this.state.taskName,
					taskDate: this.state.newTaskDate
					}
				]
			})
		}
		
	}

	deleteHandler = id => {
        let tasks = [...this.state.tasks];
        tasks = tasks.filter(task => task.id == id)
		console.log(id);
    }

	render() {

		return (
			<div className="App">
				TODO APP
				<AddTask
					taskName={this.state.taskName}
					prio={this.state.prio}
					date={this.state.newTaskDate}
					taskNameHandler={this.taskNameHandler}
					dateChangeHandler={this.dateChangeHandler}
					checkBoxHandler={this.checkBoxHandler}
					addButtonHandler={this.addButtonHandler}
				/>
				<TaskList
					tasks={this.state.tasks}
					deleteHandler={this.deleteHandler} 	
				 />
			</div>
		)
	}
}

export default App
