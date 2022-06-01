import React from 'react'

import style from './todo.module.css'
const Todo = (props) => {

    const {id} = props.todo;
    const {title, desc} = props.todo.todo

    const deleteSec = () =>{
      props.delId(id);
    }
  return (
    <article id={id} className={style.todo}>
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div> 
        <div>
            <button onClick={deleteSec} className={style.btn}><i className='fa fa-trash fa-2x '></i></button>
        </div>
    </article>
  )
}

export default Todo