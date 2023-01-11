import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ChevronDown } from '~/assets/svg';
import Ripple from '~/components/Atom/Ripple/Ripple';

export default function Accordion(props) {
  const { title, Icon, hasOpen, children, p, hover, className, bg, rippleColor, ripple, ...passProps } = props;
  const [open, setOpen] = useState(false);
  const refContent = useRef();
  useEffect(() => {
    setOpen(hasOpen);
  }, [hasOpen]);
  return (
    <>
      <ButtonAccordion
        onClick={() => setOpen(!open)}
        p={p}
        bg={bg}
        hover={hover}
        className={`d-flex j-between a-center cursor-pointer position-relative overflow-hidden ${className}`}
        {...passProps}
      >
        {Icon && (
          <div className='d-flex gap-12 a-center'>
            <Icon
              width='1.9rem'
              fill='#4e4e4e'
              className='position-relative pointer-events-none'
              style={{ top: '-1px' }}
            />
            {title}
          </div>
        )}
        {!Icon && title}
        {ripple && <Ripple color={rippleColor} duration={1200} />}
        <DropIcon style={open ? { transform: `scale(0.8) rotate(180deg) ` } : {}} />
      </ButtonAccordion>
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
  bg: PropTypes.string,
  hasOpen: PropTypes.bool,
  hover: PropTypes.object,
  className: PropTypes.string,
  ripple: PropTypes.bool
};
Accordion.defaultProps = {
  p: '8px 12px 8px 24px',
  className: '',
  bg: 'var(--white)',
  rippleColor: '#fcfcfc'
};
const ButtonAccordion = styled.div(({ hover, ...props }) => ({
  backgroundColor: props.bg,
  padding: props.p,
  userSelect: 'none',
  ':hover': hover
}));
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
