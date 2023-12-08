import ArrowCollapse from "../assets/Arrow-Collapse.svg"
import { useState } from 'react'

const Collapse = ({data}) => {
    const [collapse, showText] = useState(false)
    return collapse ? (        
        <article className="collapse">
            <div className="collapse_header">
                <h2 className="collapse_header--title">{data.title}</h2>
                <button className="collapse_header--downbtn"onClick={() => showText(false)}>
                    <img src={ArrowCollapse} alt="fermeture du menu"/>
                </button>
            </div>
            <div className="collapse_text">
                <p>{data.text}</p>
            </div>
        </article>        
    ) : (
        <article className="collapse">
            <div className="collapse_header">
                <h2 className="collapse_header--title">{data.title}</h2>
                <button className="collapse_header--upbtn"onClick={() => showText(true)}>
                    <img src={ArrowCollapse} alt="ouverture du menu"/>
                </button>
            </div>
        </article> 
    )
}
export default Collapse