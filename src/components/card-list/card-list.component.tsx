import Card from "../card/card.component";

import "./card-list.styles.css";

interface CardListProps {
  monsters: any[];
}

const CardList = function (props: CardListProps) {
  const {monsters} = props;

  return (
    <div className="card-list">
      {monsters.map(monster => {
        const {id} = monster;
        return <Card monster={monster} key={id} />;
      })}
    </div>
  );
};

export default CardList;
