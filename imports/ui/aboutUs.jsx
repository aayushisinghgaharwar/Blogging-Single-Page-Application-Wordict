
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


   
export default class AboutUs extends React.Component {
  

render()



{
  return(
    
  <div  style={styles.card} id="aboutus">
<h1> What is WORDict ?</h1>
<h1>   </h1>
<h1>   </h1>



 <div style={styles.card1}>

<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</h2>


</div>
</div>
)}};





