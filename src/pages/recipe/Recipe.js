import {  useState, useEffect } from "react"
import "./Recips.css"
import {useParams} from "react-router-dom"
import {useTheme} from "../../hooks/useTheme"
import { projectFirestore } from "../../firebase/config"

const Recipe = () => {
  const {id} = useParams()
//! HERE 1
  // const url = "http://localhost:3000/recipes/" + id
  // const {error, isLoading, data: recipe} = useFetch(url)

  const {mode} = useTheme()
//! HERE 2
  const [recipe, setRecipe] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
//! HERE 3
  useEffect(() => {
    setIsLoading(true)
    projectFirestore.collection("recipes").doc(id).get().then((doc)=>{
      console.log(doc);
      if(doc.exists){
        setIsLoading(false)
        setRecipe(doc.data())
      } else{
        setIsLoading(false)
        setError("Could not find that recipe")
      }
    })
  }, [id])
  
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