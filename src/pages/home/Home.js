import { useFetch } from "../../hooks/useFetch"
import "./Home.css"


const Home = () => {
 
  const {data, isLoading, error} = useFetch("http://localhost:3000/recipes")


  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {data && data.map(recipe=>(
        <h2 key={recipe.id}>{recipe.title}</h2>
      ))}
    </div>
  )
}

export default Home