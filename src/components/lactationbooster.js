import React from 'react';
import { Card, CardImg, CardText, CardBody, CardDeck,
    CardTitle, CardSubtitle,  Breadcrumb, BreadcrumbItem, } from 'reactstrap';    
import { Link } from 'react-router-dom';

function RenderCard(props) {

    const image =  process.env.PUBLIC_URL + props.source;
    const topfoodsList = props.foods.map((topfood) => {
        return (
          <div>
          <ul>
              <li>{topfood.name}</li>
          </ul>
          </div>
        );
    });

    return(
            <Card>
            <CardImg src={image} alt="Image" width = "350" height="170"/>
            <CardBody>
            <CardTitle>{props.title}</CardTitle>
            {topfoodsList}            
            </CardBody>
            </Card>
      
    );
}

function lactationBooster(props) {

        return(
        <div className="container">
          <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>                    
                    <BreadcrumbItem><Link to="/lactation">Lactation</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Lactation Boosters</BreadcrumbItem>
                </Breadcrumb> 

            </div>
            
           

         <section className="page-section bg-light" >
       
        <div className="container-fluid">
          <div className="text-center">
            <h3 className="section-heading text-uppercase">Lactation Boosters</h3>
            <h3 className="section-subheading text-muted">
              Increase milk secretion during breastfeeding
            </h3>
              <div className = "col-md-8 offset-md-2">
             
              Its a myth that only nonvegetarian foods help in increasing milk secretion.There are so many indian
              foods that improve milk production and some of them do real magic in instantly serving your little one's
              demands.All of these foods significantly contribute to make your breastfeeding journey much better.
              Try it yourself and feel the difference of your supply getting well established in just a couple of days.
              </div>
          </div>
          </div>
          
          
            <div className="row row-content ">
                <div className="col-12 col-md m-1"> 
                Listed below are the 
                top foods most mothers prefer to take and these are what most elders and mothers recommend. Oats and soaked
                fenugreek are my favorites from the below list.Choose what's best for you and consume it regularly to feel the difference
                <RenderCard foods={props.topfoods} title={props.titleTop} source = {props.sourceTop} /> 
                </div>
                <div className="col-12 col-md m-1"> 
                There are times when your supply is really low and you feel desperate when your baby is crying and opt for formula.
                Do not worry anymore and try out these foods which instantly increase prolactin levels.Again oats is my magic food and 
                milk rusk is my personal choice.
                <RenderCard foods={props.instantfoods} title={props.titleInstant} source = {props.sourceInstant} /> 
                </div>
                <div className="col-12 col-md m-1"> 
                You need a lot of lubricants now and your baby needs well digested food through milk from you.Breast milk
                is mostly water and plenty of liquids is highly recommended.Ofcourse, you cannot miss out on your milk intake and a minimum of 3 to 4L of liquids.
                <RenderCard foods={props.mustIncfoods} title={props.titleMust} source = {props.sourceMust} /> 
                </div>
                <div className="col-12 col-md m-1"> 
                Listed below are foods that help in maintaining the health and wellness of your recovering body as well as 
                increase secretion.Nuts are loaded with the essential nutrients and even a small amount of them will make a significant 
                impact on your betterment.
                <RenderCard foods={props.goodfoods} title={props.titleGood} source = {props.sourceGood} /> 
                </div>  
            </div>
                          
            <div className="row row-content">                
            <div className="col-12 col-md m-1"> 
                Spinach is a great source of iron and calcium.Other veggies fried in ghee is highly advisable.
                Bitter guard and ladies finger are most preferred and definitely helps.Murungai keerai works wonders too!
                <RenderCard foods={props.vegfoods} title={props.titleVeg} source = {props.sourceVeg} /> 
                </div>
                <div className="col-12 col-md m-1"> 
                There is nothing as good as dried fish.As the name suggests,Paal sura is the best food to boost lactation.
                These foods take a longer time to digest, so make sure you take care to improve digestion.
                <RenderCard foods={props.nonvegfoods} title={props.titleNonveg} source = {props.sourceNonveg} /> 
                </div>
                <div className="col-12 col-md m-1"> 
                Soaked fenugreek is a game changer food when consumed in empty stomach early morning.Flax seeds are rich in Omega 3 fatty acids
                and jeera water helps to improve digestion
                <RenderCard foods={props.seeds} title={props.titleSeeds} source = {props.sourceSeeds} /> 
                </div>
                <div className="col-12 col-md m-1"> 
                Papaya has a mild sedative effect and also improves prolactin levels thats responsible for milk production.
                Figs work well too.Pomegranate strengthens and supports your recovering uterus.
                <RenderCard foods={props.fruits} title={props.titleFruits} source = {props.sourceFruits} /> 
                </div>  
            </div>
          </section>
        </div>
        
    );
}

export default lactationBooster;