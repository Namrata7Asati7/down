import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState(''); // Input state

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);  // Trigger search function in App.js
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter an ingredient"
        value={query}
        onChange={(e) => setQuery(e.target.value)}  // Update input state
      />
      <p></p>
      <button onClick={handleSearch}>Find Substitutes</button>
    </div>
  );
};

export default SearchBar;
