import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import {observer} from 'mobx-react'
import MyHeader from './MyHeader.js';
import { NativeRouter, Route, Link, Switch, withRouter } from 'react-router-native';


export default observer (class SideMenu extends Component {
  render() {
    return (
      <Container>
        <MyHeader bookStore={this.props.bookStore}/>
        <Content>
          <List>
            <ListItem>
            <Link to='/mybooks/'>
              <Text style={{textAlign:'right',alignSelf: 'stretch'}}>كتبي</Text>
            </Link>
            </ListItem>
            <ListItem>
              <Text style={{textAlign:'right',alignSelf: 'stretch'}}>كتب مفضلة</Text>
            </ListItem>
            <ListItem onPress={()=>this.props.userStore.logout()}>
              <Text style={{textAlign:'right',alignSelf: 'stretch'}}>تسجيل خروج</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
})