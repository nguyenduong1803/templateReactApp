import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ChevronDown } from '~/assets/svg';
import Paper from '~/layouts/Styled/Paper';

export default function Accordion({ title, children, p = "6px", className,bg="#fff", ...props }) {
  const [open, setOpen] = useState(false);
  const refContent = useRef();
  return (
    <Paper elevation={0} >
      <ButtonAccordion onClick={() => setOpen(!open)} padding={p} bg={bg} className={`d-flex j-between a-center ${className}`} {...props}>
        {title}
        <DropIcon style={open ? { transform: `scale(0.8) rotate(180deg) ` } : {}} />
      </ButtonAccordion>
      <ContentAccordion
        ref={refContent}
        className={open && 'active'}
        style={open ? { maxHeight: `${refContent.current.scrollHeight}px` } : {}}
      >
        {children}
      </ContentAccordion>
    </Paper>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  height: PropTypes.string
};

const ButtonAccordion = styled.p`
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bg};
  user-select: none;
  color: var(--text-color);
  cursor: pointer;
`;
const ContentAccordion = styled.ul`
  padding: 0 20px;
  max-height: 0;
  overflow: hidden;
  transition: 0.2s ease-in-out;
  background-color: #fff;
  &.active {
    /* background-color: #29ec25; */
  }
`;
const DropIcon = styled(ChevronDown)`
  color: var(--text-color);
  transition: 0.3s;
  transform: scale(0.7);
`;

