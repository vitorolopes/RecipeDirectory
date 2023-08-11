import {BrowserRouter, Switch, Route} from "react-router-dom"

import Home from "./pages/home/Home"
import Create from "./pages/create/Create"
import Search from "./pages/search/Search"
import Recipe from "./pages/recipe/Recipe"
import Navbar from "./components/Navbar"

import './App.css'
import { ThemeSelector } from "./components/ThemeSelector"

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar/>
{/* //! HERE 1 */}
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
