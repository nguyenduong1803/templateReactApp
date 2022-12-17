import { useState } from 'react';

import Drawer from '~/components/Drawer/Drawer';
import styled from 'styled-components';
import Skeleton from '~/components/Skeleton/Skeleton';
import Tippy from '~/components/Tippy/Tippy';
import Progress from '~/components/Progress/Progress';
import InputText from '~/components/Input/InputText';
import InputPassword from '~/components/Input/InputPassword';
// import InputRange from '~/components/Input/InputRange';
import CarouselScroll from '~/components/Carousel/CarouselScroll';
import { Col } from '~/layouts/Comp/GridSystem';
import InputRange from '~/components/Input/InputRange';
import ScrollToTop from '~/components/ScrollToTop/ScrollToTop';

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
    <>
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
      <CarouselScroll>
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
      </CarouselScroll>
      <ScrollToTop />
    </>
  );
}

export default Product;
