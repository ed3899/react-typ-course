import {Component} from "react";

import Card from "../card/card.component";

import "./card-list.styles.css";

interface CardListProps {
  monsters: any[];
}

class CardList extends Component<CardListProps> {
  render() {
    const {monsters} = this.props;

    return (
      <div className="card-list">
        {monsters.map(monster => {
          const {id} = monster;
          return <Card monster={monster} key={id} />;
        })}
      </div>
    );
  }
}

export default CardList;
