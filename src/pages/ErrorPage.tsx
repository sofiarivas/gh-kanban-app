import * as React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FunctionComponent = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <Link to="/">Home page</Link>
    </div>
  );
};

export default NotFound;
