import { Col } from '../../layouts/Comp/GridSystem';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';
import Accordion from '~/components/Accordion/Accordion';
import SelectMulti from '~/components/Select/SelectMulti';
import ScrollToTop from '~/components/ScrollToTop/ScrollToTop';
const fakeData = [
  { name: 'Ha noi' },
  { name: 'Hai Duong' },
  { name: 'Da Nang' },
  { name: 'Can tho' },
  { name: 'Nam tu liem' },
  { name: 'An tho' },
];

function Home() {
  return (
    <>
      <div className="row">
        <Col>
          <Box>
            <Link to="/about">About page</Link>
          </Box>
        </Col>
        <Col>
          <Box>1</Box>
        </Col>
        <Col>
          <Box>1</Box>
        </Col>
        <Col>
          <Box>1</Box>
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
