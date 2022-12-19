import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ChevronDown } from '~/assets/svg';
import ClickAnimate from '../../Atom/CickAnimate/ClickAnimate';

export default function Accordion({
  title,
  Icon,
  hasOpen = false,
  children,
  p = '6px',
  hover = '',
  className = '',
  bg = '#fff',
  cancel = false,
  ...props
}) {
  const [open, setOpen] = useState(false);
  const refContent = useRef();
  useEffect(() => {
    setOpen(hasOpen);
  }, [hasOpen]);
  return (
    <>
      <ClickAnimate cancel={cancel} className={hover} rippleColor="#ccc">
        <ButtonAccordion
          onClick={() => setOpen(!open)}
          padding={p}
          bg={bg}
          className={`d-flex j-between a-center ${className}`}
          {...props}
        >
          {Icon && (
            <div className="d-flex gap-12 a-center">
              <Icon width="1.9rem" fill="#4e4e4e" className="position-relative" style={{ top: '-1px', pointerEvents: "none" }} />
              {title}
            </div>
          )}
          {!Icon && title}
          <DropIcon style={open ? { transform: `scale(0.8) rotate(180deg) ` } : {}} />
        </ButtonAccordion>
      </ClickAnimate>
      <ContentAccordion
        ref={refContent}
        className={open && 'active'}
        style={open ? { maxHeight: `${refContent.current.scrollHeight}px` } : {}}
      >
        {children}
      </ContentAccordion>
    </>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  hasOpen: PropTypes.bool,
  hover: PropTypes.string,
  className: PropTypes.string,
  cancel: PropTypes.bool
};

const ButtonAccordion = styled.div`
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bg};
  user-select: none;
  color: var(--text-color);
  & + &{
  border-bottom-left-radius:unset;
  border-bottom-right-radius:unset;
  }
  cursor: pointer;
`;
const ContentAccordion = styled.ul`
  padding: 0 20px;
  max-height: 0;
  overflow: hidden;
  transition: 0.2s ease-in-out;
  background-color: inherit;
  &.active {
    /* background-color: #29ec25; */
  }
`;
const DropIcon = styled(ChevronDown)`
  color: var(--text-color);
  transition: 0.3s;
  transform: scale(0.7);
  pointer-events: none;
`;
