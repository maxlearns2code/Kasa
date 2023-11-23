import Logo from  "../components/Logo"
import Navbar from  "../components/Navbar"
import "../main.scss"

const Banner = () => {
    return (
        <div className="Banner">
            <Logo />
            <Navbar />
        </div>
    )
}
export default Banner