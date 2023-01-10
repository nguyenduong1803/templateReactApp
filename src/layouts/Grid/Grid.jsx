function Grid({ children, size = 'container', className = '', ...props }) {
  return (
    <div className={`${size === 'container' ? 'container' : 'container-' + size} ${className}`} {...props}>
      <div className='row'>{children}</div>
    </div>
  );
}
export default Grid;
