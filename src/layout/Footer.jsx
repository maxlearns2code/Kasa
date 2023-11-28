import Logo from "../assets/Logo-Footer.svg"
import "../main.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <img src={Logo} alt="Logo Kasa"/>
            <p className="footer_text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
export default Footer