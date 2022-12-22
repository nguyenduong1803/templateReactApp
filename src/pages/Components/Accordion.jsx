import React from 'react';
import Accordion from '~/components/Molecule/Accordion/Accordion';
import { Col, Grid } from '~/layouts/Comp/GridSystem';
import { sidebars } from '~/layouts/LayoutSidebar/_mock';
import Paper from '~/layouts/Styled/Paper';
const list = [
  {
    id: 1,
    title: 'Choose Category',
    bg: '#ffffff',
    child: [
      {
        name: 'Samsung',
        id: 'samsung',
      },
      {
        name: 'IPhone',
        id: 'iphone',
      },
      {
        name: 'IPad',
        id: 'ipad',
      },
      {
        name: 'Computer',
        id: 'computer',
      },
    ],
  },
  {
    id: 2,
    title: 'Choose Phone',
    bg: '#ffffff',
    child: [
      {
        name: 'Samsung',
        id: 'samsung2',
      },
      {
        name: 'IPhone',
        id: 'iphone2',
      },
      {
        name: 'IPad',
        id: 'ipad2',
      },
      {
        name: 'Computer',
        id: 'computer2',
      },
    ],
  },
  {
    id: 3,
    title: 'Accordion',
    bg: '#ffffff',
    child: [
      {
        name: 'Samsung',
        id: 'samsung3',
      },
      {
        name: 'IPhone',
        id: 'iphone3',
      },
      {
        name: 'IPad',
        id: 'ipad3',
      },
      {
        name: 'Computer',
        id: 'computer3',
      },
    ],
  },
  {
    id: 4,
    title: 'Accordion 2',
    bg: '#ffffff',
    child: [
      {
        name: 'Samsung',
        id: 'samsung4',
      },
      {
        name: 'IPhone',
        id: 'iphone4',
      },
      {
        name: 'IPad',
        id: 'ipad4',
      },
      {
        name: 'Computer',
        id: 'computer4',
      },
    ],
  },
];
function Components() {

  return (
    <div>
      <h2 className="main-title pl-24">Accordion</h2>
      <Grid container="container-fluid" className="my-24">
        <Col>
          <Paper r={4} elevation={8}>
            {list.map((item) => {
              return (
                <Accordion key={item.id} title={item.title} bg={item.bg}>
                  {item.child.map((child) => (<li className="hover-default p-6" key={child.id}>{child.name}</li>))}
                </Accordion>
              );
            })}
          </Paper>
        </Col>
        <Col>
          <Paper r={4} elevation={1}>
            {list.map((item) => {
              return (
                <Accordion key={item.id} title={item.title} bg={item.bg} cancel>
                  {item.child.map((child) => (
                    <li className="hover-default" key={child.id}>{child.name}</li>
                  ))}
                </Accordion>
              );
            })}
          </Paper>
        </Col>
        <Col>
          <Paper r={4} elevation={0}>
            {list.map((item) => {
              return (
                <Accordion key={item.id} title={item.title} bg={item.bg}>
                  {item.child.map((child) => (
                    <li key={child.id} className="hover-default">{child.name}</li>
                  ))}
                </Accordion>
              );
            })}
          </Paper>
        </Col>
        <Col>
        <Paper elevation={2}>
        {sidebars?.map((sidebar,index) => {
           if(index>4){
            return (
                <Accordion
                  Icon={sidebar.icon}
                  hasOpen={sidebar.open}
                  title={sidebar.title}
                  key={sidebar.id}
                  h="40px"
                  p="6px 12px 6px 24px"
                  className="hover-default"
                  cancel
                >
                  {sidebar.element.map((item) => (
                    <li className=" line-h eihgt-36 hover-default" key={item.id}>
                      <li>{item.element}</li>
                    </li>
                  ))}
                </Accordion>
              );
           }
           return <></>
          })}
        </Paper>
        </Col>
      </Grid>
      <h3 className="pl-24 fz-24 fw-500">Source Code</h3>
    </div>
  );
}

export default Components;
