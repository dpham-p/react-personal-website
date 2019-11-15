import React, { Fragment } from 'react';
import WorkItem from './WorkItem';

const Works = ({ works }) => {
  return (
    <Fragment>
      {works !== null ? (
        works.map((work, index) => {
          return <WorkItem work={work} key={index} />;
        })
      ) : (
        <div></div>
      )}
    </Fragment>
  );
};

export default Works;
