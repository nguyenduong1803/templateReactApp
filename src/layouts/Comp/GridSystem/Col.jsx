function Col({ children, lg, md, sm = 12, className = '', ...props }) {
  const renderClass =`col-sm-${sm} ${md ? 'col-md-' + md : ''}  ${lg ? 'col-lg-' + lg : ''} ${className}`.replace(/^\s+/, '')
  console.log(renderClass.trim())
  return (
    <div className={renderClass.trim()} {...props}>
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

// return <div  className={`col-lg-${lg}  col-md-${sm} col-sm-${sm} ${className}`} {...props}>{children}</div>;
