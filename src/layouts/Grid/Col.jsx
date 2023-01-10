import PropTypes from 'prop-types';
function Col({ children, lg, md, sm = 12, className = '', ...props }) {
  const responsive = `col-sm-${sm}${md || md === 0 ? ` col-md-${md} ` : ''}${lg || lg === 0 ? ` col-lg-${lg} ` : ''}`;
  return (
    <div className={`${responsive}${className}`} {...props}>
      {children}
    </div>
  );
}
Col.propTypes = {
  children: PropTypes.node,
  md: PropTypes.number,
  sm: PropTypes.number,
  lg: PropTypes.number,
  className: PropTypes.string
};
export default Col;

// return <div  className={`col-lg-${lg}  col-md-${sm} col-sm-${sm} ${className}`} {...props}>{children}</div>;
