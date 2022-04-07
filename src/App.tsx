import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

interface App2Props {}

interface App2State {
  name: string;
  company: string;
}

class App2 extends Component<App2Props, App2State> {
  constructor(props: App2Props) {
    super(props);
    this.state = {
      name: "Yihua",
      company: "ZTM",
    };
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name}</p>
          <button
            onClick={() => {
              this.setState({name: "Andrei"});
            }}>
            Change name
          </button>
        </header>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
export {App2};
