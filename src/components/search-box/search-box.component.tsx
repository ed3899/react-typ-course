import "./search.box.styles.css";

interface SearchBoxProps {
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className: string;
}

const SearchBox = function (props: SearchBoxProps) {
  const {className, placeholder, onChangeHandler} = props;
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
