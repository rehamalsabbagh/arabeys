import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookList from './BookList.js';
import bookStore from '../stores/BookStore.js';
import userStore from '../stores/UserStore.js';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import StartCamera from './StartCamera.js';
import MyHeader from './MyHeader.js';
import AddBookForm from './AddBookForm.js';
import PagesView from './PagesView.js';
import Login from './Login.js';
import {observer} from 'mobx-react';
import SideMenu from './SideMenu.js';
import Registerme from './Registerme.js';
import UserBooks from './UserBooks.js';
import Loader from './Loader.js';

import { NativeRouter, Route, Link, Switch, withRouter } from 'react-router-native'

export default observer(class MyApp extends React.Component {
  render() {
    return (
      <Container>
        {userStore.token=='' ? <Container>
          <Switch>
          <Route exact path='/register/'
                 render= { props => <Registerme {...props} userStore={userStore}/> }
                 />
          <Route path='/'
                render= { props => <Login {...props} userStore={userStore}/> }
          />
          </Switch>
          </Container>:
          userStore.loading || bookStore.loading ? <Loader userStore={userStore} bookStore={bookStore}/>:
          bookStore.pagesStored? <PagesView bookStore={bookStore} userStore={userStore} book_id={bookStore.bookCreatedId}/>:
         <Switch>
          <Route exact path='/menu/'
                 render= { props => <SideMenu {...props} userStore={userStore} bookStore={bookStore}/> }
                 />
          <Route exact path='/pages/:bookId'
                 render= { props => <PagesView {...props} bookStore={bookStore}/> }
                 />
          <Route exact path='/scan/'
                 render= { props => <StartCamera {...props} bookStore={bookStore}/> }
                 />
          <Route exact path='/addbook/'
                 render= { props => <AddBookForm {...props} bookStore={bookStore} userStore={userStore}/> }
                 />
          <Route exact path='/mybooks/'
                 render= { props => <UserBooks {...props} bookStore={bookStore} userStore={userStore}/> }
                 />
          <Route path="/" 
                 render= { props => <BookList {...props} bookStore={bookStore} userStore={userStore}/> }
                 />
         </Switch>
       }
      </Container>
    );
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
