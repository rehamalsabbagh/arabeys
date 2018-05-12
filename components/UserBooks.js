import React, { Component } from 'react';
import {  ListView,Image } from 'react-native';
import { ImageBackground, StyleSheet, View, Container, Header, Content, List, ListItem, Text ,Card, CardItem, Body, Button,Icon} from 'native-base';
import StartCamera from './StartCamera.js';
import {observer} from 'mobx-react';
import { NativeRouter, Route, Link, Switch, withRouter } from 'react-router-native';
import MyHeader from './MyHeader.js';
import { Col, Row, Grid } from 'react-native-easy-grid';


export default observer (class BookList extends Component {

  checkifImgIsNull(imgUrl){
    console.log(imgUrl);
    if(imgUrl==null){
      return 'https://static1.squarespace.com/static/569e34efdc5cb42cf2dc776d/t/569ec4eadc5cb40e1bc9252e/1453245675100/1453267205_pen_stroke_sketch_doodle_lineart_87.png';
    }
    else{
      return imgUrl;
    }
  }

  render() {
    const books = this.props.bookStore.getBooksForUser(this.props.userStore.username).slice();

    return (

        <Container>
        <MyHeader bookStore={this.props.bookStore}/>
        <Container style={{padding:15}}>
          <List dataArray={books}
            renderRow={(item) =>
                <Link to={'/pages/'+item.id}>
                  <Card style={{marginBottom:15}}>
                    <CardItem cardBody>
                      <Image source={{uri: this.checkifImgIsNull(item.cover_image)}} style={{height: 300, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem >
                      <Body>
                        <Text >{item.book_name}</Text>
                        <Text >
                          {item.book_description}
                        </Text>
                      </Body>
                    </CardItem>
                 </Card>
               </Link>
            }>
          </List>

        </Container>
        </Container>
    );
  }
}
)


  
  