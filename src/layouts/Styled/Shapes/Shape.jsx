import styled from 'styled-components';
import PropTypes from 'prop-types';
export const Shape = ({ children, radius = '4px', color = '#ccc', w = '100%', h = '100%' }) => {
  return (
    <ShapeStyle radius={radius} color={color} h={h} w={w}>
      {children}
    </ShapeStyle>
  );
};
Shape.propTypes = {
  children: PropTypes.node.isRequired,
  radius: PropTypes.string,
  color: PropTypes.string,
  h: PropTypes.string,
  w: PropTypes.string
};
const ShapeStyle = styled.div`
  border: 1px solid ${(props) => props.color};
  width: ${(props) => props.w};
  height: ${(props) => props.w};
  border-radius: ${(props) => props.radius};
  overflow: hidden;
`;
