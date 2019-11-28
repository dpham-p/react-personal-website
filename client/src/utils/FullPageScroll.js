import React from 'react';

const FullPageScroll = props => {
  const handleScroll = e => {
    if (e.nativeEvent.wheelDelta > 0) {
      console.log('scrolling up');
    } else {
      console.log('scrolling down');
    }
  };

  return <div onWheel={handleScroll}>{props.children}</div>;
};

export default FullPageScroll;
