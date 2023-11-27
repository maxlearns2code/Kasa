import "../main.scss"


const Card= ({data}) => {
    return (
        
        <article className="card">
            <h2 className="card_title">{data.title}</h2>
            <img className="card_image" src={data.cover} />
            </article>        
    )
}
export default Card