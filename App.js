import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button,
         TouchableHighlight, TouchableNativeFeedback,
        TouchableOpacity, FlatList, Picker,
      ActivityIndicator, CheckBox, Image} from 'react-native';

export default function App() {





  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require('./assets/logo.png')}
        />
      </View>
      
      <TextInput
        style={styles.inputStyle}
        placeholder={'Usuario'}
      />
        
      <TextInput
        style={styles.inputStyle}
        placeholder={'Contraseña'}
      />

    <View style={{
        flexDirection: "row",
        height: 50,
        padding: 20,
      
      }}
    >
    
    <View>
    <CheckBox
          style={styles.checkbox}
      />
    </View>

    <View>
      <Text style={styles.label}><Text style={styles.label1}>BAC</Text> Token</Text>
      </View>

    
    <View>
      <Text style={styles.forgot} > Olvido su Contraseña? </Text>
    </View>

    
    </View>
    <Text>{"\n"}</Text>
    <Text>{"\n"}</Text>


    <View style={[{ width: "90%", margin: 10, backgroundColor: "grey"}]}>
          <Button
          
            title="Ingresar"
            color="grey"
          />
        </View> 

    <Text>{"\n"}</Text>
    <View style={{
        flexDirection: "row",
        height: 50,
 
     
      }}
    >

        <View>
        <Text style={styles.label}> Primera vez que ingresa? </Text>
        </View>

        <View>
        <Text style={styles.forgot1}> Crear Contraseña </Text>
        </View>


    </View>
    
      

      
     
    

          <Text>{"\n"}</Text>
          
          
          <Text style={styles.forgot}>Tipo de cambio </Text>
          
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
      

       
    </View>
  );
}

const styles = StyleSheet.create({
  image:{
    flex: 0.3,
    aspectRatio: 2, 
    resizeMode: 'contain',
    paddingTop: 5
  },
  label1:{
    
    
    color:'red'
    
  },
  label:{
    paddingTop:5,
    color:'black'
  },
  checkbox:{
    
  },
  forgot:{
    
    color: '#37AAF4',
    paddingLeft:220
  },

  forgot1:{
    paddingTop:5,
    color: '#37AAF4',
    paddingLeft:50
  },

  container: {
    flex: 1,
    backgroundColor: '#eee',
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
