// RecipeList.js

import React from 'react';

const Receipe = () => {
  // Dummy data for demonstration
  const recipes = [
    { id: 1, name: 'Pasta Carbonara' },
    { id: 2, name: 'Chicken Tikka Masala' },
    { id: 3, name: 'Tiramisu' },
    // Add more recipes here
  ];

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Receipe;
