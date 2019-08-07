import React, {Component} from 'react';

class NewTodoForm extends Component {
	constructor(props){
		super(props)
		this.state={
			contentInput:'',
			priorityInput:''
		};
	}

	handleContentInputChange = (e) => {
		this.setState({
			contentInput: e.target.value
		});
	}
	handlePriorityInputChange = (e) => {
		this.setState({
			priorityInput: e.target.value
		});
	}
	handleTodoAddClick = (e) => {
		e.preventDefault();
		var data = {
			content: this.state.contentInput,
			priority: this.state.priorityInput
		};

		this.props.addTodo(data);
	}


	render(){
		return (
			<div className="todo new-todo">
              <form className="todo-body">
                  <div className="form-group">
                    <label htmlFor="content-input">Content</label>
                    <input onChange={this.handleContentInputChange} type="text" className="form-control" id="content-input"/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="priority-input">Priority</label>
                    <input onChange={this.handlePriorityInputChange} type="text" className="form-control" id="priority-input"/>
                  </div>
            
                  <button onClick={this.handleTodoAddClick} type="submit" className="btn btn-primary todo-add">Add</button>
              </form>
            </div>
		);
	}
}


export default NewTodoForm;