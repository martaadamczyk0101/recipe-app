import React from 'react'

export default function ({recipeData, recipeInfo}) {
  return (
    <div className='recipe'>
        <a href="google.com">
            <img className="recipe-img" src={recipeData.image} alt='' ></img>
        </a>
        <h2 className='recipe-title'>{recipeData.title}</h2>
        <p className='recipe-ing-desc'>You have {recipeData.usedIngredientCount} of {recipeData.usedIngredientCount+recipeData.missedIngredientCount} required ingredients.</p>
    </div>
  )
}

