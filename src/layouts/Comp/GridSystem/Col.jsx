function Col({ children, lg = 3, md = 4, sm = 6,className='',...props }) {
  return <div className={`col-lg-${lg} col-md-${md} col-sm-${sm} ${className}`} {...props}>{children}</div>;
}
export default Col;
