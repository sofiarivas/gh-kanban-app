import * as React from 'react';

interface BranchCardProps {
    name: string;
}

const BranchCard: React.FunctionComponent<BranchCardProps> = ({name}) => {
  return (
    <div>
        <p>{`Branch ${name}`}</p>
    </div>
  );
};

export default BranchCard;
