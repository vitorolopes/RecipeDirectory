import { createContext, useReducer } from 'react'

export const ThemeContext = createContext()
//! HERE 2
const themeReducer = (state, action) => { 
    switch(action.type) {
      case "CHANGE_COLOR" :
        return {...state, color: action.payload}
      default:
        return state
    }
 }


export function ThemeProvider({ children }) {
//! HERE 1
  const [state, dispatch] = useReducer(themeReducer, {
    color: "blue"
  })

//! HERE 3
const changeColor = (color) => { 
  dispatch({type: "CHANGE_COLOR", payload: color})
 }

  return (
    <ThemeContext.Provider 
    value={{ 
      //! HERE 4
      // color: 'blue' 
      ...state,
      changeColor
       
    }}>
      {children}
    </ThemeContext.Provider>
  )
}
