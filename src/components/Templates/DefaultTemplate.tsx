import React, { ReactElement } from 'react';

interface Props {
  header: ReactElement;
}

const DefaultTemplate: React.FC<Props> = ({ children, header }) => {
  return (
    <>
      {header}
      {children}
    </>
  );
};

export default DefaultTemplate;
