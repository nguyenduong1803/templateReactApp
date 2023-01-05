import PropTypes from 'prop-types';

function Container({ children, size, className, ...props }) {
  const newContainer = size === 'container' ? 'container' : 'container-' + size;
  return (
    <div className={`${newContainer} ${className}`} {...props}>
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
