import React from 'react';
import Tippy from '~/components/Atom/Tippy/Tippy';
import { Col, Grid } from '~/layouts/Grid';

function TippyPage() {
  return (
    <div>
      <Grid container='container-fluid my-24'>
        <Col>
          <Tippy title='Hover me'>Content hover!!</Tippy>
        </Col>
        <Col>
          <Tippy elevation={2} title='Hover me'>
            Content hover!!
          </Tippy>
        </Col>
        <Col>
          <Tippy elevation={3} title='Hover me'>
            Content hover!!
          </Tippy>
        </Col>
        <Col>
          <Tippy elevation={4} title='Hover me'>
            Content hover!!
          </Tippy>
        </Col>
        <Col>
          <Tippy elevation={5} title='Hover me'>
            Content hover!!
          </Tippy>
        </Col>
        <Col>
          <Tippy elevation={6} title='Hover me'>
            Content hover!!
          </Tippy>
        </Col>
        <Col>
          <Tippy elevation={9} title='Hover me'>
            Content hover!!
          </Tippy>
        </Col>
        <Col>
          <Tippy elevation={8} title='Hover me'>
            Content hover!!
          </Tippy>
        </Col>
      </Grid>
    </div>
  );
}

export default TippyPage;
