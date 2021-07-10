import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Button,
  Alert,
  KeyboardAvoidingView,
  ToastAndroid
} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import firebase from 'firebase';
import db from '../config';

export default class WriteStoryScreen extends React.Component {
  constructor(){
    super();
    this.state={
      title: '',
      author: '',
      story: ''
    }
  }
  submitStory = async() =>{
     await db.collection("stories").add({
      'title': this.state.title,
      'author': this.state.author,
      'story': this.state.story
    })
     ToastAndroid.show("Story Saved To The Database", ToastAndroid.SHORT);


  }
  render() {
    return (
      <View style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior= "padding" enabled/>
    
        <Image
            source = {require("logo.jpg")}
            style= {{width:100, height:100}}/>
            
           
        <Text style={{textAlign:'center', fontSize:30, fontWeight: "bold"}}>Story Hub</Text>
        <View style={styles.inputView}>
         <TextInput style={styles.inputBox} placeholder="Story Title"  onChangeText={title => {
            this.setState({ title:title });
          }}
          value={this.state.title}/>
         </View>
         <View style={styles.inputView}>
                  <TextInput style={styles.inputBox} placeholder="Author" onChangeText={author => {
            this.setState({ author:author });
          }}
          value={this.state.author}/>
                  </View>
                 
             
                <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder="Write Your Story"
      placeholderTextColor="grey"
      numberOfLines={10}
      multiline={true}
      onChangeText={story => {
            this.setState({ story:story });
          }}
          value={this.state.story}
    />
  




    
     
       <TouchableOpacity
          style={styles.submitButton}
          onPress={async()=>{
            this.submitStory();
            this.setState({
              title: '',
              author: '',
              story: ''
            })
          }}
         
            >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center'
  },
  
  inputBox:{
    width: 300,
    height: 30,
    borderWidth: 1.5,

    fontSize: 20
  },
  inputView:{
    flexDirection: 'row',
    margin: 10
  },
  
  textArea: {
    height: 100,
    justifyContent: "flex-start",
    width : 300,
    borderWidth: 1.5,
  },
  submitButton:{
    backgroundColor: '#FBC02D',
    width: 100,
    height:30,
    alignSelf: 'center',
    marginTop: 100

  },
  submitButtonText:{

    textAlign: 'center',
    fontSize: 15,
    fontWeight:"bold",
    color: 'white'
  }
});
