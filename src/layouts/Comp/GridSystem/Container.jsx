
function Container({children,container,className,...props}) {
    
  return (
    <div className={`${container} ${className}`} {...props}>{children}</div>
  )
}

export default Container