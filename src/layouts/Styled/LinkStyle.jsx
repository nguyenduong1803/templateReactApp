import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkActive = styled(NavLink)`
  display: block;
  color: var(--text-color);
  border-radius: 4px;
  padding: 4px 12px;
  &.active {
    background-color: ${(props) => props.bg};
    color: #000;
  }
  @media (max-width: 61.9375em) {
    padding: 6px 0;
    border-bottom: 1px solid var(--border-color-light);
  }
`;
