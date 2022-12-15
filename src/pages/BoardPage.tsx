import * as React from "react";
import AppContext from "../context";
import { Repository, Branch, BranchStatus } from "../types";
import Card from "../components/Card";
import constants from "../constants";

const BoardPage: React.FunctionComponent = () => {
  const { branches, setBranches, repository } = React.useContext(AppContext);

  const updateBranch = (newStatus: BranchStatus, selectedBranch: string) => {
    return branches.map((branch: Branch) => {
      if (branch.name === selectedBranch) {
        return {
          ...branch,
          status: newStatus,
        };
      }
      return branch;
    });
  };

  const moveToInProgress = (branchId: string) => {
    const updatedBranches = updateBranch("in-progress", branchId);
    setBranches(updatedBranches);
  };

  const moveToReview = (branchId: string) => {
    const updatedBranches = updateBranch("review", branchId);
    setBranches(updatedBranches);
  };

  const moveToReadyToMerge = (branchId: string) => {
    const updatedBranches = updateBranch("ready-to-merge", branchId);
    setBranches(updatedBranches);
  };

  React.useEffect(() => {
    const fetchBranches = async (repository: Repository) => {
      const response = await fetch(
        `${constants.GITHUB_REPOS_BASE_URL}/${repository.full_name}/branches`
      );
      if (!response.ok) {
        throw new Error("Error while fetching branches");
      }
      const data = await response.json();
      if (data) {
        const branchesWithStatus = data.map((branch: Branch) => {
          return {
            ...branch,
            status: "in-progress",
          };
        });
        setBranches(branchesWithStatus);
      }
    };

    if (repository.full_name) {
      fetchBranches(repository);
    }
  }, [repository, setBranches]);

  return (
    <div className="Board">
      <div className="Board__header">
        <h1>{repository.name}</h1>
        <p>{repository.description}</p>
      </div>
      <div className="Board__container">
        <div className="Board__column">
          <p className="Board__subtitle">In progress</p>
          {branches.map(
            (branch) =>
              branch.status === "in-progress" && (
                <Card
                  key={branch.name}
                  name={branch.name}
                  rightOnClick={moveToReview}
                />
              )
          )}
        </div>
        <div className="Board__column">
          <p className="Board__subtitle">Review</p>
          {branches.map(
            (branch) =>
              branch.status === "review" && (
                <Card
                  key={branch.name}
                  name={branch.name}
                  leftOnClick={moveToInProgress}
                  rightOnClick={moveToReadyToMerge}
                />
              )
          )}
        </div>
        <div className="Board__column">
          <p className="Board__subtitle">Ready to merge</p>
          {branches.map(
            (branch) =>
              branch.status === "ready-to-merge" && (
                <Card
                  key={branch.name}
                  name={branch.name}
                  leftOnClick={moveToReview}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
