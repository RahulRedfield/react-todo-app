import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {

    const [todoItems, setTodoItems] = useState([]);
    const [todoText, setTodoText] = useState("")

    const handleClick = (e) => {
        e.preventDefault();
        if (todoText !== "") {
            setTodoItems((prevState) => {
                return [...prevState, todoText]
            })

            setTodoText("")
        }

    }

    const handleChange = (e) => {
        setTodoText(e.target.value);
    }

    const removeItem = (index) => {
        let newList = todoItems;
        newList.splice(index, 1);
        setTodoItems([...newList]);
    }

    return (
        <>
            <div className="transparent"></div>
            <div className="todo-container">
                <form className="todo-form">
                    <input className="todo-input" type="text" placeholder="What you want to do?" value={todoText} onChange={handleChange} required={true}></input>
                    <button className="todo-btn" type="submit" onClick={handleClick}>+</button>
                </form>
                <div className="todo-items">
                    {todoItems.map((todoItem, index) => {
                        return <TodoItem key={index} text={todoItem} removeItem={removeItem} index={index} />
                    })}
                </div>
                {todoItems.length > 0 && <button className="delete-list-btn" onClick={() => setTodoItems([])}>Delete List</button>}
            </div>
        </>
    )
}

export default TodoList