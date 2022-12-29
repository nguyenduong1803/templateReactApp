function Col({ children, lg = 6, md='4', sm='', className = '', ...props }) {
  return (
    <div className={`${sm && 'col-sm-' + sm} ${md && 'col-md-' + md} ${lg && 'col-lg-' + lg} ${className}`} {...props}>
      {children}
    </div>
  );
}
export default Col;
