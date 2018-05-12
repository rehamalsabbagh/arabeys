import React, { Component } from 'react';
import {  ListView,Image } from 'react-native';
import { ImageBackground, StyleSheet, View, Container, Header, Content, List, ListItem, Text ,Card, CardItem, Body, Button,Icon} from 'native-base';
import StartCamera from './StartCamera.js';
import {observer} from 'mobx-react'
import { NativeRouter, Route, Link, Switch, withRouter } from 'react-router-native';
import MyHeader from './MyHeader.js';
import { Col, Row, Grid } from 'react-native-easy-grid';


export default observer (class PagesView extends Component {

  componentDidMount() {
      this.props.bookStore.getPagesOfBook(this.props.bookStore.bookCreatedId);
  }

  render() {
    const pages = this.props.bookStore.base64Pages.slice();
    //console.log('**********************************************************************************************');
    //console.log(pages);

    return (
        <Container>
        <MyHeader/>
        <Container style={{padding:15}}>
        <Text style={{'textAlign':'center','padding':10,'fontSize':25}}>{this.props.bookStore.currentBook} <Icon name='book' style={{textAlign: 'center'}}/></Text>
          <List dataArray={pages}
            renderRow={(item) =>
                  <Card style={{marginBottom:15}}>
                    <CardItem cardBody>
                      <Image source={{uri: 'data:image/jpg;base64, '+item}} style={{height: 500, width: null, flex: 1}}/>
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


  
  