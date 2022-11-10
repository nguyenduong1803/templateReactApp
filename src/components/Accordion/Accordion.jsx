import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ChevronDown } from '~/assets/svg';

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  const refContent = useRef();
  return (
    <Wrap>
      <ButtonAccordion onClick={() => setOpen(!open)} className="d-flex j-between a-center">
        {title}
        <DropIcon style={open ? { transform: `rotate(180deg)` } : {}} />
      </ButtonAccordion>
      <ContentAccordion
        ref={refContent}
        className={open && 'active'}
        style={open ? { maxHeight: `${refContent.current.scrollHeight}px`, marginBottom: '12px' } : {}}
      >
        {children}
      </ContentAccordion>
    </Wrap>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const ButtonAccordion = styled.h3`
  background-color: #fff;
  user-select: none;
  color: var(--text-color);

  padding: 6px;
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
`;
const Wrap = styled.section`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;
