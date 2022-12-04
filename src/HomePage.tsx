import * as React from 'react';
import AppContext from './context';
import SearchInput from './components/SearchInput';
import logo from './logo.svg';
import { useNavigate } from 'react-router-dom';
import constants from './constants';

export default function Home () {
  const { setRepository } = React.useContext(AppContext);
  const [displaySearchInputError, setDisplaySearchInputError] = React.useState(false);
  let navigate = useNavigate();

  const fetchRepository = async (url: string) => {
    setDisplaySearchInputError(false);
    // TODO: Make validation logic robust, could throw a hint of the formatting error
    const splitUrl = url.split('github.com/');
    const response = await fetch(`${constants.GITHUB_REPOS_BASE_URL}/${splitUrl[1]}`);
  
    if(!response.ok) {
      setDisplaySearchInputError(true);
      throw new Error('Error while fetching repository', );
    }

    const data = await response.json();

    if(data) {
      setRepository({
        name: data.name,
        description: data.description,
        full_name: data.full_name,
      });
    }

    return navigate('/board');
  };

  return (
    <main className="HomePage__main">
      <img src={logo} className="HomePage__logo" alt="logo" />
      <div>
        <h1>
          Start by pasting the repository URL.
        </h1>
        <SearchInput displayError={displaySearchInputError} placeholder='https://' onClickHandler={fetchRepository} />
      </div>
    </main>
  );
}
