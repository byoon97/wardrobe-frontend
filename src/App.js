import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';
import SearchBar from './containers/SearchBar'

function App() {
  return (
    <div className="App">
      <SearchBar />
      <MainContainer />
    </div>
  );
}

export default App;
