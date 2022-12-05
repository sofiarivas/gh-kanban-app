import * as React from 'react';

interface CardProps {
    name: string;
    rightOnClick?: (name: string) => void;
    leftOnClick?: (name: string) => void;
}

const Card: React.FunctionComponent<CardProps> = ({name, rightOnClick, leftOnClick}) => {
  const handleLeftClick = () => {
    if(leftOnClick) {
      return leftOnClick(name)
    }
  }

  const handleRightClick = () => {
    if(rightOnClick) {
      return rightOnClick(name)
    }
  }
  return (
    <div className="Card">
        <button className="Card__icon" onClick={handleLeftClick} disabled={leftOnClick === undefined}>&lsaquo;</button>
        <p className="Card__title">{name}</p>
        <button className="Card__icon" onClick={handleRightClick} disabled={rightOnClick === undefined}>&rsaquo;</button>
    </div>
  );
};

export default Card;
