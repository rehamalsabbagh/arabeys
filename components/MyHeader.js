import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { NativeRouter, Route, Link, Switch, withRouter } from 'react-router-native'


export default class MyHeader extends React.Component {
  render() {
    return (
        <Header style={{backgroundColor:'transparent',shadowColor:'#000',shadowOffset:{ width: 0, height: 1 },shadowOpacity: 0.5,shadowRadius: 2}}>
          <Left>
            <Button transparent>
            <Link to='/' onPress={()=>this.props.bookStore.pagesStored=false}>
              <Icon name='arrow-back' style={{color:'white'}}/>
            </Link>
            </Button>
          </Left>
          <Body>
            <Title style={{color:'white'}}>جلجامش</Title>
          </Body>
          <Right>
            <Button transparent>
              <Link to='/menu/'>
                <Icon name='menu' style={{color:'white'}}/>
              </Link>
            </Button>
          </Right>
        </Header>
    );
  }
}
