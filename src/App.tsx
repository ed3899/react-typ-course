import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

interface App2Props {}
interface App2State {
  monsters: {name: string; id: string}[];
  searchField: string;
}

class App2 extends Component<App2Props, App2State> {
  constructor(props: App2Props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: "",
    };

    this.onSearchChange = this.onSearchChange.bind(this);

    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users =>
        this.setState(
          () => ({monsters: users})
          // () => console.log(this.state)
        )
      );
  }

  onSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const searchField = event.target.value.toLowerCase();

    this.setState({searchField});
  }

  render(): React.ReactNode {
    // Computed properties
    console.log("render");

    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={event => onSearchChange(event)}
        />
        {filteredMonsters.map(monster => {
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
