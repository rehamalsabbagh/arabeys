import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input,Textarea, Text, Icon, View, Button,Thumbnail} from 'native-base';
import {observer} from 'mobx-react'
import { NativeRouter, Route, Link, Switch, withRouter } from 'react-router-native';
import { ImageBackground, StyleSheet, ListView, Image } from 'react-native';

export default observer (class Loader extends Component {
  render() {
      return (
      <Container style={{justifyContent:'center', alignItems:'center'}}>
          <Thumbnail square small source={{uri:'https://ambion.am/webpage/img/loaders.gif'}} style={{height: 90, width:90, marginTop:80}}/>
      </Container>
    );
  }
})
