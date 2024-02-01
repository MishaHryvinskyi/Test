import React, { Component } from "react";
import ToDo from 'components/ToDo/ToDo';
import todo from '../../todo.json';
import { List } from "./ToDoList.styled";

class ToDoList extends Component {
    state = {
        todoList: todo,
    }

    handleCheckCompleted = (id) => {
        this.setState((prevState) => ({
            todoList: prevState.todoList.map((todo) => 
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
        }))
    }

    handleDelete = (id) => {
        this.setState(prevState => ({ 
            todoList: prevState.todoList.filter((todo => todo.id !== id)),
        }))
    }

    render() {
        return (
            <>
                <h1 style={{ textAlign: "center" }}>My To-Do List</h1>
                <List>
                    {this.state.todoList.map((todo) => (
                        <ToDo key={todo.id} todo={todo} handleCheckCompleted={this.handleCheckCompleted} handleDelete={this.handleDelete} />
                    ))}
                </List>
            </>
        );
    }
}
export default ToDoList;