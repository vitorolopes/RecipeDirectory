import { useFetch } from "../../hooks/useFetch"
import "./Recips.css"
import {useParams} from "react-router-dom"



const Recipe = () => {

  const {id} = useParams()
  const url = "http://localhost:3000/recipes/" + id
  const {error, isLoading, data: recipe} = useFetch(url)

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {recipe && (
        <>
        <h2 className="page-title">{recipe.title}</h2>
        <p>Takes {recipe.cookingTime} to cook</p>
        <ul>
          {recipe.ingredients.map( ing => <li key={ing}>{ing}</li>)}
        </ul>
        <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  )
}

export default Recipe