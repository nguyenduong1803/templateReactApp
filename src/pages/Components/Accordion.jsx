import React from 'react';
import Button from '~/components/Atom/Button/Button';
import Ripple from '~/components/Atom/Ripple/Ripple';
import Accordion from '~/components/Molecule/Accordion/Accordion';
import { Col, Grid } from '~/layouts/Comp/GridSystem';
import { sidebars } from '~/layouts/LayoutSidebar/_mock';
import Paper from '~/layouts/Styled/Paper';
import HighligtCode from '../HighligtCode';
const list = [
  {
    id: 1,
    title: 'Choose Category',
    bg: 'var(--white)',
    child: [
      {
        name: 'Samsung',
        id: 'samsung'
      },
      {
        name: 'IPhone',
        id: 'iphone'
      },
      {
        name: 'IPad',
        id: 'ipad'
      },
      {
        name: 'Computer',
        id: 'computer'
      }
    ]
  },
  {
    id: 2,
    title: 'Choose Phone',
    bg: 'var(--white)fff',
    child: [
      {
        name: 'Samsung',
        id: 'samsung2'
      },
      {
        name: 'IPhone',
        id: 'iphone2'
      },
      {
        name: 'IPad',
        id: 'ipad2'
      },
      {
        name: 'Computer',
        id: 'computer2'
      }
    ]
  },
  {
    id: 3,
    title: 'Accordion',
    bg: 'var(--white)',
    child: [
      {
        name: 'Samsung',
        id: 'samsung3'
      },
      {
        name: 'IPhone',
        id: 'iphone3'
      },
      {
        name: 'IPad',
        id: 'ipad3'
      },
      {
        name: 'Computer',
        id: 'computer3'
      }
    ]
  },
  {
    id: 4,
    title: 'Accordion 2',
    bg: 'var(--white)',
    child: [
      {
        name: 'Samsung',
        id: 'samsung4'
      },
      {
        name: 'IPhone',
        id: 'iphone4'
      },
      {
        name: 'IPad',
        id: 'ipad4'
      },
      {
        name: 'Computer',
        id: 'computer4'
      }
    ]
  }
];
function Components() {
  return (
    <div>
      <Grid className='p-12'>
        <Col lg={12} md={12} sm={12}>
          <h1>Accordion</h1>
          <p className='fz-18'>
            The accordion component allows the user to show and hide sections of related content on a page.
          </p>
        </Col>
        <Col sm={3}>
          <Paper r={4} elevation={8}>
            {list.map((item) => {
              return (
                <Accordion ripple rippleColor='#ccc' key={item.id} title={item.title} bg={item.bg}>
                  {item.child.map((child) => (
                    <li className='hover-default p-6' key={child.id}>
                      {child.name}
                    </li>
                  ))}
                </Accordion>
              );
            })}
          </Paper>
        </Col>
        <Col sm={3}>
          <Paper r={4} elevation={1}>
            {list.map((item) => {
              return (
                <Accordion key={item.id} title={item.title} bg={item.bg} cancel>
                  {item.child.map((child) => (
                    <li className='hover-default' key={child.id}>
                      {child.name}
                    </li>
                  ))}
                </Accordion>
              );
            })}
          </Paper>
        </Col>
        <Col sm={3}>
          <Paper r={4} elevation={0}>
            {list.map((item) => {
              return (
                <Accordion key={item.id} title={item.title} bg={item.bg}>
                  {item.child.map((child) => (
                    <li key={child.id} className='hover-default'>
                      {child.name}
                    </li>
                  ))}
                </Accordion>
              );
            })}
          </Paper>
        </Col>
        <Col sm={3}>
          <Paper elevation={2}>
            {sidebars?.map((sidebar, index) => {
              if (index > 4) {
                return (
                  <Accordion
                    Icon={sidebar.icon}
                    hasOpen={sidebar.open}
                    title={sidebar.title}
                    key={sidebar.id}
                    hover={{ backgroundColor: 'var(--hover-color)', color: 'red' }}
                    ripple
                  >
                    {sidebar.element.map((item) => (
                      <li className=' line-height-36 hover-default' key={item.id}>
                        <p>{item.element}</p>
                      </li>
                    ))}
                  </Accordion>
                );
              }
              return <React.Fragment key={index}></React.Fragment>;
            })}
          </Paper>
        </Col>
        <Col lg={12} md={12}>
          <h3 className='fz-24 fw-500'>Source Code</h3>

          <HighligtCode codeString={ArrcourdionString} />
        </Col>
      
      </Grid>
    </div>
  );
}

const ArrcourdionString = `
<Accordion
    Icon={sidebar.icon}
    hasOpen={sidebar.open}
    title={sidebar.title}
    key={sidebar.id}
    h='40px'
    p='6px 12px 6px 24px'
    hover={{ backgroundColor: 'var(--hover-color)', color: 'red' }}
    ripple
    >
      {sidebar.element.map((item) => (
        <li className=' line-height-36 hover-default' key={item.id}>
          <p>{item.element}</p>
        </li>
      ))}
</Accordion>
`;
export default Components;
