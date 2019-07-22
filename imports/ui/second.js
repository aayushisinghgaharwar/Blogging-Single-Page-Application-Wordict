
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const styles = {
  card: {
    //position: 'absolute',
    left: '500px',
    top: '200px',
    right:'500px',
    bottom:'200px',
    
    color: 'red',
    backgroundcolor: 'yellow'
    

    //boxShadow: 'rgba(255, 0, 0, 0.117647) 0px 1px 6px, rgba(255, 0, 0, 0.117647) 0px 1px 4px'
  },
  card1:{

color: 'black',



  }

  
  }


   
export default class Second extends React.Component {
  

render()



{
  return(
    
  <div  style={styles.card} id="aboutus">

<h1>   </h1>
<h1>   </h1>



 <div style={styles.card1}>


<img src="https://midatlantic.aaa.com/-/media/Images/Global/discounts/travel/travel-discounts-1470x600.ashx?h=600&la=en&w=1470&hash=4E2420B894E7164CC66A6522C9D17C6B9CD383BF" />

</div>
</div>
)}};





