import {useState, useEffect} from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

interface App2Props {}
interface App2State {
  monsters: {name: string; id: string}[];
  searchField: string;
}

const App = function () {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<{name: string; id: string}[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = function (event: React.ChangeEvent<HTMLInputElement>) {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App2 extends Component<App2Props, App2State> {
//   constructor(props: App2Props) {
//     super(props);

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };

//     this.onSearchChange = this.onSearchChange.bind(this);
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(users => this.setState(() => ({monsters: users})));
//   }

//   onSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
//     const searchField = event.target.value.toLowerCase();

//     this.setState({searchField});
//   }

//   render(): React.ReactNode {
//     // Computed properties
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter(monster => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//           className="search-box"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
