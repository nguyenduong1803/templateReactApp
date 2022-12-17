import { useState } from 'react';

import styled from 'styled-components';
import Grid from '~/layouts/Comp/GridSystem/Grid';
import { Col } from '~/layouts/Comp/GridSystem';
import Drawer from '~/components/Atom/Drawer/Drawer';
import Skeleton from '~/components/Atom/Skeleton/Skeleton';
import Tippy from '~/components/Atom/Tippy/Tippy';
import Progress from '~/components/Atom/Progress/Progress';
import InputText from '~/components/Atom/Input/InputText';
import InputPassword from '~/components/Atom/Input/InputPassword';
import InputRange from '~/components/Atom/Input/InputRange';
import ScrollToTop from '~/components/Atom/ScrollToTop/ScrollToTop';
import Carosel from '~/components/Atom/Carousel/CarouselScroll';

const List = styled.li`
width: 100%;
  scroll-snap-align: center;
  display: inline-block;
  border-radius: 3px;
  border: 1px solid #ccc;
  transition: all 0.3s;
`;
const Button = styled.button`
  margin: 20px;
`;
function Product() {
  const [drawerActive, setDrawerActive] = useState(false);
  return (
    <Grid>
      <Drawer setDrawerActive={setDrawerActive} drawerActive={drawerActive}>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </Drawer>
      <div>
        <Button onClick={() => setDrawerActive(true)}>Click</Button>
        <Skeleton />
      </div>
      <Tippy title="Hover me">
        <ul>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
        </ul>
      </Tippy>
      <Progress percent={80} scale="100px" />
      <InputText name="name" />
      <InputPassword name="name" />
      <div>
        <InputRange />
      </div>
      <Carosel>
        <Col>  <List>1sdfasdf</List></Col>
        <Col>  <List>2</List></Col>
        <Col>  <List>4</List></Col>
        <Col>  <List>222</List></Col>
        <Col>  <List>fsadf</List></Col>
        <Col>  <List>2222222222</List></Col>
        <Col>  <List>1</List></Col>
        <Col>  <List>1</List></Col>
        <Col>  <List>1</List></Col>
        <Col>  <List>1</List></Col>
      </Carosel>
      <ScrollToTop />
    </Grid>
  );
}

export default Product;
