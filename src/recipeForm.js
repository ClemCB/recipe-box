import React, { Component } from 'react';

class RecipeForm extends Component {
  render() {
    return (
        <form>
          <input type="text"
            className="recipe-form"
            placeholder="Recipe Title"
           />
          <input type="submit"
            value="Submit"
            className="recipe-submit"
          />
        </form>
    );
  }
}

export default RecipeForm;
