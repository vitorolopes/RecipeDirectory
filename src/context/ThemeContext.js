import { createContext, useReducer } from 'react'

export const ThemeContext = createContext()

const themeReducer = (state, action) => { 
    switch(action.type) {
      case "CHANGE_COLOR" :
        return {...state, color: action.payload}
//! HERE 3
      case "CHANGE_MODE":
        return {...state, mode: action.payload}
      
      default:
        return state
    }
 }


export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    color: "#58249c",
    //! HERE 1
    mode: "dark"
  })

const changeColor = (color) => { 
  dispatch({type: "CHANGE_COLOR", payload: color})
 }

//! HERE 2
 const changeMode = (mode) => { 
  dispatch({type: "CHANGE_MODE", payload: mode})
  }

  return (
    <ThemeContext.Provider 
    value={{ 
      ...state,
      changeColor,
//! HERE 4
      changeMode
       
    }}>
      {children}
    </ThemeContext.Provider>
  )
}
