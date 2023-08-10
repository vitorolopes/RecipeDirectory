import { Link } from "react-router-dom"
import "./Navbar.css"
import { SearchBar } from "./SearchBar"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const Navbar = () => {

  const { color } = useContext(ThemeContext)

  return (
    <div className="navbar" style={{ background: color}}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <SearchBar/>

        <Link to="/create">
          <h1>Create Recipe</h1>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar