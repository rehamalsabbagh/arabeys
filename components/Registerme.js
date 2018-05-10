import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input,Textarea, Text, Icon, View, Button} from 'native-base';
import {observer} from 'mobx-react'
import MyHeader from './MyHeader.js';
import Login from './Login.js';

export default observer (class Registerme extends Component {
 constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',}
  }

  render() {
      return (
        <Container>
          <MyHeader />
          <Content style={{margin:15}}>
            <Form>
            <View style={{margin:15}}>
            <Icon name='book' style={{textAlign: 'center'}}/>
            <Text style={{textAlign: 'center'}}>حساب جديد</Text>
            </View>
              <Item last>
                <Input placeholder="اسم المستخدم" style={{textAlign: 'right'}} onChangeText={(text) => this.setState({ username:text}) } value={this.state.username}/>
              </Item>
              <Item last>
                <Input secureTextEntry placeholder="رمز المرور" style={{textAlign: 'right'}} onChangeText={(text) => this.setState({ password:text }) } value={this.state.password}/>
              </Item>
              
                <Button full info bordered rounded style={{borderRadius:5,marginTop:15}} onPress={()=>this.props.userStore.signup(this.state.username, this.state.password)}>
                  <Text>تسجيل</Text>
              </Button>
            </Form>
          </Content>
        </Container>
      
      );
  }
})