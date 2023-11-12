import React from "react";
import map from "lodash/map";
import range from "lodash/range";

export const EventScroll = () => {
  return (
    <div className=''>
      <h1>Hello CodeSandbox</h1>
      <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
        {map(range(10), (_) => (
          <Container />
        ))}
      </div>
    </div>
  );
};

const Container = () => {
  return (
    <div style={{ height: "230px", width: "300px", margin: "16px" }}>
      <div style={{ height: "100%", width: "200px" }}>Hello</div>
    </div>
  );
};
