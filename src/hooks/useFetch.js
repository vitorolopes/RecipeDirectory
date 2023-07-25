import { useState, useEffect } from "react"
                            //! HERE 1 if we do not pass an argument when we 
                            //! call useFetch it is going to default to get
export const useFetch = (url, method="GET") => {
  const [data, setData] = useState(null)
  const [isLoading, setisLoading] = useState(false)
  const [error, setError] = useState(null)
 //! HERE 2a
  const [options, setOptions] = useState(null)
 //! HERE 2
  const postData = (postData) => { // postData is the new recipe
    setOptions({
      method: "POST",
      headers: {
        "Content-type": "application/json" // This just outlines the 
        // type of data we're sending in the post request, which is going to be JASON data.
      },
      body: JSON.stringify(postData)
    })
  }

// To make a post request with the fetch API, 
// we put in some extra information into its second argument, which is an object.
// Now, so far, we just have this signal option, but it's inside this object
// we'd also have a headers property, the method, which is either get or post 
// and the body, which is the data we want to send with the request.


  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      setisLoading(true)
      
      try {
        const res = await fetch(url, { signal: controller.signal })
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

    fetchData()

    return () => {
      controller.abort()
    }

  }, [url])
                                 //! HERE 2a
  return { data, isLoading, error, postData }
}                                // This is the function that we're going to
// invoke from our create component later when a user submits the form.
// But at the minute, all it's really doing is taking the data that we want to post 
// or save, which will be a recipe, and it's creating a fetch options object to store
// it in some state (options). We are not actually making the request yet.