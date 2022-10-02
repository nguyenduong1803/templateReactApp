import { Col } from "../../layouts/GridSystem";
import { Link } from "react-router-dom"
import styles from "./Home.module.css";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button"
import Accordion from "~/components/Accordion/Accordion";
import SelectMulti from "~/components/Select/SelectMulti";
const fakeData = [
  { name: "Ha noi" },
  { name: "Hai Duong" },
  { name: "Da Nang" },
  { name: "Can tho" },
]
function Home() {
  return (
    <>
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
      </div>
      <SelectMulti name="Nhập tên thành phố" fakeData={fakeData} />
    </>
  )
}
const ButtonShow = ({ onShouldModal }) => (
  <Button onClick={() => onShouldModal(true)}>Show Modal </Button>
)
export default Home