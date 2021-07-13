import React from 'react';

const Component: React.FC = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </>
  );
};

export default Component;
