import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookList from './BookList.js';
import bookStore from '../stores/BookStore.js';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import StartCamera from './StartCamera.js';
import MyHeader from './MyHeader.js';
import AddBookForm from './AddBookForm.js';
import { NativeRouter, Route, Link, Switch, withRouter } from 'react-router-native'

export default class MyApp extends React.Component {
  render() {
    return (
      <Container>
         <Switch>
          <Route exact path='/scan/'
                 render= { props => <StartCamera {...props} bookStore={bookStore}/> }
                 />
          <Route exact path='/addbook/'
                 render= { props => <AddBookForm {...props} bookStore={bookStore}/> }
                 />
          <Route path="/" 
                 render= { props => <BookList {...props} bookStore={bookStore}/> }
                 />
         </Switch>
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
