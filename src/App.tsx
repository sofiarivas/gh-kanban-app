import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchInput from './components/SearchInput';

const GITHUB_REPOS_BASE_URL = 'https://api.github.com/repos';

const fetchReposityBranches = async (url: string) => {
  // TODO: Make validation logic robust, could throw a hint of the formatting error
  const splitUrl = url.split('github.com/');
  const response = await fetch(`${GITHUB_REPOS_BASE_URL}/${splitUrl[1]}/branches`);
  const data = await response.json();
  return data;
};

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>
            Start by pasting the repository URL.
          </h1>
          <SearchInput placeholder='https://' onClickHandler={fetchReposityBranches} />
        </div>
      </main>
    </div>
  );
}

export default App;
