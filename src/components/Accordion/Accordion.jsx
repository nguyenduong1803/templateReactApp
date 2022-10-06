import { useState, useRef } from 'react'
import PropTypes from "prop-types";
import styled from "styled-components"
const ButtonAccordion = styled.h2`
  background-color: var(--primary);
  user-select: none;
  color:#fff;
  cursor: pointer;
`
const ContentAccordion = styled.ul`
   border-left: 1px solid whitesmoke;
    border-right: 1px solid whitesmoke;
    padding: 0 20px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-in-out;
   background-color: #ccc; 
   &.active{
    background-color: #29ec25;
   }
`

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  const refContent = useRef()
  return (
    <section >
      <ButtonAccordion onClick={() => setOpen(!open)}>{title}</ButtonAccordion>
      <ContentAccordion
        ref={refContent}
        className={open && "active"}
        style={open ? { maxHeight: `${refContent.current.scrollHeight}px` } : {}}
      >
        {children}
      </ContentAccordion>
    </section>
  )
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
export default Accordion