import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions, ImageManipulator } from 'expo';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { NativeRouter, Route, Link, Switch, withRouter } from 'react-router-native'



export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ hasCameraPermission: status === 'granted' }); 

  }

    componentDidMount() {
      this.props.bookStore.clearPages();
  }


  resizeImage(uri){
        ImageManipulator.manipulate(
        uri,
        [{ compress: 0},{ resize: { height: 500 }}],
        { format: 'png', base64: true},
      ).then((data)=>{
        //console.log(data);
        let base64 = data['base64'];
        this.props.bookStore.addPage(base64);
    }).catch((err)=>{
      console.log('it was not resized');
      return err;
    })
  }



  takePicture() {
    if (this.camera) {
        let photo = this.camera.takePictureAsync({base64:true});
        photo.then((data)=>{
        this.resizeImage(data['uri']);
      });
      
    }
  }


  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}  ref={ref => { this.camera = ref; }} >
            <Button transparent style={{marginTop:15}}>
            <Link to='/'>
              <Icon name='arrow-back' style={{color:'white'}} />
            </Link>
            </Button>

            <Button transparent style={{marginTop:15}}>
            <Link to='/addbook/'>
              <Icon name='ios-checkmark-circle-outline' style={{color:'white'}} />
            </Link>
            </Button>
            <View full
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity full
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text onPress={()=>this.takePicture()}
                  style={{fontSize: 30, marginBottom: 10, color: 'white' }}>
                  {' '}<Icon name='ios-camera-outline' style={{color:'white'}}/>{' '}
                </Text>
                <Text
                  style={{ fontSize: 30, marginBottom: 10, color: 'white' }}>
                  {' '}<Icon name='ios-reverse-camera-outline' style={{color:'white'}}/>{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}