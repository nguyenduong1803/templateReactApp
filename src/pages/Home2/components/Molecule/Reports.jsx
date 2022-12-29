import React from 'react';
import { Android, BugIcon, MacIcon, WindowIcon } from '~/assets/svg';
import { Col } from '~/layouts/Comp/GridSystem';
import Paper from '~/layouts/Styled/Paper';
import InsetColor from '~/layouts/Styled/Shapes/InsetColor';
const list = [
  {
    icon: Android,
    name: 'Weekly Sales',
    total: '786k',
    color: 'rgb(16, 57, 150)',
    bg: 'rgba(16, 57, 150, 0.24)',
    wrapColor: 'rgb(209, 233, 252)'
  },
  {
    icon: MacIcon,
    name: 'New users',
    total: '1.35M',
    color: 'rgb(12, 83, 183)',
    bg: 'rgba(16, 57, 150, 0.24)',
    wrapColor: 'rgb(208, 242, 255)'
  },
  {
    icon: WindowIcon,
    name: 'Weekly Downloads',
    total: '1.22M',
    color: 'rgb(183, 129, 3)',
    bg: 'rgba(183, 129, 3, 0.24)',
    wrapColor: 'rgb(255, 247, 205);'
  },
  {
    icon: BugIcon,
    name: 'Bug report',
    total: '186k',
    color: 'rgb(183, 33, 54)',
    bg: 'rgba(183, 33, 54, 0.24)',
    wrapColor: 'rgb(255, 231, 217)'
  }
];
function Reports() {
  return (
    <div className='row'>
      {list.map((item, index) => {
        const Icon = item.icon;
        return (
          <Col key={index}>
            <Paper elevation={0} r={10} bg={item.wrapColor}>
              <div className='d-flex p-24 flex-direction-column a-center'>
                <InsetColor color={item.color} bg={item.bg}>
                  <Icon />
                </InsetColor>
                <h2>{item.total}</h2>
                <p>{item.name}</p>
              </div>
            </Paper>
          </Col>
        );
      })}
    </div>
  );
}

export default Reports;
