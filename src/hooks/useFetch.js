import { useState, useEffect } from "react"
                       
export const useFetch = (url, method="GET") => {
  const [data, setData] = useState(null)
  const [isLoading, setisLoading] = useState(false)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState(null)
  const postData = (postData) => { // postData is the new recipe
    setOptions({
      method: "POST",
      headers: {
        "Content-type": "application/json" 
      },
      body: JSON.stringify(postData)
    })
  }

  useEffect(() => {
    const controller = new AbortController()
                            //! HERE 1a
    const fetchData = async (fetchOptions) => {
      setisLoading(true)
      
      try {                         //! HERE 1b
        const res = await fetch(url, { ...fetchOptions, signal: controller.signal })
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        const data = await res.json()

        setisLoading(false)
        setData(data)
        setError(null)
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted")
        } else {
          setisLoading(false)
          setError('Could not fetch the data')
        }
      }
    }
//! HERE 1
    if(method==="GET"){
      fetchData()
    }
    if(method==="POST" && options){
      fetchData(options)
    }
    

    return () => {
      controller.abort()
    }
           //! HERE 1c 
  }, [url, options, method]) // We need to pass the options and the method 
            // into the useEffect as dependencies, because now we're using
            // them inside this use effect function.
                              
  return { data, isLoading, error, postData }
}                                