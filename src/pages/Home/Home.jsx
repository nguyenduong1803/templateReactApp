import { Col, Grid } from '../../layouts/Comp/GridSystem';
import { Link } from 'react-router-dom';
import Button from '~/components/Atom/Button/Button';
import ClickAnimate from '~/components/Atom/CickAnimate/ClickAnimate';
import Modal from '~/components/Atom/Modal/Modal';
import Accordion from '~/components/Molecule/Accordion/Accordion';
import ScrollToTop from '~/components/Atom/ScrollToTop/ScrollToTop';
import SelectMulti from '~/components/Atom/Input/Select/SelectMulti';
import Pagination from '~/components/Atom/Pagination/Pagination';
import Paper from '~/layouts/Styled/Paper';
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
  cb: function () { },
};

function Home() {
  return (
    <Grid>
      <Col className="row">
        <Col>
          <Paper elevation={2}>
            <Link to="/about">About page</Link>
          </Paper>
        </Col>
        <Col>
          <Paper>Payper</Paper>
        </Col>
      </Col>
      <Col>
        <ClickAnimate> <Button to="/about">Button</Button></ClickAnimate>
        <Modal Button={ButtonShow} modalStyle={{ width: '500px' }}>
          <h2>hello</h2>
        </Modal>
        <ClickAnimate>  <div style={{ background: "#0f51e0" }}>Caklhsdfkjahsdfouasdhfoauihfa</div></ClickAnimate>
      </Col>
      <Col>
        <Accordion title="click me">
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </Accordion>
      </Col>
      <ScrollToTop />
      <SelectMulti name="Nhập tên thành phố" fakeData={fakeData} />
      <div style={{ width: '640px' }}>
        <p className="textOverflow-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae hic fugiat maiores commodi sapiente qui
          similique alias eius, explicabo quo a odio culpa, corporis repudiandae nobis sunt nesciunt. Quis, autem.
        </p>
      </div>
      <Pagination {...config} />
    </Grid>
  );
}
const ButtonShow = ({ onShouldModal }) => <ClickAnimate><Button onClick={() => onShouldModal(true)}>Show Modal </Button></ClickAnimate>;
export default Home;
