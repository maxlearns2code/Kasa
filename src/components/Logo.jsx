import Logo from "../assets/Logo-Header.svg"
import "../main.scss"

const ShowLogo = () => {
    return (
        <div className="showlogo">
            <img src={Logo} alt="Logo Kasa"/>
        </div>
    )
}
export default ShowLogo