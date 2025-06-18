import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (task.trim() === '') return;
    setTodos([...todos, task]);
    setTask('');
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const styles = {
  container: {
    backgroundColor: '#2b2b2b',
    color: '#fff',
    padding: '40px',
    display: 'flex',
    justifyContent: 'center',     // căn giữa toàn bộ giao diện
    alignItems: 'flex-start',
    gap: '40px',                  // ✅ khoảng cách giữa inputArea và todoArea
    borderRadius: '8px',
    width: '800px',
    margin: '100px auto',
    fontFamily: 'Arial, sans-serif',
  },
  inputArea: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  addButton: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  todoArea: {
    backgroundColor: '#fff',
    color: '#000',
    padding: '20px',
    borderRadius: '8px',
    width: '35%',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: '8px 12px',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '5px 10px',
    fontSize: '14px',
    cursor: 'pointer',
  },
};


  return (
    <div style={styles.container}>
      <div style={styles.inputArea}>
        <input
          type="text"
          value={task}
          placeholder="Please input a Task"
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAddTodo} style={styles.addButton}>
          Add Todo
        </button>
      </div>

      <div style={styles.todoArea}>
        <h3 style={{ textAlign: 'center' }}>Todo List</h3>
        {todos.map((todo, index) => (
          <div key={index} style={styles.todoItem}>
            <span>{todo}</span>
            <button onClick={() => handleDelete(index)} style={styles.deleteButton}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
