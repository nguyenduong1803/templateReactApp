import { Box, Col, Container, Grid, Section } from '../../layouts/Comp/GridSystem';
import { Link } from 'react-router-dom';
import Button from '~/components/Atom/Button/Button';
import ClickAnimate from '~/components/Atom/CickAnimate/ClickAnimate';
import Modal from '~/components/Molecule/Modal/Modal';
import Accordion from '~/components/Molecule/Accordion/Accordion';
import ScrollToTop from '~/components/Atom/ScrollToTop/ScrollToTop';
import SelectMulti from '~/components/Atom/Input/Select/SelectMulti';
import Pagination from '~/components/Atom/Pagination/Pagination';
import Paper from '~/layouts/Styled/Paper';
import Badge from '~/components/Atom/Badge/Badge';
import DropDown from '~/components/Molecule/Dropdown/Dropdown';
import { useState } from 'react';
const fakeData = [
  { name: 'Ha noi' },
  { name: 'Hai Duong' },
  { name: 'Da Nang' },
  { name: 'Can tho' },
  { name: 'Nam tu liem' },
  { name: 'An tho' }
];
const config = {
  currentPage: 1,
  totalPage: 100,
  link: 'http://foo.bar/?page=',
  cb: function () {}
};

function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <Grid>
        <Col lg={12}>
          <Paper elevation={2}>
            <Link to='/about'>About page</Link>
          </Paper>
        </Col>
        <Col lg={12}>
          <ClickAnimate>
            <Button href='/about'>Button</Button>
          </ClickAnimate>
        </Col>
        <Col lg={12}>
        </Col>
        <Col lg={12}>
          <Modal Button={ButtonShow} modalStyle={{ width: '500px' }}>
            <h2>hello</h2>
          </Modal>
          <ClickAnimate>
            <div style={{ background: '#0f51e0' }}>Caklhsdfkjahsdfouasdhfoauihfa</div>
          </ClickAnimate>
        </Col>
        <Col lg={12}>
          <Accordion title='click me'>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </Accordion>
          <Badge number={2}>
            <h2>Hello</h2>
          </Badge>
        </Col>
        <ScrollToTop />
        <Box md={{ fontSize: '20rem' }}>teesst</Box>
        <Col lg={12} md={12}>
          <Box w='20rem'>
            <Button onClick={() => setShowDropdown(true)}>Show Drop</Button>
            <DropDown showDropdown={showDropdown} setShowDropdown={setShowDropdown}>
              <Paper elevation={10} className='p-12'>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
              </Paper>
            </DropDown>
          </Box>
        </Col>
        <SelectMulti name='Nhập tên thành phố' fakeData={fakeData} />
        <div style={{ width: '640px' }} className='overflow-hidden'>
          <p className='textOverflow-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae hic fugiat maiores commodi sapiente qui
            similique alias eius, explicabo quo a odio culpa, corporis repudiandae nobis sunt nesciunt. Quis, autem.
          </p>
        </div>
        <Pagination {...config} />
      </Grid>
      <Container size='âsdfadsf'>
        <Section row>
          <Col>
            <div className='border'>1</div>
          </Col>
          <Col>
            <div className='border'>2</div>
          </Col>
          <Col>
            <div className='border'>3</div>
          </Col>
          <Col>
            <div className='border'>4</div>
          </Col>
        </Section>
        <Section className='row'>asdhfalk</Section>
      </Container>
    </>
  );
}
const ButtonShow = ({ onShouldModal }) => (
  <ClickAnimate>
    <Button onClick={() => onShouldModal(true)}>Show Modal</Button>
  </ClickAnimate>
);
export default Home;
