import React, { Component } from 'react';
import {  ListView,Image } from 'react-native';
import { ImageBackground, StyleSheet, View, Container, Header, Content, List, ListItem, Text ,Card, CardItem, Body, Button,Icon} from 'native-base';
import StartCamera from './StartCamera.js';
import {observer} from 'mobx-react'
import { NativeRouter, Route, Link, Switch, withRouter } from 'react-router-native';
import MyHeader from './MyHeader.js';



export default observer (class BookList extends Component {


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

                  <Card style={{marginBottom:15}}>
                    <CardItem header>
                      <Text style={{textAlign: 'right'}}>{item.name}</Text>
                    </CardItem>
                    <CardItem cardBody>
                      <Image source={{uri: item.cover}} style={{height: 300, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text style={{textAlign: 'right'}}>
                          {item.description}
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


  
  