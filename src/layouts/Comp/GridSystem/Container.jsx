function Container({ children, size = 'container', p, className = '', ...props }) {
  const newContainer = size === 'container' ? 'container' : 'container-' + size;
  return (
    <div className={`${newContainer} ${className}`} {...props}>
      {children}
    </div>
  );
}
export default Container;
