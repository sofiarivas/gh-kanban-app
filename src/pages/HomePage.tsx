import * as React from 'react';
import AppContext from '../context';
import SearchBar from '../components/SearchBar';
import logo from './../logo.svg';
import { useNavigate } from 'react-router-dom';
import constants from '../constants';

const Home: React.FunctionComponent = () => {
  const { setRepository } = React.useContext(AppContext);
  const [displaySearchBarError, setDisplaySearchBarError] = React.useState(false);
  const [isLoading, setisLoading] = React.useState(false);
  let navigate = useNavigate();

  const fetchRepository = async (url: string) => {
    setDisplaySearchBarError(false);
    setisLoading(true);
    // TODO: Make validation logic robust, could throw a hint of the formatting error
    const splitUrl = url.split('github.com/');
    const response = await fetch(`${constants.GITHUB_REPOS_BASE_URL}/${splitUrl[1]}`);
    setisLoading(false);
    if(!response.ok) {
      setDisplaySearchBarError(true);
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
        <SearchBar isLoading={isLoading} displayError={displaySearchBarError} placeholder="https://" onSubmit={fetchRepository} />
      </div>
    </main>
  );
}

export default Home;
