import React, { useState } from 'react';
import Accordion from '~/components/Molecule/Accordion/Accordion';
import { Col, Container, Grid } from '~/layouts/Grid';
import { sidebars } from '~/layouts/LayoutSidebar/_mock';
import Paper from '~/layouts/Styled/Paper';
import HighligtCode from '../HighligtCode';
import ActionComponent from './Molecule/ActionComponent';
import ImageAds from './Molecule/ImageAds';
import BaseComponent from './Organism/BaseComponent';
import { list, mockData, renderString } from './_mock';

function Components() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Container size='fluid'>
        <div className='row'>
          <Col sm={12} className='py-0'>
            <div className='section-space'>
              <h1>Accordion</h1>
              <p>The accordion component allows the user to show and hide sections of related content on a page.</p>
            </div>
            <ImageAds />
            <div className='section-space'>
              <p>
                Buttons communicate actions that users can take. They are typically placed throughout your UI, in places
                like:
              </p>
              <ul className='list-style-circle'>
                <li>Modal windows</li>
                <li>Forms</li>
                <li>Cards</li>
                <li>Toolbars</li>
              </ul>
            </div>
            <div className='section-space'>
              <h2>Mock Data Accordion</h2>
              <ActionComponent setOpen={setOpen} />
              <HighligtCode open={open} codeString={mockData} />
            </div>
            <BaseComponent
              title='Basic component'
              description='The Button comes with three variants: text (default), contained, and outlined.'
              mockData={renderString[0]}
            >
              <Paper r={4} elevation={8} w='400px'>
                {list.map((item) => {
                  return (
                    <Accordion key={item.id} title={item.title}>
                      {item.child.map((child) => (
                        <li className='hover-default p-6' key={child.id}>
                          {child.name}
                        </li>
                      ))}
                    </Accordion>
                  );
                })}
              </Paper>
            </BaseComponent>
            <BaseComponent
              title='Ripple Accordion'
              description='Extend the default behavior to create an accordion with the Accordion component.'
              mockData={renderString[1]}
            >
              <Paper r={4} elevation={1} w='400px'>
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
            </BaseComponent>
            <BaseComponent
              title='Ripple Accordion'
              description='Extend the default behavior to create an accordion with the Accordion component.'
              mockData={renderString[2]}
            >
              <Paper elevation={3} w='400px'>
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
            </BaseComponent>
          </Col>
        </div>
      </Container>
    </div>
  );
}

export default Components;
