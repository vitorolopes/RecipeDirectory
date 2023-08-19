import { Link } from "react-router-dom"
import "./RecipeList.css"
import React from 'react'
import {useTheme} from "../hooks/useTheme"
import deleteIcon from '../assets/delete-icon.svg';
import { projectFirestore } from "../firebase/config"

const RecipeList = ({recipes}) => {

  const {mode} = useTheme()

  if(recipes.length === 0){
    return <div className="error">No recipes to load ...</div>
  }

 //! HERE 2
  const handleClick = (id) => { 
    projectFirestore.collection("recipes").doc(id).delete()
  }

  return (
    <div className="recipe-list"> 
      {recipes.map(recipe => (                    
        <div key={recipe.id} className={`card ${mode}`}>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to make</p>
            <div>{recipe.method.substring(0,100)}...</div>
            <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
{/* //! HERE 1 */}
            <img src={deleteIcon} alt="delete-icon" className="delete"
                 onClick={()=>handleClick(recipe.id)}
            />
        </div>    
      ))}
    </div>
  )
}

export default RecipeList