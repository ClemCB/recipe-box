import React, { Component } from 'react';
import './App.css';
import RecipeForm from './recipeForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Box</h1>
        </header>
        <RecipeForm />
      </div>
    );
  }
}

export default App;
