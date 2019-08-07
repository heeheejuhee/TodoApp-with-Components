import React, {Component} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          content: 'Ring mum',
          priority: 'Important'
        },
        {
          id: 2,
          content: 'Water plants',
          priority: 'Urgent'
        },
        {
          id: 3,
          content: 'Get Milk',
          priority: 'Can wait'
        }
      ]
    };
  }

  addTodo = (data) => {
    var newTodo = {
      id: Date.now(),
      ...data
    };
    var todos = [newTodo,...this.state.todos];
    this.setState({todos});
  }

  removeTodo = (id) => {
    var todos = this.state.todos;
    var filtered = todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      todos: filtered
    });
  }

  updateTodo = (id,data) => {
    var todos = this.state.todos;
    var index = todos.findIndex(function(todo){
      return todo.id == id;
    });

    var updatedTodo = {
      ...todos[index],
      ...data
    };

    todos[index] = updatedTodo;

    this.setState({todos});    


  }

  render(){
    return (
      <div className="wrap">
        <div className="container">
          <div className="todos">

            {
              this.state.todos.map((todo) => {

                var todoProps = {
                  ...todo,
                  key: todo.id,
                  removeTodo: this.removeTodo,
                  updateTodo: this.updateTodo
                };

                return (
                  <Todo {...todoProps} updateTodo={this.updateTodo}/>
                )
              })
            }
            
            <NewTodoForm addTodo={this.addTodo}/>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
