import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { NativeRouter, Route, Link, Switch, withRouter } from 'react-router-native'


export default class MyHeader extends React.Component {
  render() {
    return (
        <Header style={{backgroundColor:'#529ff3'}}>
          <Left>
            <Button transparent>
            <Link to='/'>
              <Icon name='arrow-back' style={{color:'white'}}/>
            </Link>
            </Button>
          </Left>
          <Body>
            <Title style={{color:'white'}}>جلجامش</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' style={{color:'white'}}/>
            </Button>
          </Right>
        </Header>
    );
  }
}

