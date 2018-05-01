import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header.js';
import BookList from './components/BookList.js';
import bookStore from './stores/BookStore.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <BookList bookStore={bookStore} />
      </View>
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
