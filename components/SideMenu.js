import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import {observer} from 'mobx-react'
import MyHeader from './MyHeader.js';


export default observer (class SideMenu extends Component {
  render() {
    return (
      <Container>
        <MyHeader />
        <Content>
          <List>
            <ListItem>
              <Text>كتبي</Text>
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