import Picture from "../assets/Cliffs.png"
import "../main.scss"

const Banner = () => {
    return (
        <section className="Banner">
            <img className="Banner_Image" src={Picture} alt="bannière reprsentant une falaise"/>
            <h1 className="Banner_Text">Chez vous, partout et ailleurs</h1>
        </section>
    )
}
export default Banner