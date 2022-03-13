import React from "react"
import Header from "./Header"
import TodoList from "./TodoList"

class TodoContainer extends React.Component {
	state = {
		todos: [
			{
				id: 1,
				title: "Do the laundry",
				completed: true
			},
			{
				id: 2,
				title: "Clean the office",
				completed: false
			},
			{
				id: 3,
				title: "Get game inventory ready to sort",
				completed: false
			},
			{
				id: 4,
				title: "Clean out the car",
				completed: false
			}
		]
	}
	render() {
		return (
			<div>
				<Header />
				<TodoList todos={this.state.todos} />
			</div>
		)
	}
}
export default TodoContainer