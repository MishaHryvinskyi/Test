import React from "react";
import { Item } from "./ToDo.styled";
import { FaRegTimesCircle } from "react-icons/fa";

const ToDo = ({ todo, handleCheckCompleted, handleDelete }) => {
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
            <button style={{  borderRadius: "50%", backgroundColor: "red", color: "white", border: "none", width: "20px", height: "20px" }} type="button" onClick={() => handleDelete(todo.id)}><FaRegTimesCircle /></button>
        </Item>
    );
};

export default ToDo;