import React from 'react';
import Accordion from '~/components/Accordion/Accordion';
import { sidebars } from './_mock';

function Sidebar() {
  return (
    <aside className="border-right vh-100 scrollbar-1 " >
      {sidebars?.map((sidebar) => {
        return (
          <Accordion title={sidebar.title} key={sidebar.id} h="40px" p="6px 12px 6px 24px"bg="var(--bg-default)">
            {sidebar.element.map((item) => (
              <li className="pl-12 line-heihgt-36" key={item.id}>{item.element}</li>
            ))}
          </Accordion>
        );
      })}
    </aside>
  );
}

export default Sidebar;
