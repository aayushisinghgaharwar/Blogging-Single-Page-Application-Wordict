import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

const styles = {
  
  fontFamily:"Times New Roman"
};

export default class Help extends React.Component {

    

  render() {
    return (
      
      <Card id="help" className="help">
    
    <CardMedia
      overlay={<CardTitle title="Help"  />}
    >
      <img src="http://www.villageoffranklinpark.com/assets/1/7/volunteer-hands.png" />
    </CardMedia>
    <CardText>
     <Tabs  >
    <Tab label="Get started" >
      <div style={styles}>
        <h2 >How to blog?</h2>
        <h3 style={{color: 'orange'}}>
          Step 1: Decide what to blog about. If you're part of a business, company or organization, this step will be easy to determine. <br/>
          Step 2: Choose a blogging category.<br/>
          Step 3: Mention name<br/>
          Step 4: Fill up all the details <br/>
          Step 5: Post <br/>
        </h3>
        
      </div>
    </Tab>
    <Tab label="Do's" >
      <div style={styles}>
        <h2 > DO'S</h2>
              <h3 style={{color: 'orange'}}>

            -Get right to the point and keep postings short.<br/>
            -In your posts, answer questions, including who, what, where, when, why and how, related to whatever topics you're writing about.<br/>
            -Use a conversational and friendly tone, but be professional.<br/>
            -Always keep your audience in mind, and write using language and vocabulary they'll understand-Use bulleted or numbered lists within your posts to quickly convey information.<br/>

        </h3>
      </div>
    </Tab>
    <Tab label="Dont's " >
      <div style={styles}>
        <h2 >DONT'S</h2>
                <h3 style={{color: 'orange'}}>

          -Do not make spelling, punctuation or grammar errors<br/>
          -Don't use long sentences, instead use short that don't contain overly complicated words<br/>
          -Don't ramble or include too much information within a single blog entry. If necessary, divide a topic into multiple parts.<br/>
          -Don't overuse different typestyles, like bold, italic or underlined text. This can be distracting<br/>
          -Do not use abusive content which could offend any indivisual in any way.<br/>
        </h3>
      </div>
    </Tab>
  </Tabs>
  </CardText>
  </Card>
  
  )}}
