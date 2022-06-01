import React, { useState } from 'react'


import style from './newtodo.module.css'

const NewTodo = (props) => {

    const [data, setData] = useState({title: "", desc: ""});

    const {title, desc} = data;
    const handleChange = (e) => {
        const name = e.target.name;
        setData((oldData) => {
            return {...oldData, [name]: e.target.value}
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddTodo(data);
        setData({title: '', desc: ''})
    }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
        <div className={style["form-feild"]}>
            <label htmlFor='title'>Title: </label>
            <input type="text" id='title' name='title' value={title} onChange={handleChange} required></input>
        </div>
        <div className={style["form-feild"]}>
            <label htmlFor='desc'>Description: </label>
            <textarea  id='desc' name='desc' value={desc}  onChange={handleChange} ></textarea>
        </div>
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo