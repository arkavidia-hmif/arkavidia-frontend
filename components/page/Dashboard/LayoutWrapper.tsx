import React from 'react';

type Props = {
    children: React.ReactNode
  }

export const LayoutWrapper: React.FC<Props> = ({children}) => {
  return (
    <div className="container mb-3" id='dashboard-area'>
      <div className="row container-fluid">{children}</div>
    </div>
  );
};


