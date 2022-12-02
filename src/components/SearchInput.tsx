import * as React from 'react';

interface SearchInputProps {
  placeholder: string;
  onClickHandler: (url: string) => void;
  showError?: boolean;
}

const SearchInput: React.FunctionComponent<SearchInputProps> = ({
  placeholder,
  onClickHandler,
  showError = true,
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
      {showError && <p>Ops! Something went wrong. Try again.</p>}
    </div>
  );
};

export default SearchInput;
