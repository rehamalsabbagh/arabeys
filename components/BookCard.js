import React from 'react';
import { ImageBackground, StyleSheet, View, ListView } from 'react-native';
import { Thumbnail, Text, Button, Left, Body, Right, List, ListItem, Tab, Tabs } from 'native-base';


function BookCard(props) {
 return (
   <View className="col-4">
     
       <View className="image">
         <Thumbnail bordered source={props.book.cover} />
       </View>
       <View className="card-body">
         <h5 className="card-title">
           <span>{props.book.name}</span>
         </h5>
         <small className="card-text">{props.book.author}</small>
         <small className="card-text">{props.book.description}</small>
       </View>

   </View>
 );
}

export default BookCard;