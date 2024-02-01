import React, { Component } from "react";
import ToDoList from "components/ToDoList/ToDoList";

class App extends Component {
    state = {};

    render() {
        return (
            <div>
                <ToDoList />
            </div>
        );
    }
}

export default App;