import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input,Textarea, Text, Icon, View, Button, Thumbnail} from 'native-base';
import {observer} from 'mobx-react'
import MyHeader from './MyHeader.js';
import { NativeRouter, Route, Link, Switch, withRouter } from 'react-router-native';


export default observer (class Login extends Component {
 constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',}
  }

  render() {
    return (
      <Container>
        <Content style={{margin:30}}>
          <Form>
            <View style={{marginTop:40,marginBottom:40,justifyContent:'center', alignItems:'center'}} >
          <Thumbnail square small source={{uri:'https://douglasschoolpto.org/wp-content/uploads/2017/10/open-book-icon.png'}} style={{height: 40, width:40}}/>
          <Text style={{textAlign: 'center','fontSize':22}}>تسجيل دخول</Text>
          </View>
            <Item last>
              <Input placeholder="اسم المستخدم" style={{textAlign: 'right'}} onChangeText={(text) => this.setState({ username:text}) } value={this.state.username}/>
            </Item>
            <Item last>
              <Input secureTextEntry placeholder="رمز المرور" style={{textAlign: 'right'}} onChangeText={(text) => this.setState({ password:text }) } value={this.state.password}/>
            </Item>
            
              <Button full light rounded style={{borderRadius:5,marginTop:25}} onPress={()=>this.props.userStore.login(this.state.username, this.state.password)}>
                <Text>دخول</Text>
            </Button>
            <Link to='/register/'>
                <Text style={{paddingTop:25, textAlign:'right','color':'white'}}>ليس لديك حساب؟ حساب جديد</Text>
            </Link>
          </Form>
        </Content>
      </Container>
    );
  }
})