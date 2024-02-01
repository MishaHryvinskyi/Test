import React, { Component } from "react";
import ToDo from 'components/ToDo/ToDo';
import todo from '../../todo.json';
import { List } from "./ToDoList.styled";

class ToDoList extends Component {
    state = {
        todoList: todo,
    }

    handleCheckCompleted = (id) => {
        this.setState((prevState) => {
            return {
                todoList: prevState.todoList.map((todo) => 
                    todo.id === id 
                    ? { ...todo, completed: !todo.completed }
                    : todo
                ),
            }
        })
    }
    render() {
        return (
            <>
                <h1 style={{ textAlign: "center" }}>My To-Do List</h1>
                <List>
                    {this.state.todoList.map((todo) => (
                        <ToDo key={todo.id} todo={todo} handleCheckCompleted={this.handleCheckCompleted} />
                    ))}
                </List>
            </>
        );
    }
}
export default ToDoList;