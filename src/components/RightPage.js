import React from 'react';
import Recipe from './Recipe';

export default function RightPage({recipeData, recipeInfo}) {

  if (recipeData === null) return null

  return (
    <div className='whole-right'>
        {recipeData.map((el, id) => {
            return <Recipe key={id} recipeData={el}/>
        })}
    </div>

  )
}
