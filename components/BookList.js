import React, { Component } from 'react';
import {  ListView,Image } from 'react-native';
import { ImageBackground, StyleSheet, View, Container, Header, Content, List, ListItem, Text ,Card, CardItem, Body, Button,Icon} from 'native-base';
import StartCamera from './StartCamera.js';
import {observer} from 'mobx-react'
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
    const books = this.props.bookStore.books.slice();

    return (

        <Container>
        <MyHeader/>
        <Container style={{padding:15}}>
        <View style={{marginBottom:15}}>
        <Icon name='book' style={{textAlign: 'center'}}/>
        <Text style={{textAlign: 'center', paddingBottom:15}}>ما الذي تقرأه؟</Text>
          <Button full info bordered rounded style={{borderRadius:5}}>
            <Link to='/scan/'>
                <Text>أضف كتابا</Text>
            </Link>
        </Button>
        </View>
          <List dataArray={books}
            renderRow={(item) =>
                  // Aziz: consider extracting this into a seperate component
                  <Card style={{marginBottom:15}}>
                    <CardItem header >
                      <Text >{item.book_name}</Text>
                    </CardItem>
                    <CardItem cardBody>
                      <Image source={{uri: this.checkifImgIsNull(item.cover_image)}} style={{height: 300, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem >
                      <Body>
                        <Text >
                          {item.book_description}
                        </Text>
                      </Body>
                    </CardItem>
                 </Card>
            }>
          </List>

        </Container>
        </Container>
    );
  }
}
)
