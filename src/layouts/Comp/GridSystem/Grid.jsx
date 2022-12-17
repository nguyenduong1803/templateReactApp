function Grid({ children, container = 'container' }) {
  return (
    <div className={`${container}`}>
      <div className="row">{children}</div>
    </div>
  );
}
export default Grid;