import React from 'react';
import { Card, CardImg, CardText, CardBody, CardDeck,
    CardTitle, CardSubtitle,  Breadcrumb, BreadcrumbItem,Row, Col } from 'reactstrap';    
import { Link } from 'react-router-dom';


function lactation(props) {

        return(
        <div className="container">
          <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Lactation</BreadcrumbItem>
                </Breadcrumb> 

            </div>
            
            <div className = "col-md-8 offset-md-4">
            <img
                    className="img-fluid"
                    src={require("../assets/img/portfolio/lactation.jpg")}
                    width="350" height="350" alt=""
                  />
                  </div>
            <div className = "col-md-8 offset-md-2">
            <br/>
            Breastfeeding journey for every woman is unique and with proper health and wellness one can easily pass this
            phase and meet the needs of your little one.Every mother is capable of exclusively breastfeeding atleast for a minimum of 
            6 months.Its important to get a lot of rest during this phase to recover your body and regain the pre-pregnancy 
            state.Prolactin hormone plays a vital role during this phase and its important to maintain is level. Getting lots of rest and drinking plenty of liquids is 
            recommended. Staying hydrated,good sleep,frequent feeding is the foremost key to successfully breastfeed your baby.
            However there are foods that boost lactation and its required to increase milk secretion. 
            Check out the foods that boost lactation and to increase milk secretion here. 
            <br/><br/>
            Siddha medicine suggests that you take legiyam to maintain the health and wellness of you and your baby as long as you continue to breastfeed.
            Although non vegetarians produce good milk, its certainly equally possible for vegetarian mothers too with a 
            proper and a balanced diet. Along with diet, supplements are recommended to maintain the supply. Legiyam plays
            a vital role and lactating mothers secrete so much milk that sometimes even your breasts become so full and lead to
            engorgement. Check out the  <Link to='/LactationDietChart'>daily routine diet Chart</Link> for breastfeeding mothers here.
            
            <br></br><br/> However, for the first month
            after delivery its important to take utmost care of your slow-healing body and your little one whose digestive system
            is still developing. Check out the first month <Link to='/PNPathiyaDiet'>post-partum diet</Link> here. 
            <br/><br/>

<Row>
            <Col sm="6">
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
              <Col sm="6">

              
              <Link to='./LactationBooster'>
                  <div class="mysmcard">
                    <div className="mysmcard-image">
                      <img
                        class="mx-auto rounded-circle mysmcard-image"
                        src="../assets/img/lactationboosters/milk.jpg"
                        alt=""
                      />
                    </div>
                    <div className="mysmcard-content">
                      <p className="font-weight-bold">
                        Foods to increase breast milk secretion
                      </p>
                    </div>
                  </div>
                </Link>
                
                <Link to='./LactationDietChart'>
                  <div class="mysmcard">
                    <div className="mysmcard-image">
                      <img
                        class="mx-auto rounded-circle mysmcard-image"
                        src="../assets/img/lactationboosters/bun.jpg"
                        alt=""
                      />
                    </div>
                    <div className="mysmcard-content">
                      <p className="font-weight-bold">
                        Diet chart for breastfeeding mothers
                      </p>
                    </div>
                  </div>
                </Link>
                
                <Link to='./Babycarekit'>
                  <div class="mysmcard">
                    <div className="mysmcard-image">
                      <img
                        class="mx-auto rounded-circle mysmcard-image"
                        src="../assets/img/kit/babycarekit.jpg"
                        alt=""
                      />
                    </div>
                    <div className="mysmcard-content">
                      <p className="font-weight-bold">
                        How to take care of your baby?
                      </p>
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>

            </div>

         </div>
        
    );
}

export default lactation;