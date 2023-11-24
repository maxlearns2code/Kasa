import Logo from "../assets/Logo-Footer.svg"
import "../main.scss"

const Footer = () => {
    return (
        <footer className="Footer">
            <img src={Logo} alt="Logo Kasa"/>
            <p className="Footer_Text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
export default Footer