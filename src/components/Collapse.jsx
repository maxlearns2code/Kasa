import ArrowCollapse from "../assets/Arrow-Collapse.svg"
import { useState, useRef } from 'react'

export default function Collapse({data}) {
  const head = useRef(null);
  const body = useRef(null);

  const [open, setOPen] = useState(false)

  const toogleCollapse = () => {
    setOPen(!open)
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
          <img class={!open ? 'arrow-up' : 'arrow-down'} src={ArrowCollapse} alt="ouverture/fermeture" />
        </button>
      </div>
      <div className="collapse_body" ref={body}>
        <p className="collapse_body--text">{data.text}</p>
      </div>
    </div>
  );
}