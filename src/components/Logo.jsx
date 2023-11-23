import Logo from "../assets/Logo.svg"
import "../main.scss"

const HeaderLogo = () => {
    return (
        <div className="HeaderLogo">
            <img src={Logo} alt="Logo Kasa"/>
        </div>
    )
}
export default HeaderLogo