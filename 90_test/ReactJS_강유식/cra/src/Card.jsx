
function Card(props) {

  return (

    <div className="card">
      <h3>{props.title}</h3>
      <img src={props.img} alt="" />
      <p>
        {props.description}
      </p>
      <span>{props.button}</span>
    </div>

  );
}

export default Card;
