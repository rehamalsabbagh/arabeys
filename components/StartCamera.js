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
    Expo.FileSystem.makeDirectoryAsync(Expo.FileSystem.documentDirectory + 'myphotos').catch(e => {
      console.log(e, 'Directory exists');
    });
  }


  takePicture() {
    if (this.camera) {
      this.camera.takePictureAsync().then(data => {
        Expo.FileSystem.moveAsync({
          from: data.uri,
          to: `${Expo.FileSystem.documentDirectory}myphotos/Photo_${this.state.photoId}.jpg`,
        }).then((dataa) => {
          console.log('????');
          console.log(dataa);
          this.setState({
            // photoId: this.state.photoId + 1,
          });
          //Vibration.vibrate();
        });
      });
    }
  };

  // takePicture() {
  //   if (this.camera) {
  //     let photo = this.camera.takePictureAsync();
  //     console.log(photo);
  //     photo.then((data)=>{
  //       console.log('*******');
  //       console.log(data);
  //       my_uri = data['uri'];
  //       console.log(my_uri);
  //       //resizeImage(my_uri);

  //       let manipResult = ImageManipulator.manipulate(
  //           my_uri,
  //           [],
  //           {
  //               compress: 0.75,
  //               format: 'jpeg'
  //           }
  //       );
  //       manipResult.then((data) => {
  //       console.log('__*_*_*_*_*_--');
  //       console.log(data);
  //       const time = new Date().getTime();
  //       const uriParts = my_uri.split('.');
  //       //const uriParts = manipResult.my_uri.split('.');
  //       const fileType = uriParts[uriParts.length - 1];
  //       const userID = 'abc';
  //       const image = `${Expo.FileSystem.documentDirectory}${userID}/${time}.${fileType}`;
        
  //       alert('Trying to copy image');
        
  //       Expo.FileSystem.copyAsync({
  //           from: my_uri,
  //           to: image
  //       }).then((data1) => {
  //           console.log('-----here-----')
  //           console.log(data1)
  //       }).catch((error) => {
  //           console.log('**here**')
  //           console.log(JSON.stringify(error));
  //       });
  //       });

  //     });
      
  //   }
  // }



  resizeImage(uri){

      
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
            <Button transparent style={{textAlign: 'left', marginTop:15}}>
            <Link to='/'>
              <Icon name='arrow-back' style={{color:'white'}} />
            </Link>
            </Button>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
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
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}<Icon name='ios-camera-outline' style={{color:'white'}}/>{' '}
                </Text>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
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