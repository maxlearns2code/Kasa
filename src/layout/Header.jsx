import Logo from  "../components/Logo"
import Navbar from  "../components/Navbar"
import "../main.scss"

const Header = () => {
    return (
        <div className="Header">
            <Logo />
            <Navbar />
        </div>
    )
}
export default Header