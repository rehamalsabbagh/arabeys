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
        [{ compress: 0},{ resize: { height: 700 }}],
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

  determineAction(){
    console.log('*****')
    console.log(this.props.bookStore.previousPath)
    if(this.props.bookStore.previousPath.includes('pages')){
      //alert('detail');
      //this.props.bookStore.base64Pages.map(base64=>this.props.bookStore.sendPage(this.props.bookStore.bookCreatedId,base64));
      this.props.bookStore.sendPages(this.props.bookStore.bookCreatedId, this.props.bookStore.base64Pages);
    }
    else{
      this.props.history.push('/addbook');
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
            <Link onPress={this.determineAction.bind(this)}>
              <Icon name='ios-checkmark-circle-outline' style={{color:'white'}} />
            </Link>
            </Button>
            <Container full
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                justifyContent:'center',
                alignItems:'center'
              }}>
              <TouchableOpacity full
                style={{
                  flex: 0.1,
                  backgroundColor: 'black',
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
                  {' '}<Icon name='ios-camera-outline' style={{color:'white',fontSize:30}}/>{' '}
                </Text>
              </TouchableOpacity>
            </Container>
          </Camera>
        </View>
      );
    }
  }
}