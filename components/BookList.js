import React, { Component } from 'react';
import {  ListView,Image, StyleSheet,FlatList } from 'react-native';
import { ImageBackground, View, Container, Header, Content, List, ListItem, Text ,Card, CardItem, Body, Button,Icon, Thumbnail} from 'native-base';
import StartCamera from './StartCamera.js';
import {observer} from 'mobx-react';
import { NativeRouter, Route, Link, Switch, withRouter } from 'react-router-native';
import MyHeader from './MyHeader.js';
import { Col, Row, Grid } from 'react-native-easy-grid';
import CardSilder from 'react-native-cards-slider';

export default class BookList extends Component {

  componentDidMount() {
    //console.log(this.props.location);
    //console.log(this.props.location.path);
      this.props.bookStore.previousPath = this.props.location.pathname;
  }

  checkifImgIsNull(imgUrl){
    if(imgUrl==null){
      return 'https://static1.squarespace.com/static/569e34efdc5cb42cf2dc776d/t/569ec4eadc5cb40e1bc9252e/1453245675100/1453267205_pen_stroke_sketch_doodle_lineart_87.png';
    }
    else{
      return imgUrl;
    }
  }

    render () {

        const books = this.props.bookStore.books.slice();

        return (
        <Container>
        <MyHeader bookStore={this.props.bookStore}/>
        <Container style={{}}>
        <View style={{margin:15,justifyContent:'center', alignItems:'center'}}>
        <Thumbnail square small source={{uri:'https://douglasschoolpto.org/wp-content/uploads/2017/10/open-book-icon.png'}} style={{height: 40, width:40,marginTop:10}}/>
        <Text style={{textAlign: 'center', fontSize:14}}>مرحبا {this.props.userStore.username}!</Text>
        <Text style={{textAlign: 'center', fontSize:14 ,paddingBottom:20}}>ما الذي تقرأه؟</Text>
          <Button full light rounded style={{borderRadius:5}}>
            <Link to='/scan/'>
                <Text>أضف كتابا</Text>
            </Link>
        </Button>
        </View>
            <CardSilder contentContainerStyle={{}}>
            {books.map(item=>
                    <Card style={{borderRadius:5, backgroundColor:'#ffffffa3'}} key={item.id}>
                      <CardItem header style={{backgroundColor:'transparent'}}>
                        <Text style={{textAlign:'right',alignSelf: 'stretch'}}>{item.user.username}</Text>
                      </CardItem>
                      <Link to={'/pages/'+item.id} onPress={()=>this.props.bookStore.bookCreatedId=item.id}>
                      <CardItem cardBody style={{backgroundColor:'transparent'}}>
                        <Image source={{uri: this.checkifImgIsNull(item.cover_image)}} style={{height: 200, width: null, flex: 1,marginLeft:15, marginRight:15}}/>
                      </CardItem>
                      </Link>
                      <CardItem style={{backgroundColor:'transparent'}} >
                        <Body>
                          <Text style={{textAlign:'right',alignSelf: 'stretch'}}>{item.book_name}</Text>
                          <Text style={{textAlign:'right',alignSelf: 'stretch'}}>
                            {item.book_description}
                          </Text>
                        </Body>
                      </CardItem>
                   </Card>
                 
            )}
            </CardSilder>
        </Container>
        </Container>
        );
    }
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
  }
});


  
  