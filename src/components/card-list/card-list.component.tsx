import {Component} from "react";

interface CardListProps {
  monsters: any[];
}

class CardList extends Component<CardListProps> {
  render() {
    const {monsters} = this.props;

    return (
      <div>
        {monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
