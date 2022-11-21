import { Col } from '../../layouts/Comp/GridSystem';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';
import Accordion from '~/components/Accordion/Accordion';
import SelectMulti from '~/components/Select/SelectMulti';
import ScrollToTop from '~/components/ScrollToTop/ScrollToTop';
import Paper from '~/layouts/Comp/Styled/Paper';
import Pagination from '~/components/Pagination/Pagination';
const fakeData = [
  { name: 'Ha noi' },
  { name: 'Hai Duong' },
  { name: 'Da Nang' },
  { name: 'Can tho' },
  { name: 'Nam tu liem' },
  { name: 'An tho' },
];
const config = {
  currentPage: 1,
  totalPage: 100,
  link: 'http://foo.bar/?page=',
  cb: function () {},
};

function Home() {
  return (
    <>
      <div className="row">
        <Col>
          <Paper elevation={2}>
            <Link to="/about">About page</Link>
          </Paper>
        </Col>
        <Col>
          <Paper>Payper</Paper>
        </Col>
        <Col>
          <Paper elevation={2}>Payper</Paper>
        </Col>
        <Col>
          <Paper elevation={3}>Payper</Paper>
        </Col>
      </div>
      <Col>
        <Button to="/about">Button</Button>
        <Modal Button={ButtonShow} modalStyle={{ width: '500px' }}>
          <h2>hello</h2>
        </Modal>
      </Col>
      <div>
        <Accordion title="click me">
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </Accordion>
        <Accordion title="click me">
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </Accordion>
      </div>
      <ScrollToTop />
      <SelectMulti name="Nhập tên thành phố" fakeData={fakeData} />
      <div style={{ width: '640px' }}>
        <p className="textOverflow-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae hic fugiat maiores commodi sapiente qui
          similique alias eius, explicabo quo a odio culpa, corporis repudiandae nobis sunt nesciunt. Quis, autem.
        </p>
      </div>
      <Pagination {...config} />
    </>
  );
}
const ButtonShow = ({ onShouldModal }) => <Button onClick={() => onShouldModal(true)}>Show Modal </Button>;
const Box = styled.div`
  border: 1px solid rgb(99, 99, 99);
  text-align: center;
  border-radius: 5px;
`;
export default Home;
