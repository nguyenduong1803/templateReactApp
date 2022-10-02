import {useState,useRef,useEffect} from 'react'
import styles from "./Accordion.module.css"
import PropTypes from "prop-types";

function Accordion({title, children,...props}) {
    const [open,setOpen]=useState(false)
    const refContent = useRef()
  return (
    <div className={styles.wrapAccordion}>
        <h2 onClick ={()=>setOpen(!open)} className={styles.buttonAccordion}>{title}</h2>
        <ul 
        ref={refContent}
        className={open ? `${styles.contentAccordion} ${styles.active}`:`${styles.contentAccordion}` }
        style={open ?{maxHeight:`${refContent.current.scrollHeight}px`}:{}}
        >
            {children}
        </ul>
    </div>
  )
}
Accordion.propTypes={
  title:PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
export default Accordion