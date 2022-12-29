import PropTypes from 'prop-types';

function Col({ children, lg = 12, md = '', sm = '', className = '', ...props }) {
  return (
    <div className={`${sm && 'col-sm-' + sm} ${md && 'col-md-' + md} ${lg && 'col-lg-' + lg} ${className}`} {...props}>
      {children}
    </div>
  );
}
Col.prototype = {
  children: PropTypes.node,
  md: PropTypes.number,
  sm: PropTypes.number,
  lg: PropTypes.number,
  className: PropTypes.string
};
export default Col;
