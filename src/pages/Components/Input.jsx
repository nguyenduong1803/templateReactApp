import React from 'react';
import InputPassword from '~/components/Atom/Input/InputPassword';
import InputRange from '~/components/Atom/Input/InputRange';
import InputText from '~/components/Atom/Input/InputText';
import SelectMulti from '~/components/Atom/Input/Select/SelectMulti';
import { Box, Col, Grid } from '~/layouts/Grid';
import Paper from '~/layouts/Styled/Paper';
const fakeData = [
  { name: 'Ha noi' },
  { name: 'Hai Duong' },
  { name: 'Da Nang' },
  { name: 'Can tho' },
  { name: 'Nam tu liem' },
  { name: 'An tho' }
];
function InputPage() {
  return (
    <div>
      <Grid container='container-fluid'>
        <Col lg={4}>
          <Paper className='p-24'>
            <h2 className='text-center'>Form login</h2>
            <Box className='my-24'>
              <InputText name='Nhập tên' />
            </Box>
            <Box className='my-24'>
              <InputPassword name='Nhập password' />
            </Box>
          </Paper>
        </Col>
        <Col></Col>
        <Col lg={5} md={5}>
          <InputRange />
          <InputRange color='var(--success)' />
          <InputRange color='var(--danger)' />
          <InputRange color='var(--warning)' />
        </Col>
        <Col lg={6} md={6}>
          <InputText name='Nhập tên' />
        </Col>

        <Col lg={6} md={6}>
          <SelectMulti name='Nhập tên thành phố' fakeData={fakeData} />
        </Col>
      </Grid>
    </div>
  );
}

export default InputPage;
