import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App__header">
          <img src="https://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png" alt="pokemon logo"/>
          <input className="header__inputSearch" type="text" name="pokemon" placeholder="Pokemon name"/>
        </header>
    </div>
  );
}

export default App;
