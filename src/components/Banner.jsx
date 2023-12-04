const Banner = ({img, text}) => {
    return (
        <section className="banner">
            <img className="banner_image" src={img} alt="bannière représentant une falaise"/>
            <h1 className="banner_text">{text}</h1>
        </section>
    )
}
export default Banner