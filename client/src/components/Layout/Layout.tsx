import React from "react";
import { useSpring, animated } from "react-spring";
import "./layout.scss";

interface PropTypes {
  children: React.ReactChild;
}

const calc: any = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];

/**
 * Transform translate ES6 function
 * when mouse hover x and y axis are moving it will animate the shapes
 */
const transform1: any = (x: number, y: number) =>
  `translate3d(${x / 10}px,${y / 10}px,0)`;
const transform2: any = (x: number, y: number) =>
  `translate3d(${x / 12 + 35}px,${y / 12 - 230}px,0)`;

const Layout: React.FC<PropTypes> = ({ children }) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <div className="container">
      <div className="background-circle"></div>
      <animated.div
        className="shapes"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <animated.div
          className="upper-circle"
          style={{ transform: props.xy.interpolate(transform1) }}
        ></animated.div>
        <animated.div
          className="lower-circle"
          style={{ transform: props.xy.interpolate(transform2) }}
        ></animated.div>
      </animated.div>
      {children}
    </div>
  );
};

export default Layout;
