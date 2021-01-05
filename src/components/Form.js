import React from 'react'
import uuid from 'uuid/v4';


const Form = ({setInputText, inputText, setTodos, todos}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)

    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos, 
            {text: inputText,
            completed: false,
            id: Math.random() * 1000}
        ])
        setInputText('');
    }
    return ( 
        <form action="">
            <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler}/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit" >
                <i className="fas fa-plus-square"/>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">uncompleted</option>
                </select>
            </div>
        </form>
     );
}
 
export default Form;