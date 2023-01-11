import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const WrapTabs = styled.section`
  height: 60px;
  align-items: center;
`;
const TabItemAccount = styled.div`
  flex: 1;
  text-align: center;
  border-top: 3px solid #f0f4fa !important;
  border-radius: 0;
  font-size: 15px;
  font-weight: 600;
  background-color: #f0f4fa;
  color: #273044;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  border: 1px solid var(--border-color-light);
  &.active {
    border-top-color: #385bce !important;
    background-color: var(--white);
    color: #273044 !important;
  }
`;
const WrapComponent = styled.div`
  margin: 48px 0;
`;
function Tabs({ listTab }) {
  const [active, setActive] = useState(0);
  const component = listTab[active].component;

  return (
    <>
      <WrapTabs className='d-flex'>
        {listTab.map((tab, index) => {
          return (
            <TabItemAccount key={index} onClick={() => setActive(index)} className={active === index && 'active'}>
              <p>{tab.name}</p>
            </TabItemAccount>
          );
        })}
      </WrapTabs>
      <WrapComponent>{component}</WrapComponent>
    </>
  );
}
Tabs.prototype = {
  listTab: PropTypes.object.isRequired
};
export default Tabs;
