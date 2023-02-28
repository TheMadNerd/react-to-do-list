import React, { Component } from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'
import './App.css'

class App extends Component {
	state = {
		prio: false,
		date: new Date().toISOString().slice(0, 10),
		taskName: '',
	}

	checkBoxHandler = () => {
		this.setState({
			prio: !this.state.prio,
		})
	}

	dateChangeHandler = e => {
		this.setState({
			date: e.target.value,
		})
	}

	taskNameHandler = e => {
		this.setState({
			taskName: e.target.value,
		})
	}

	render() {
		return (
			<div className="App">
				TODO APP
				<AddTask
					taskName={this.state.taskName}
					prio={this.state.prio}
					date={this.state.date}
					taskNameHandler={this.taskNameHandler}
					dateChangeHandler={this.dateChangeHandler}
					checkBoxHandler={this.checkBoxHandler}
				/>
				<TaskList />
			</div>
		)
	}
}

export default App
