import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

interface App2Props {}
interface App2State {
  monsters: {name: string; id: string}[];
}

class App2 extends Component<App2Props, App2State> {
  constructor(props: App2Props) {
    super(props);

    this.state = {
      monsters: [],
    };

    this.filterMonsters = this.filterMonsters.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users =>
        this.setState(
          () => ({monsters: users}),
          () => console.log(this.state)
        )
      );
  }

  filterMonsters(event: React.ChangeEvent<HTMLInputElement>) {
    const searchString = event.target.value.toLowerCase();

    console.log(searchString);

    const filteredMonsters = this.state.monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchString);
    });

    console.log(filteredMonsters);

    this.setState(() => ({monsters: filteredMonsters}));
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={event => this.filterMonsters(event)}
        />
        {this.state.monsters.map(monster => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App2;
