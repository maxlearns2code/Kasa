import Logo from  "../components/Logo"
import HeaderLogo from "../assets/Logo-Header.svg"
import Navbar from  "../components/Navbar"

const Header = () => {
    return (
        <header className="header">
            <Logo 
                img={HeaderLogo}
            />
            <Navbar />
        </header>
    )
}
export default Header