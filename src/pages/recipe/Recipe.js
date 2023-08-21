import {  useState, useEffect } from "react"
import "./Recips.css"
import {useParams} from "react-router-dom"
import {useTheme} from "../../hooks/useTheme"
import { projectFirestore } from "../../firebase/config"

const Recipe = () => {
  const {id} = useParams()
  const {mode} = useTheme()
  const [recipe, setRecipe] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

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
 //! HERE 2
  const handleClick = () => { 
    projectFirestore.collection("recipes").doc(id).update({
        title: "Something completly different"
    })
   }
  
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
{/* //! HERE 1      */}
        <button onClick={handleClick}>Update me</button>
        </>
      )}
    </div>
  )
}
export default Recipe