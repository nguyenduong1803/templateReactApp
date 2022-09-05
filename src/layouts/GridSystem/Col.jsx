function Col({ children, lg = 3, md = 4, sm = 6 }) {
  return <div className={`col-lg-${lg} col-md-${md} col-sm-${sm}`}>{children}</div>;
}
export default Col;
