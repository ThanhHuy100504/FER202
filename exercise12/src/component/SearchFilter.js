import React, { useState } from 'react';

function SearchFilter() {
  const [query, setQuery] = useState('');

  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Grapes',
    'Watermelon',
    'Pineapple',
    'Strawberry',
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

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
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '80%',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    backgroundColor: '#444',
    margin: '6px 0',
    padding: '10px',
    borderRadius: '4px',
  },
  noResult: {
    color: '#bbb',
    fontStyle: 'italic',
  },
};
  return (
    <div style={styles.container}>
      <h2>Search Fruits</h2>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.input}
      />
      <ul style={styles.list}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} style={styles.listItem}>
              {item}
            </li>
          ))
        ) : (
          <li style={styles.noResult}>No matching items</li>
        )}
      </ul>
    </div>
  );
}

export default SearchFilter;
