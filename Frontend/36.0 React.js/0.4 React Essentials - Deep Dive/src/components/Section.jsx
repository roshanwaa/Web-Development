import React from 'react';

export const Section = ({ title, children, ...props }) => {
  return (
    <section {...props}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};
