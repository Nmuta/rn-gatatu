import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Dimensions } from 'react-native';
import { useState } from 'react';
const { width, height } = Dimensions.get('window');


export default function App() {

  const [messageValue, changeMessage] = useState('');
  let storedValue = '';

  const processText = (theText) =>{
    this.storedValue = theText;
  }

  const popValue = () => {
    changeMessage(this.storedValue);
  }

  return (
    <View style={styles.container}>
     <View style={styles.leftBox}>
        <Text> {messageValue}</Text>
       
     </View>
     <View style={styles.rightBox}>
        <TextInput 
        style={styles.input}
        placeholder='enterText'
        onChangeText={processText}
        >

        </TextInput>
        <Button onPress={popValue} 
        style={styles.btn}
        title="click to show">
          Click to View
        </Button>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  leftBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    width: width * 0.5,
    fontSize: 20,
  },
  rightBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    width: width * 0.5,
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 20,
    height: 30,
    width: 128,
    textAlign: 'center',
  }, 
  btn: {
    width: 200,
  }
});
