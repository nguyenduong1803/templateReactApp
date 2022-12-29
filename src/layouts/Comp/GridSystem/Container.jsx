import styled from 'styled-components';

function Container({ children, container = 'container-xxl', p, className = '', ...props }) {
  
  return (
    <div className={`${container} ${className}`} {...props}>
      {children}
    </div>
  );
}
export default Container;
