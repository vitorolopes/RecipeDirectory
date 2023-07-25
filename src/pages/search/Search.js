import {useLocation} from "react-router-dom"
import {useFetch} from "../../hooks/useFetch"
import RecipeList from "../../components/RecipeList"
import "./Search.css"


const Search = () => {

  const queryString = useLocation().search // useLocation returns an object, 
  // and on the object is a search property, and we need
  // to use that search property to get the query string
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get("q")

  const url = `http://localhost:3000/recipes?q=` + query

  const {error, isLoading, data} = useFetch(url)

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading</p>}
      {data && <RecipeList recipes={data}/>}
    </div>
  )
}

export default Search