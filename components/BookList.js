import React, { Component } from 'react';
import {  ListView,Image } from 'react-native';
import { ImageBackground, StyleSheet, View, Container, Header, Content, List, ListItem, Text ,Card, CardItem, Body} from 'native-base';


// import BookCard from './BookCard.js';
import {observer} from 'mobx-react'


export default observer (class BookList extends Component {

    

  render() {
    const books = this.props.bookStore.books.slice();
    return (

        <Content>
          <List dataArray={books}
            renderRow={(item) =>
              <ListItem>
                  <Card>
                    <CardItem header>
                      <Text>{item.name}</Text>
                    </CardItem>
                    <CardItem cardBody>
                      <Image source={{uri: item.cover}} style={{height: 300, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>
                          {item.description}
                        </Text>
                      </Body>
                    </CardItem>
                 </Card>
              </ListItem>
            }>
          </List>
        </Content>
    );
  }
}
)


  
  