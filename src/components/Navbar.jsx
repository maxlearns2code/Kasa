import "../main.scss"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/">Accueil </Link>
            <Link to="/about">A Propos</Link>
        </div>
    )
}
export default Navbar