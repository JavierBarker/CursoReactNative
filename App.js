import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Escriba su Objetivo'/>
        <Button title='Agregar'/>
      </View>
      <View>
        <Text>lista de Objetivos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: '#ffec00'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput:{
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    marginRight: 8,
    padding: 8
  }
});
