

function Col({ children, lg = 6,className='',...props }) {
  return <div  className={`col-sm-${lg} col-md-4 col-lg-3 ${className}`} {...props}>{children}</div>;
}
export default Col;
