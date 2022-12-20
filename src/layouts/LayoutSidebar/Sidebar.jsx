import React from 'react';
import Accordion from '~/components/Molecule/Accordion/Accordion';
import { NavLinkActive } from '../Styled/LinkStyle';
import { sidebars } from './_mock';

function Sidebar() {
  return (
    <aside className="scrollbar-1 position-sticky pt-24 t-0" >
      <div className="showScrollbar-content">
        {sidebars?.map((sidebar) => {
          return (
            <Accordion
              Icon={sidebar.icon}
              hasOpen={sidebar.open}
              title={sidebar.title}
              key={sidebar.id}
              p="6px 12px 6px 24px"
              bg="var(--bg-default)"
              className="hover-default"
              cancel
            >
              {sidebar.element.map((item) => (
                <li className=" line-h eihgt-36 hover-default" key={item.id}>
                  <NavLinkActive to={`docs/${item.id}`} bg="var(--hover-color)">
                    {item.element}
                  </NavLinkActive>
                </li>
              ))}
            </Accordion>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
