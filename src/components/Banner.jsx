import Picture from "../assets/Cliffs.png"
import "../main.scss"

const Banner = () => {
    return (
        <section className="banner">
            <img className="banner_image" src={Picture} alt="bannière reprsentant une falaise"/>
            <h1 className="banner_text">Chez vous, partout et ailleurs</h1>
        </section>
    )
}
export default Banner