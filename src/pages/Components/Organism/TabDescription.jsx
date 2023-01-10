import React from 'react';
import Tabs from '~/components/Molecule/Tabs/Tabs';
import Table from './Table';

function TabDescription() {
  const labels = ['Name', 'Type', 'Description', 'Default', 'Controls'];
  const listTab = [
    {
      name: 'Props',
      component: <Table labels={labels} />
    },
    {
      name: 'Actions',
      component: Table
    },
    {
      name: 'Story',
      component: Table
    },
    {
      name: 'Accessiblity',
      component: Table
    },
    {
      name: 'Jest',
      component: Table
    }
  ];

  return (
    <div>
      <Tabs listTab={listTab} />
    </div>
  );
}

export default TabDescription;
