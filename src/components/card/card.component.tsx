import "./card.styles.css";

interface CardProps {
  monster: {[i: string]: any};
}

const Card = function (props: CardProps) {
  const {name, id, email} = props.monster;
  return (
    <div className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />

      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
