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
	handleChange = (id) => {
		// passing prevState because React doesn't
		//	guarantee that this.state is up to date.
		//	It may batch or defer the update until later
		this.setState(prevState => ({
			todos: prevState.todos.map(todo => {
				if (todo.id === id) {
					// Strict-mode doesn't allow
					//	direct state modification (?)
					return {
						...todo,
						completed: !todo.completed
					}
				}
				return todo
			})
		}))
	}
	deleteTodo = (id) => {
		this.setState({
			todos: [
				...this.state.todos.filter(todo => {
					return todo.id !== id
				})
			]
		})
	}
	render() {
		return (
			<div>
				<Header />
				<TodoList
					todos={this.state.todos}
					handleChangeProps={this.handleChange}
					deleteTodoProps={this.deleteTodo}
				/>
			</div>
		)
	}
}
export default TodoContainer