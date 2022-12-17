import React from 'react';
import Accordion from '~/components/Atom/Accordion/Accordion';
import { sidebars } from './_mock';

function Sidebar() {
    return (
        <aside className="scrollbar-1 position-sticky pt-24 border-right" style={{ height: "100vh", top: "85px"}}>
            {sidebars?.map((sidebar) => {
                return (
                    <Accordion hasOpen={sidebar.open} title={sidebar.title} key={sidebar.id} h="40px" p="6px 12px 6px 24px" bg="var(--bg-default)">
                        {sidebar.element.map((item) => (
                            <li className="pl-12 line-heihgt-36 " key={item.id}>{item.element}</li>
                        ))}
                    </Accordion>
                );
            })}
        </aside>
    );
}

export default Sidebar;
