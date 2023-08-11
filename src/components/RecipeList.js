import { Link } from "react-router-dom"
import "./RecipeList.css"
import React from 'react'
import {useTheme} from "../hooks/useTheme"

const RecipeList = ({recipes}) => {
//! HERE 1
  const {mode} = useTheme()

  if(recipes.length === 0){
    return <div className="error">No recipes to load ...</div>
  }


  return (
    <div className="recipe-list"> 
                                   {/* // We just output the <RecipeList> in <Home>
                                   // in the case where we already have data.
                                   // So there is no need to {recipes && recipes.map() ...} */}
      {recipes.map(recipe => (
                                      //! HERE 2
        <div key={recipe.id} className={`card ${mode}`}>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to make</p>
            <div>{recipe.method.substring(0,100)}...</div>
            <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
        </div>
      
      ))}
    </div>
  )
}

export default RecipeList