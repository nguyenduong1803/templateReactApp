import PropTypes from 'prop-types';

function Container({ children, size = 'container', p, className = '', ...props }) {
  const newContainer = size === 'container' ? 'container' : 'container-' + size;
  return (
    <div className={`${newContainer} ${className}`} {...props}>
      {children}
    </div>
  );
}
Container.prototype = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['xxl', 'xl', 'fluid', 'container'])
};
export default Container;
