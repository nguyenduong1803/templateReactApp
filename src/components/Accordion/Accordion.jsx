import { useState, useRef } from 'react'
import PropTypes from "prop-types";
import styled from "styled-components"
import { ChevronDown } from '~/assets/svg';
const ButtonAccordion = styled.h3`
  background-color: #fff;
  user-select: none;
  color:var(--text-color);
  box-shadow: rgba(95, 95, 95, 0.15) 0px 2px 5px;
  padding:6px;
  border-radius: 3px;;
  cursor: pointer;
`
const ContentAccordion = styled.ul`
   border-left: 1px solid whitesmoke;
    border-right: 1px solid whitesmoke;
    padding: 0 20px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-in-out;
   background-color: #fff; 
  box-shadow: rgba(95, 95, 95, 0.15) 0px 2px 5px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
   &.active{
    /* background-color: #29ec25; */
   }
`
const DropIcon = styled(ChevronDown)`
  color:var(--text-color);
  transition:0.3s;
`


function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  const refContent = useRef()
  return (
    <section>
      <ButtonAccordion onClick={() => setOpen(!open)} className="d-flex j-between a-center">
        {title}<DropIcon style={open ? { transform: `rotate(180deg)` } : {}} />
      </ButtonAccordion>
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