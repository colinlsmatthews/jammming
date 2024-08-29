import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Tracklist from './Tracklist/Tracklist';
import Button from './Button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify Playlist App</h1>
        <SearchBar Label="Some Label"/>
        <SearchResults />
        <Tracklist />
        <Button Content="Test Button"/>
      </header>
    </div>
  );
}

export default App;
