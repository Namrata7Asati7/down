import React, { useState } from 'react';
import './styles/App.css'; // Importing custom CSS
import SearchBar from './components/SearchBar';
import SubstitutionList from './components/SubstitutionList';
import substitutesData from './data/substitutes'; // Importing mock data

const App = () => {
  const [substitutes, setSubstitutes] = useState([]); // Substitutes array
  const [loading, setLoading] = useState(false);      // Loading state

  const handleSearch = (ingredient) => {
    setLoading(true);
    setTimeout(() => {
      const foundSubstitutes = substitutesData[ingredient.toLowerCase()] || [];
      setSubstitutes(foundSubstitutes);
      setLoading(false);
    }, 1000);  // Simulated 1 second loading time
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Recipe Ingredient Substitution Finder</h1>
        <SearchBar onSearch={handleSearch} />
        {loading ? (
          <div className="loader"></div>  // Show loader while searching
        ) : (
          <SubstitutionList substitutes={substitutes} /> // Show substitute list
        )}
      </div>
    </div>
  );
};

export default App;
