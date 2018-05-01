import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, ListView } from 'react-native';
import BookCard from './BookCard.js';




export default class BookList extends Component {

    constructor(props) {
        super(props);
    }

  render() {
    console.log(this.props.bookStore);

    let bookCards = this.props.bookStore.books.map( book=> <BookCard book={book}/>)

    return (
        <View>
        {bookCards}
        </View>
    );
  }
}


  
  