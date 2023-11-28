import Logo from  "../components/Logo"
import FooterLogo from "../assets/Logo-Footer.svg"
import "../main.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <Logo img={FooterLogo}/>
            <p className="footer_text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
export default Footer