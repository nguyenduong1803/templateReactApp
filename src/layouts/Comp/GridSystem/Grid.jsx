function Grid({ children, container = 'container',className,...props}) {
  return (
    <div className={`${container} ${className}`} {...props}>
      <div className="row">{children}</div>
    </div>
  );
}
export default Grid;
