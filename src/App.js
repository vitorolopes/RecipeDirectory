import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./pages/home/Home"
import Create from "./pages/create/Create"
import Search from "./pages/search/Search"
import Recipe from "./pages/recipe/Recipe"
import Navbar from "./components/Navbar"
import './App.css'
import { ThemeSelector } from "./components/ThemeSelector"
import { useTheme } from "./hooks/useTheme"

function App() {
//! HERE 1 
  const {mode} = useTheme()

  return (
    //! HERE 2
    // <div className="App">
      <div className={`App ${mode}`}>

      <BrowserRouter>

        <Navbar/>

        <ThemeSelector/>

        <Switch>

          <Route exact path="/">
             <Home/>
          </Route>

          <Route path="/create">
             <Create/>
          </Route>

          <Route path="/search">
             <Search/>
          </Route>

          <Route  path="/recipes/:id">
             <Recipe/>
          </Route>

        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App
