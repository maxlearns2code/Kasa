import Logo from  "../components/Logo"
import Navbar from  "../components/Navbar"
import "../main.scss"

const Header = () => {
    return (
        <header className="Header">
            <Logo />
            <Navbar />
        </header>
    )
}
export default Header