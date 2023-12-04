const Card = ({data, lazy}) => {
    return (        
        <article className="card">
            <h2 className="card_title">{data.title}</h2>
            <img className="card_image" src={data.cover} alt={data.title} width="768" height="768" loading={lazy}/>
        </article>        
    )
}
export default Card