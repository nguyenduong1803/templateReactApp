import PropTypes from 'prop-types';

function Container({ children, size, className, ...props }) {
  return (
    <div className={`${size === 'container' ? 'container' : 'container-' + size} ${className}`} {...props}>
      {children}
    </div>
  );
}
Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['xxl', 'xl', 'fluid', 'container'])
};
Container.defaultProps = {
  size: 'container',
  className: ''
};
export default Container;
