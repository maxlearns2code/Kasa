import ArrowCollapse from "../assets/Arrow-Collapse.svg"
import { useState, useRef } from 'react'

export default function Collapse({data}) {
  const head = useRef(null);
  const body = useRef(null);

  const toogleCollapse = () => {
    if (body.current.style.maxHeight) {
      body.current.style.maxHeight = null;
    } else {
      body.current.style.maxHeight = `${body.current.scrollHeight}px`;
    }
  };
  return (
    <div className="collapse">
      <div className="collapse_header" ref={head}>
        {data.title}
        <button className="collapse_header--btn" onClick={toogleCollapse}>
            <img src={ArrowCollapse} alt="ouverture/fermeture" />
        </button>
      </div>
      <div className="collapse_body" ref={body}>
        <p className="collapse_body--text">{data.text}</p>
      </div>
    </div>
  );
}
{/*
const Collapse = ({data}) => {
    const [open, setOPen] = useState(false)

    const toggle = () => {
        setOPen(!open)
    }

return (
  <div className="collapse">
    <div className="collapse_header">
       <h2 className="collapse_header--title">{data.title}</h2> 
        <button className="collapse_header--btn" onClick={toggle}>
            <img class={!open ? 'arrow-up' : 'arrow-down'} src={ArrowCollapse} alt="ouverture/fermeture" />
        </button>
    </div>
    {open && (
      <div className="collapse_text">
        <p className={!open ? 'collapse_text--hidden' : 'collapse_text--visible'}>{data.text}</p>
      </div>
    )}
  </div>
);
};
export default Collapse
*/}