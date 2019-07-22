import React, { Component } from 'react';
import { Link } from 'react-router'

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1000,
    height: 600,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'http://az616578.vo.msecnd.net/files/2016/08/09/6360630123516822951123741797_Angel+Food-+High+Res-6766.jpg',
    title: 'food',
    author: 'jill111',
    featured: true,
    link:'/blogs/food'



  },
  {
    img: 'https://nicolemg14.files.wordpress.com/2014/08/fahion1.jpg',
    title: 'fashion',
    author: 'pashminu',
    link:'/blogs/fashion'

  },
  {
    img: 'https://static.pexels.com/photos/226243/pexels-photo-226243.jpeg',
    title: 'photography',
    author: 'Danson67',
    link:'/blogs/photography'



  },
  {
    img: 'http://s3.india.com/travel/wp-content/uploads/2016/01/Solo-Travel.jpg',
    title: 'travel',
    author: 'fancycrave1',
    link:'/blogs/travel'
    

  },
    
  
  {
    img: 'https://buzz.universitytimes.in/wp-content/uploads/2016/03/content_ill_bollywood.jpg',
    title: 'bollywood',
    author: 'Hans',
    link:'/blogs/bollywood'

  },
  {
    img: 'https://hulshofschmidt.files.wordpress.com/2011/10/education-books-politics.jpg',
    title: 'politics',
    author: 'fancycravel',
    link:'/blogs/politics'

  },
  

  {
    img: 'https://www.budsies.com/blog/wp-content/uploads/2016/09/TechTransfer.jpg',
    title: 'Technology',
    author: 'BkrmadtyaKarki',
    featured: true,
    link:'/blogs/Technology'

    
  },



  

];

export default class Blogs extends React.Component {
    

    render(){

        return(

          <div style={styles.root}>
    <GridList
      cols={3}
      cellHeight={200}
      padding={2}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={<Link to={tile.link} style={{color:'white'}}>{tile.title}</Link>}
          titlePosition="top"
          cols={tile.featured ? 2 : 1}
          rows={1}
        >
          <img src={tile.img} />

        </GridTile>
      ))}
    </GridList>

</div>




          )


    }


};