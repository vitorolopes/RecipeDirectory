import { Link } from "react-router-dom"
import "./Navbar.css"
import { SearchBar } from "./SearchBar"

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        {/* //! HERE 1 */}
        <SearchBar/>

        <Link to="/create">
          <h1>Create Recipe</h1>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar