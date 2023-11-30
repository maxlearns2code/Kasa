import "../main.scss"
import ArrowCollapse from "../assets/Arrow-Collapse.svg"

const Collapse = ({data}) => {
    return (        
        <article className="collapse">
            <div className="collapse_header">
                <h2 className="collapse_header_title">{data.title}</h2>
                <img src={ArrowCollapse} alt="ouverture du menu"/>
            </div>            
            <p className="collapse_text">{data.text}</p>
        </article>        
    )
}
export default Collapse