import { Col } from "../../layouts/Comp/GridSystem";
import { Link } from "react-router-dom"
import styles from "./Home.module.css";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button"
import Accordion from "~/components/Accordion/Accordion";
import SelectMulti from "~/components/Select/SelectMulti";
import ScrollToTop from "~/components/ScrollToTop/ScrollToTop";
const fakeData = [
  { name: "Ha noi" },
  { name: "Hai Duong" },
  { name: "Da Nang" },
  { name: "Can tho" },
  { name: "Nam tu liem" },
  { name: "An tho" },

]
function Home() {
  return (
    <>
      <div className="row">
        <Col>
          <div className={styles.box}>
            <Link to="/about">About page</Link>
          </div>
        </Col>
        <Col>
          <div className={styles.box}>1</div>
        </Col>
        <Col>
          <div className={styles.box}>1</div>
        </Col>
        <Col>
          <div className={styles.box}>1</div>
        </Col>
      </div>
      <Col>
        <Button to="/about">Button</Button>
        <Modal Button={ButtonShow} modalStyle={{ width: "500px" }} >
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
      <ScrollToTop/>
      <SelectMulti name="Nhập tên thành phố" fakeData={fakeData} />
     <div  style={{width:"40px"}}><p className="textOverflow-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae hic fugiat maiores commodi sapiente qui similique alias eius, explicabo quo a odio culpa, corporis repudiandae nobis sunt nesciunt. Quis, autem.</p></div>
    </>
  )
}
const ButtonShow = ({ onShouldModal }) => (
  <Button onClick={() => onShouldModal(true)}>Show Modal </Button>
)
export default Home