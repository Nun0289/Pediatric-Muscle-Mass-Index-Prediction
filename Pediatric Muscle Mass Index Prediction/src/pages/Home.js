import { Container, Form, Button } from "react-bootstrap";
import "../css/home.css";

const Home = () => {
  return (
    <>
      <div className="firstSection">
        <div className="titleMain">
          Body Composition and Muscle Mass Index<br></br>Analytic Program for
          Children and Adult
        </div>
        <div className="descMain">
          โปรแกรมวิเคราะห์องค์ประกอบร่างกายและดัชนีมวลกล้ามเนื้อสำหรับเด็กและผู้ใหญ่
        </div>
      </div>
      <div className="secondSection"></div>
      <div className="thirdSection">
        <div className="boxWhite">
          <Container style={{ padding: "5%" }}>
            <div className="titleCalc">โปรแกรมคำนวณ</div>
            <Form>
              <Form.Group>
                <Form.Label>เพศ</Form.Label>
                <Form.Check
                  label="ชาย"
                  type="radio"
                  name="gender"
                  defaultChecked
                />
                <Form.Check label="หญิง" type="radio" name="gender" />
              </Form.Group>
              <Form.Group>
                <Form.Label>อายุ (ปี)</Form.Label>
                <Form.Control type="number" min="1" />
              </Form.Group>
              <Form.Group>
                <Form.Label>ส่วนสูง (เซนติเมตร)</Form.Label>
                <Form.Control type="number" min="1" />
              </Form.Group>
              <Form.Group>
                <Form.Label>น้ำหนัก (กิโลกรัม)</Form.Label>
                <Form.Control type="number" min="1" />
              </Form.Group>
              <Form.Group>
                <Form.Label>มวลกล้ามเนื้อ (กิโลกรัม)</Form.Label>
                <Form.Control type="number" min="1" />
              </Form.Group>
              <Button variant="primary" className="w-100">
                คำนวณ
              </Button>
            </Form>
          </Container>
        </div>
      </div>
      <div className="footer">something that i don't know</div>
    </>
  );
};

export default Home;
