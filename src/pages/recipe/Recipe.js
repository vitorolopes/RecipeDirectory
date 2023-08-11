import { useFetch } from "../../hooks/useFetch"
import "./Recips.css"
import {useParams} from "react-router-dom"
import {useTheme} from "../../hooks/useTheme"



const Recipe = () => {

  const {id} = useParams()
  const url = "http://localhost:3000/recipes/" + id
  const {error, isLoading, data: recipe} = useFetch(url)
  //! HERE 1
  const {mode} = useTheme()

  return (
    <div className={`recipe ${mode}`}>
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