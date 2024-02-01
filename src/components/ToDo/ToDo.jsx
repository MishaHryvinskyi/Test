import React from "react";
import { Item } from "./ToDo.styled";

const ToDo = ({ todo, handleCheckCompleted }) => {
    return (
        <Item>
            <div>
                <input 
                    type="checkbox" 
                    checked={todo.completed} 
                    onChange={() => handleCheckCompleted(todo.id)}
                />
                {todo.title}
            </div>
            <button type="button">Delete</button>
        </Item>
    );
};

export default ToDo;