import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, ImageBackground, Button } from 'react-native';
import axios

const Componentes = () =>{
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)

  useEffect(() =>{
    console.log("useEffect - executado")
  }, [numero1, numero2])
  console.log("componente() - executado")
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Componente</Text>
        <Text>Numero1: {numero1}</Text>
        <Button
          title="add"
          onPress={() => {
            setNumero1(numero1 + 1)
          }}
        />
        <Text>Numero2: {numero2}</Text>
        <Button
          title="add"
          onPress={() => {
            setNumero2(numero2 + 1)
          }}
        />
      </View>
    );
  }

export default () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Componentes />
    </View>
  );
};
