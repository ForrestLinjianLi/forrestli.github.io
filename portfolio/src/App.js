import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
          <div>
            <h2>Forrest Li</h2>
            <h3>Mathematical Science at UBC</h3>
          </div>
          <img src={require('./images/avatar.jpg')} alt='abc' width="500" height="600"/>
      </header>
    </div>
  );
}

export default App;
