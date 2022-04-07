import React, {Component} from "react";

import "./search.box.styles.css";

interface SearchBoxProps {
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className: string;
}
class SearchBox extends Component<SearchBoxProps> {
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
