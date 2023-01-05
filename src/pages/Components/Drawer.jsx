import React, { useState } from 'react';
import Button from '~/components/Atom/Button/Button';
import Drawer from '~/components/Atom/Drawer/Drawer';
import { Col, Grid } from '~/layouts/Grid';

function DrawerPage() {
  const [drawerActive, setDrawerActive] = useState(false);

  return (
    <div>
      <Grid container='container-fluid'>
        <Col>
          <Drawer setDrawerActive={setDrawerActive} drawerActive={drawerActive}>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </Drawer>
          <Button
            onClick={() => {
              setDrawerActive(true);
            }}
          >
            Show Drawer
          </Button>
        </Col>
        `
      </Grid>
    </div>
  );
}
export default DrawerPage;
