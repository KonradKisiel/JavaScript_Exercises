import React from "react";

const ColorRand = WrappedComponent => {
  const colors = ["red", "pink", "orange", "blue", "grren", "yellow"];
  const randomColor = colors[Math.floor(Math.random() * 5)];
  const className = randomColor + "-text";

  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default ColorRand;
