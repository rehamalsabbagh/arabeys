import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import {observer} from 'mobx-react'
import MyHeader from './MyHeader.js';
import { NativeRouter, Route, Link, Switch, withRouter } from 'react-router-native';


export default observer (class SideMenu extends Component {
  render() {
    return (
      <Container>
        <MyHeader />
        <Content>
          <List>
            <ListItem>
            <Link to='/mybooks/'>
              <Text >كتبي</Text>
            </Link>
            </ListItem>
            <ListItem>
              <Text>كتب مفضلة</Text>
            </ListItem>
            <ListItem onPress={()=>this.props.userStore.logout()}>
              <Text>تسجيل خروج</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
})