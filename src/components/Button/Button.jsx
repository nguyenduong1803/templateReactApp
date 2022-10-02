import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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
  to:PropTypes.string,
  href:PropTypes.string,
  onClick:PropTypes.func,
  children:PropTypes.string
}
export default Button;
