import React, { useState, useEffect } from 'react';
import './TodoList.css'
const TodoList = () => {
 const [todos, setTodos] = useState([]);
 const [error, setError] = useState(null);

 useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch todo items');
        }
        return response.json();
      })
      .then(data => setTodos(data))
      .catch(error => setError(error.message));
 }, []);
   

 const handleCheck = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
 };

 const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
 };

 return (
    <div className='todolist'>
        <h1>TodoList</h1>
        <span className='error_message'>{error && <p>Error: {error}</p>}</span>
        <div className="list">
            {todos.map(todo => (
            <div key={todo.id} className='todo'>
                <span className='todo_title'>{todo.title}</span>
                <div className="check_delete">
                    <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleCheck(todo.id)}
                     className='checkbox'
                    />
                    <button onClick={() => handleDelete(todo.id)} className='button-26'>Delete</button>
                </div>
            </div>
            ))}
        </div>
    </div>
 );
};

export default TodoList;
