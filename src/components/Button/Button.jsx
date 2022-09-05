import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
function Button({ to, href, children, onClick, ...passProps }) {
  let Comp = "button";
  const props = { onClick, ...passProps };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  return (
    <Comp {...props}>
      <span>{children}</span>
    </Comp>
  );
}
Button.propTypes={
  to:propTypes.string,
  href:propTypes.string,
  onClick:propTypes.func,
  children:propTypes.string
}
export default Button;
