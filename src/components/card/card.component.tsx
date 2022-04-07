import {Component} from "react";

import "./card.styles.css";

interface CardProps {
  monster: {[i: string]: any};
}

class Card extends Component<CardProps> {
  render() {
    const {name, id, email} = this.props.monster;
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
  }
}

export default Card;
