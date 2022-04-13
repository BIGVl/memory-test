import './styles/App.css';
import CardContaier from './components/CardContainer';
import Header from './components/Header';

import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <CardContaier />
      <footer>
        This memory game isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially
        involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or
        registered trademarks of Riot Games, Inc.
      </footer>
    </div>
  );
}

export default App;
