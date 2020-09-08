import React, { useState } from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import { Collapse, CardBody, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";
import PNLegiyam from "./PNLegiyam";

const Example = (props) => {
  const [card1collapse, setcard1Collapse] = useState(false);
  const togglecard1 = () => setcard1Collapse(!card1collapse);

  const [card2collapse, setcard2Collapse] = useState(false);
  const togglecard2 = () => setcard2Collapse(!card2collapse);

  const [card3collapse, setcard3Collapse] = useState(false);
  const togglecard3 = () => setcard3Collapse(!card3collapse);

  const [card4collapse, setcard4Collapse] = useState(false);
  const togglecard4 = () => setcard4Collapse(!card4collapse);

  const [card5collapse, setcard5Collapse] = useState(false);
  const togglecard5 = () => setcard5Collapse(!card5collapse);

  const [card6collapse, setcard6Collapse] = useState(false);
  const togglecard6 = () => setcard6Collapse(!card6collapse);

  const [card7collapse, setcard7Collapse] = useState(false);
  const togglecard7 = () => setcard7Collapse(!card7collapse);

  const [card8collapse, setcard8Collapse] = useState(false);
  const togglecard8 = () => setcard8Collapse(!card8collapse);

  return (
    <div>
      <Row>
        <Col sm="3">
          <Card body>
            <Button
              color="light"
              className="text-dark "
              onClick={togglecard1}
              style={{ marginBottom: "1rem" }}
            >
              Legiyam
            </Button>
            <Collapse isOpen={card1collapse}>
              <Card>
                <CardBody className="text-left">
                  <ul>
                    <li>Kadugu Legiyam</li>
                    <li>Poondu legiyam</li>
                    <li>Sukku legiyam</li>
                    <li>Prasava legiyam</li>
                  </ul>
                </CardBody>
                <Link to="/PNLegiyam" className="text-center">
                  {" "}
                  <Button
                    color="light"
                    className="text-dark stretch-link"
                    style={{ marginBottom: "1rem" }}
                  >
                    Know more
                  </Button>
                </Link>
              </Card>
            </Collapse>
          </Card>
        </Col>
        <Col sm="3">
          <Card body>
            <Button
              color="light"
              className="text-dark"
              onClick={togglecard5}
              style={{ marginBottom: "1rem" }}
            >
              Pathiya Diet
            </Button>
            <Collapse isOpen={card5collapse}>
              <Card>
                <CardBody className="text-left">
                  <ul>
                    <li>First 3 day diet</li>
                    <li>First 28 days diet</li>
                    <li>Foods to avoid</li>
                    <li>First 28 days Diet Chart</li>
                  </ul>
                </CardBody>

                <Link to="/PNPathiyaDiet" className="text-center">
                  {" "}
                  <Button
                    color="light"
                    className="text-dark"
                    style={{ marginBottom: "1rem" }}
                  >
                    Know more
                  </Button>
                </Link>
              </Card>
            </Collapse>
          </Card>
        </Col>
        <Col sm="3">
          <Card body>
            <Button
              color="light"
              className="text-dark"
              onClick={togglecard6}
              style={{ marginBottom: "1rem" }}
            >
              Baby Care
            </Button>

            <Collapse isOpen={card6collapse}>
              <Card>
                <CardBody className="text-left">
                 
                </CardBody>
                <Link to="/PNLegiyam" className="text-center">
                  {" "}
                  <Button
                    color="light"
                    className="text-dark"
                    style={{ marginBottom: "1rem" }}
                  >
                    Know more
                  </Button>
                </Link>
              </Card>
            </Collapse>
          </Card>
        </Col>
        <Col sm="3">
          <Card body>
            <Button
              color="light"
              className="text-dark"
              onClick={togglecard7}
              style={{ marginBottom: "1rem" }}
            >
              Lactation
            </Button>
            <Collapse isOpen={card7collapse}>
              <Card>
                <CardBody className="text-left">
                  <ul>
                    <li>Breastfeeding Diet</li>
                    <li>Foods to increase milk supply</li>
                    <li>Tips to increase secretion</li>
                  </ul>
                </CardBody>
                <Link to="/Lactation" className="text-center">
                  {" "}
                  <Button
                    color="light"
                    className="text-dark"
                    style={{ marginBottom: "1rem" }}
                  >
                    Know more
                  </Button>
                </Link>
              </Card>
            </Collapse>
          </Card>
        </Col>

        <Col sm="3">
          <Card body>
            <Button
              color="light"
              className="text-dark"
              onClick={togglecard2}
              style={{ marginBottom: "1rem" }}
            >
              Marundhu Podi
            </Button>
            <Collapse isOpen={card2collapse}>
              <Card>
                <CardBody className="text-left">
                  <ul>
                    <li>Kuzhambu Podi</li>
                    <li>Paruppu podi</li>
                    <li>Karuveppilai Podi</li>
                  </ul>
                </CardBody>
                <Link to="/PNMarundhuPodi" className="text-center">
                  {" "}
                  <Button
                    color="light"
                    className="text-dark"
                    style={{ marginBottom: "1rem" }}
                  >
                    Know more
                  </Button>
                </Link>
              </Card>
            </Collapse>
          </Card>
        </Col>
        <Col sm="3">
          <Card body>
            <Button
              color="light"
              className="text-dark"
              onClick={togglecard3}
              style={{ marginBottom: "1rem" }}
            >
              Pathiya Sapadu
            </Button>
            <Collapse isOpen={card3collapse}>
              <Card>
                <CardBody className="text-left">
                  <ul>
                    <li>Milagu Podi Kuzhambu</li>
                    <li>Poondu Kuzhambu</li>
                    <li>Marundhu Kuzhambu</li>
                    <li>Pathiya Rasam</li>
                    <li>Vendhaya kazhi</li>
                  </ul>
                </CardBody>
                <Link to="/PNPathiyaSapadu" className="text-center">
                  {" "}
                  <Button
                    color="light"
                    className="text-dark"
                    style={{ marginBottom: "1rem" }}
                  >
                    Know more
                  </Button>
                </Link>
              </Card>
            </Collapse>
          </Card>
        </Col>
        <Col sm="3">
          <Card body>
            <Button
              color="light"
              className="text-dark"
              onClick={togglecard4}
              style={{ marginBottom: "1rem" }}
            >
              Pathiya Kuzhiyal
            </Button>
            <Collapse isOpen={card4collapse}>
              <Card>
                <CardBody className="text-left">
                  <ul>
                    <li>Kuzhiyal Podi</li>
                    <li>Bath procedure</li>
                    <li>After Bath procedure</li>
                    <li>Pugai Poduthal</li>
                  </ul>
                </CardBody>
                <Link to="/PNKuzhiyal" className="text-center">
                  {" "}
                  <Button
                    color="light"
                    className="text-dark"
                    style={{ marginBottom: "1rem" }}
                  >
                    Know more
                  </Button>
                </Link>
              </Card>
            </Collapse>
          </Card>
        </Col>
        <Col sm="3">
          <Card body>
            <Button
              color="light"
              className="text-dark"
              onClick={togglecard8}
              style={{ marginBottom: "1rem" }}
            >
              Dhristi kalippu
            </Button>
          </Card>
          <Collapse isOpen={card8collapse}>
            <Card>
              <CardBody className="text-left">
                <ul>
                  <li>Aarathi procedure</li>
                  <li>Dhristi Sapadu</li>
                  <li>Dhristi kalippu for baby</li>
                </ul>
              </CardBody>
              <Link to="/PNDhristi" className="text-center">
                {" "}
                <Button
                  color="light"
                  className="text-dark"
                  style={{ marginBottom: "1rem" }}
                >
                  Know more
                </Button>
              </Link>
            </Card>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};

export default Example;
