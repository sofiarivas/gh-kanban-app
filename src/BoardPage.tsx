import * as React from 'react';
import AppContext from './context';
import { Repository } from './types';
import Card from './components/Card';
import constants from './constants';

export default function BoardPage () {
  const { branches, setBranches, repository } = React.useContext(AppContext);

  const fetchReposityBranches = async (repository: Repository) => {
    const response = await fetch(`${constants.GITHUB_REPOS_BASE_URL}/${repository.full_name}/branches`);
    if (!response.ok) {
      throw new Error('Error while fetching branches', );
    }
    const data = await response.json();
    if (data) {
      setBranches(data);
    }
  };

  React.useEffect(() => {
    fetchReposityBranches(repository);
  }, [repository])

  return (
    <div className="Board">
      <div className="Board__header">
        <h1>{repository.name}</h1>
        <p>{repository.description}</p>
      </div>
      <div className="Board__container">
        <div className="Board__column">
          <p className="Board__subtitle">In progress</p>
          {branches.map((branch) => <Card key={branch.name} name={branch.name} />)}
        </div>
        <div className="Board__column">
          <p className="Board__subtitle">Review</p>
        </div>
        <div className="Board__column">
          <p className="Board__subtitle">Ready to merge</p>
        </div>
      </div>
    </div>
  );
}
