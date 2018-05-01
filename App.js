import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookList from './components/BookList.js';
import bookStore from './stores/BookStore.js';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>ArabEyes</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <BookList bookStore={bookStore} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
