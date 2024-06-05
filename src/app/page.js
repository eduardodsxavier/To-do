'use client'

import { useState } from 'react';
import Image from "next/image";
// import styles from "./page.module.css";

let todos = []
let todoId = 0

export default function Home() {
  
  let [todosList, setTodosList] = useState(null)

  let [todosLength, setTodosLength] = useState(0)
  let [uncheckTodosLength, setUncheckTodosLength] = useState(0)	

  function uncheckTodo(id) {
    let uncheckedAmount = 0
    todos.map(todo => {
      if(todo.id === id){
        todo.checked = !todo.checked 
      }
      if(!todo.checked){
	uncheckedAmount++
      }
    })
    setUncheckTodosLength(uncheckedAmount)
  }
	
  function updateTodoList() {
    setTodosList(todos.map(todo => 
      <li key={todo.text}>
	<input type='checkbox' id={todo.id} onClick={() => uncheckTodo(todo.id)}></input>
	<label htmlFor={todo.id}>{todo.text}</label> 
      </li>
    ))
  }

  function AddTodo() {
    let todoText = prompt("to-do text: ")
    if (!todoText) {
      return
    } 
    todos = [...todos, {id: todoId, checked: false, text: todoText}]	
    todoId++

    setUncheckTodosLength(uncheckTodosLength + 1)
    setTodosLength(todos.length)

    updateTodoList()
  }

  return ( 
    <main>
      <div>
        <h1>TO-DO List</h1>
        <h2>TO-DO count: {todosLength}</h2>
        <h2>Unchecked count: {uncheckTodosLength}</h2>
      </div>
      <div>
	<button onClick={AddTodo}>Add To-Do</button>
        <ul>
	  {todosList}
	</ul>
      </div>
    </main>
  );
}
