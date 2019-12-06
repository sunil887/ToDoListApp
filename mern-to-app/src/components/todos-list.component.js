import React, { Component } from 'react';
import  WebService  from '../utilities/webService';
import {Link} from 'react-router-dom'

const Todo = props => (
    <tr>
        <td>{props.todo.todo_description}</td>
        <td>{props.todo.todo_responsible}</td>
        <td>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)


export default class TodosList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos:[]
        }        
    }

    componentDidMount(){
        console.log('componentdidMount');
        
        WebService('http://localhost:4000/todos/','GET')
        .then(res => res.json())
        .then(data => { this.setState({todos:data})} );
    }

    todoList() {
        return this.state.todos
            .filter(value => value.todo_completed === false)
            .map(function(currentTodo, i){
                return <Todo todo={currentTodo} key={i} />;
            })
    }

    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
