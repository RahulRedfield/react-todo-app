import React, { useState } from "react";

const TodoItem = ({ text, removeItem, index }) => {

    const [check, setCheck] = useState(false);

    const handleChange = () => {
        setCheck((prevState) => {
            return prevState === true ? false : true;
        })
    }
    return (
        <div className="todo-item">
            <input id={index} className="todo-check" type="checkbox" onChange={handleChange} checked={check} />
            <label htmlFor={index} className="todo-text" style={{ textDecoration: `${check === true ? "line-through" : "none"}` }}>{text}</label>
            <button className="todo-delete-btn" onClick={() => { removeItem(index) }}>X</button>
        </div >
    )
}

export default TodoItem