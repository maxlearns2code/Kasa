import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
            >Accueil</NavLink>
            <NavLink to="/about" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
            >A Propos</NavLink>
        </div>
    )
}
export default Navbar



