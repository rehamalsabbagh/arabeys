import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input,Textarea, Text, Icon, View, Button} from 'native-base';
import {observer} from 'mobx-react'
import MyHeader from './MyHeader.js';
import PagesView from './PagesView.js'

export default observer (class AddBookForm extends Component {
 constructor(props) {
    super(props);
    this.state = {
      name:'',
      description:'',}
  }

  render() {
    return(
      <Container>
      {this.props.bookStore.pagesStored? <PagesView bookStore={this.props.bookStore} userStore={this.props.userStore} book_id={this.props.bookStore.bookCreatedId}/>:
          <Container>
            <MyHeader />
            <Content style={{margin:15}}>
              <Form>
              <View style={{margin:15}}>
              <Icon name='book' style={{textAlign: 'center'}}/>
              <Text style={{textAlign: 'center'}}>أضف تفاصيل الكتاب</Text>
              </View>
                <Item last>
                  <Input placeholder="اسم الكتاب" style={{textAlign: 'right'}} onChangeText={(text) => this.setState({ name:text}) } value={this.state.name}/>
                </Item>
                <Item last>
                  <Input placeholder="وصف الكتاب" style={{textAlign: 'right'}} onChangeText={(text) => this.setState({ description:text }) } value={this.state.description}/>
                </Item>
                  <Button full info bordered rounded style={{borderRadius:5,marginTop:15}} onPress={()=>this.props.bookStore.createBook(this.state.name, this.state.description, this.props.userStore.user.user_id)}>
                    <Text>أرسل</Text>
                </Button>
              </Form>
            </Content>
       </Container>
    }
    </Container>
    )
  }
  
})