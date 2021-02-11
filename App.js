import React, {Component} from 'react';
 import { TextInput,View, Text, Button, StyleSheet, Image } from 'react-native';

export default class App extends React.Component {

  state = {
    celsius: null,
    degrees: null,  
    fahrenheit1: null,
    degrees1: null 
  }

  if (dato) {
    
  }
  updateState = () => this.setState ( {

    degrees: (this.state.celsius * (9/5)) + 32,
  
  }) 

  updateState1 = () => this.setState ( {

    degrees1: (this.state.fahrenheit1 - 32) * (5 / 9)

  })  


 render() {
  
  const  { celsius, degrees,degrees1, fahrenheit1 } = this.state

  return (
      <View style={styles.container}>

          <Image
            style={styles.image}
            source={require('./assets/logo.png')}
          />

          <TextInput
          value={this.state.celsius}
          onChangeText={ (celsius) => this.setState({ celsius })}
          placeholder={'Celsius'}
          style={styles.inputStyle}
          />
          
          
          <TextInput
          value={this.state.fahrenheit1} 
          onChangeText={ (fahrenheit1) => this.setState({fahrenheit1})}
          placeholder={'Fahrenheit'}
          style={styles.inputStyle}
          />
        <Text>{"\n"}</Text>
          <Button onPress = { () => {this.updateState()}} title="C O N V E R T  C" color='black'/>
          <Text>{"\n"}</Text>

          <Button onPress = { () => {this.updateState1()}} title="C O N V E R T  F" color='black'/>

          
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          
          <Text style={styles.grados}> {degrees} 0° </Text>
          <Text style={styles.grados}> {degrees1} 0° </Text>

        </View>
  )
  }
}

const styles = StyleSheet.create({
  grados: {
    fontSize:50
    
  },
  image: {
    flex: 0.3,
    aspectRatio: 1.5, 
    resizeMode: 'contain',
},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle:{
    height: 40,
    backgroundColor: '#eee',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    width: '85%',
    paddingLeft: 10,
    marginBottom: 10,
    marginTop: 10
  }
  
  
});