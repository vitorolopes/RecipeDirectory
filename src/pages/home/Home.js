import { useEffect, useState } from "react"

import RecipeList from "../../components/RecipeList"

import { projectFirestore } from "../../firebase/config"

import "./Home.css"


const Home = () => {

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(()=>{
    setIsLoading(true)
    projectFirestore.collection("recipes").get().then((snapshot)=>{ 
        // console.log(snapshot);
        if(snapshot.empty){
          setError("No recipes to load")
          setIsLoading(false)
        } else {
          let results =[]
          snapshot.docs.forEach(doc=> {
            // console.log(doc);
            results.push( {id: doc.id, ...doc.data() })
          })
          setData(results)
          setIsLoading(false)
        }
    }).catch(err=>{
      setError(err.message)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data}/>}
    </div>
  )
}

export default Home