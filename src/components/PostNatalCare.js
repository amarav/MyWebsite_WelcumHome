import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  Button,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";
import IngredientsKuzhambuPodi, {
  ThreeDayMarundhu,
  PoonduLegiyam,
  PrasavaLegiyam,
  VendayaKazhi,
  HerbalBath,
  AfterBath,
  AfterBathBaby,
  DhristiSapadu,
  ParuppuPodi,
  KaruveppilaiPodi,
  KuzhiyalPodi,
  RubiAmla,
  PalaThailam,
  SittramuttiThailam,
  MilaguPodiKuzhambu,
  PathiyaRasam,
  PoonduKuzhambu,
  Pugai,
  AvoidFoods,
} from "./PNIngredients.js";
import PNPortfolio from "./PNPortfolio";

function PostNatalCare() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Postnatal Care</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="col-10 col-md m-1">
          <section className="page-section bg-light">
            <div className="container-fluid">
              <div className="text-center">
                <h3 className="section-heading text-uppercase">
                  Post-natal diet
                </h3>
                <h3 className="section-subheading text-muted">
                  The complete postpartum care
                </h3>
              </div>
            </div>
          </section>
          <div className="col-md-8 offset-md-4">
            {" "}
            <img
              className="img-fluid"
              src={require("../assets/img/portfolio/postpartumbaby.jpg")}
              width="350"
              height="350"
              alt=""
            />
          </div>

          <div className="col-md-8 offset-md-2">
            <br />
            Post-partum is the phase after delivery and usually termed as the
            Fourth trimester. After nine months of pregnancy journey and a tough
            delivery,a new mother's body has undergone significant and drastic
            changes. Meeting the demands of a newborn and taking care of
            herfself is indeed a difficult phase for a new mother. During this
            transition of motherhood, its important to remember that this phase
            will pass and do not miss out on taking care and improving your
            health.
            <br></br>
            <br></br>
            With proper diet and supplements, its possible to regain your
            strength quickly. Its much required for your body to heal quicker
            and completely. This phase is important so that you stay fit for
            long term and not to feel exhausted for your next pregnancy if your
            planning. Your body and especially uterus takes time to heal and its
            recovery needs to be supported.
            <br></br>
            <br></br>
          </div>

          <div className="col-10 col-md m-1">
            <PNPortfolio />
          </div>

          <div className="col-10 col-md m-1">
            <Row>
              
              <Col sm="3">
                <div className="card h-100 mx-auto">
                  <div
                    className="card-body"
                    inverse
                    style={{ backgroundColor: "#fec503", borderColor: "#333" }}
                  >
                    <h4 className="card-title">Post-natal kit</h4>
                    <br/>
                    <p className="card-text text-left">
                      <ul>
                        <li>Garlic legiyam</li>
                        <li>Dried ginger legiyam</li>
                        <li>Mustard legiyam</li>
                        <li>Prasava legiyam</li>
                        <li>Marundhu kuzhambu Podi</li>
                      </ul>
                    </p>
                  </div>
                  <div className="card-footer  text-center mycard-footer">
                    <Link to="/PNLegiyam" className="btn btn-dark">
                      BUY NOW
                    </Link>
                  </div>
                </div>
              </Col>
              
              <Col sm="3">
                <div className="card h-100 mx-auto">
                  <div
                    className="card-body"
                    inverse
                    style={{ backgroundColor: "#fec503", borderColor: "#333" }}
                  >
                    <h4 className="card-title">Herbal Tea</h4>
                    <h6 className="text-italic text-center">Benefits</h6>
                    <p className="card-text text-left">
                      <ul>
                        <li>Boost immunity</li>
                        <li>Improve digestion</li>
                        <li>Promotes appetite</li>
                        <li>Helps detoxification</li>
                        <li>Weight loss</li>
                        <li>Reduce inflammation</li>                        
                        <li>Relieve stress</li>
                      </ul>
                    </p>
                  </div>
                  <div className="card-footer  text-center mycard-footer">
                    <Link to="/PNLegiyam" className="btn btn-dark">
                      BUY NOW
                    </Link>
                  </div>
                </div>
              </Col>
              <Col sm="4">
                <Link to="/PNWhytocare'">
                  <div class="mysmcard">
                    <div className="mysmcard-image">
                      <img
                        class="mx-auto rounded-circle mysmcard-image"
                        src="../assets/img/blog/advise.jpg"
                        alt=""
                      />
                    </div>
                    <div className="mysmcard-content">
                      <p className="font-weight-bold">
                        Importance of post-natal care
                      </p>
                    </div>
                  </div>
                </Link>

                <Link to={`/blog/3`}>
                  <div class="mysmcard">
                    <div className="mysmcard-image">
                      <img
                        class="mx-auto rounded-circle mysmcard-image"
                        src="../assets/img/blog/whytocare.jpg"
                        alt=""
                      />
                    </div>
                    <div className="mysmcard-content">
                      <p className="font-weight-bold">
                        Top 10 tips for women after birth
                      </p>
                    </div>
                  </div>
                </Link>
                
                <Link to={`/blog/5`}>
                  <div class="mysmcard">
                    <div className="mysmcard-image">
                      <img
                        class="mx-auto rounded-circle mysmcard-image"
                        src="../assets/img/blog/milksecrete.jpg"
                        alt=""
                      />
                    </div>
                    <div className="mysmcard-content">
                      <p className="font-weight-bold">
                        Top 10 tips to increase breast milk secretion
                      </p>
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
          </div>

        
        </div>
      </div>
    </div>
  );
}

export default PostNatalCare;
