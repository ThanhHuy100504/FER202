import React, { useState } from 'react';

function DragDropListComponent() {
  const [items, setItems] = useState([
    'Learn React',
    'Practice JavaScript',
    'Build Projects',
    'Read Docs',
    'Review Code',
  ]);

  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragEnter = (index) => {
    if (index === draggingItem || draggingItem === null) return;

    const newItems = [...items];
    const draggedItem = newItems[draggingItem];
    newItems.splice(draggingItem, 1);
    newItems.splice(index, 0, draggedItem);

    setDraggingItem(index);
    setItems(newItems);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  const styles = {
  container: {
    backgroundColor: '#2b2b2b',
    color: '#fff',
    padding: '40px',
    borderRadius: '8px',
    width: '400px',
    margin: '100px auto',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  item: {
    padding: '12px 16px',
    marginBottom: '10px',
    borderRadius: '6px',
    cursor: 'grab',
    userSelect: 'none',
    backgroundColor: '#34495e',
    transition: 'background 0.2s',
  },
};

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Drag and Drop List</h2>
      <ul style={styles.list}>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragEnd={handleDragEnd}
            style={{
              ...styles.item,
              backgroundColor: index === draggingItem ? '#e67e22' : '#34495e',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragDropListComponent;
