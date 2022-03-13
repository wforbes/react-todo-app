import React from "react"

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
			<ul>
				{this.state.todos.map(todo => (
					<li>{todo.title}</li>
				))}
			</ul>
		)
	}
}
export default TodoContainer