import * as React from 'react';

interface SearchBarProps {
  placeholder: string;
  onSubmit: (url: string) => void;
  displayError?: boolean;
  isLoading?: boolean;
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({
  placeholder,
  onSubmit,
  displayError = false,
  isLoading = false,
}) => {
  const [inputValue, setInputValue]= React.useState('')
  // CLEAR THIS UP
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event?.target.value)
  };

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    onSubmit(inputValue);
  }
  return (
    <div className="SearchBar">
      <form className="SearchBar__container" onSubmit={onSubmitHandler}>
        <input
          aria-label="Search repository"
          type="text"
          className="SearchBar__input"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
        />
        <button className="SearchBar__button" type="submit">{isLoading ? 'Loading...' : 'Submit'}</button>
      </form>
      {displayError && <p className="SearchBar__error">Ops! Something went wrong. Try again.</p>}
    </div>
  );
};

export default SearchBar;
