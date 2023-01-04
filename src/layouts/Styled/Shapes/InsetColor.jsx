import styled from 'styled-components';
import PropTypes from 'prop-types';

function InsetColor({ children, color = 'rgb(183, 129, 3)', bg = 'rgba(183, 129, 3, 0.24)', ...props }) {
  return (
    <Wrap color={color} bg={bg} {...props}>
      {children}
    </Wrap>
  );
}
const Wrap = styled.div`
  margin: auto auto 24px;
  display: flex;
  border-radius: 50%;
  -webkit-box-align: center;
  align-items: center;
  width: 64px;
  height: 64px;
  -webkit-box-pack: center;
  justify-content: center;
  color: ${(props) => props.color};
  background-image: linear-gradient(135deg, rgba(183, 129, 3, 0) 0%, ${(props) => props.bg} 100%);
`;
InsetColor.prototype = {
  children: PropTypes.node,
  bg: PropTypes.string,
  color: PropTypes.string
};
export default InsetColor;
