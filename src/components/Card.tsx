import * as React from 'react';

interface CardProps {
    name: string;
}

const Card: React.FunctionComponent<CardProps> = ({name}) => {
  return (
    <div className='Card'>
        <p>&#706;</p>
        <p className='Card__title'>{name}</p>
        <p>&#707;</p>
    </div>
  );
};

export default Card;
