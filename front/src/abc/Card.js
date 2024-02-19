import { useState } from "react";
import './Card.css'
function Card({ id, image, info, price, name, removehandle }) {
  const description = `${info.substring(0, 200)}...`;
  const [readmore, setMore] = useState(false);

  function readhandle() {
    setMore(!readmore);
  }

  return (
    <div className="card">
      <div>
        <img src={image} className="image" alt={name}></img>
        <h3>{price}</h3>
        <h3>{name}</h3>
      </div>

      <div>
        {description}
        <span onClick={readhandle}></span>
        {readmore ? `show less` : `show more`}
      </div>
      <button className="btn" onClick={() => removehandle(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
