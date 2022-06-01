import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import Todos from './Todos'
import style from './home.module.css';
import NewTodo from './NewTodo';

const Home = () => {

    const [todos, setTodos] = useState([]);

    const handleAddTodo = (todo) => {
        setTodos((previousData) => {
          return [...previousData, {todo, id: uuidv4()}];
        });
    }

    const getDeletedItemId = (id) => {        
        setTodos((prevTodos) => {
          const FiltredTodos = prevTodos.filter((todo) => todo.id !== id);
          return FiltredTodos;
        });
    }

    console.log(todos)
  return (
    <div className={style.container}>
        <NewTodo onAddTodo={handleAddTodo}/>
        <h1 style={{color: "White"}}>Todo App</h1>
        <Todos todos={todos} delId={getDeletedItemId}/>
    </div>
  )
}

export default Home