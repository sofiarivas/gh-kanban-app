import * as React from 'react';

interface SearchInputProps {
  placeholder: string;
  onClickHandler: (url: string) => void;
  displayError?: boolean;
}

const SearchInput: React.FunctionComponent<SearchInputProps> = ({
  placeholder,
  onClickHandler,
  displayError = false,
}) => {
  const [inputValue, setInputValue]= React.useState('')
  // CLEAR THIS UP
  const handleChange = (event: any) => {
    setInputValue(event?.target.value)
  };
  return (
    <div>
      <input placeholder={placeholder} value={inputValue} onChange={handleChange}></input>
      <button onClick={() => onClickHandler(inputValue)}> Submit</button>
      {displayError && <p>Ops! Something went wrong. Try again.</p>}
    </div>
  );
};

export default SearchInput;
