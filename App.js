import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, Modal, Button } from "react-native-paper";

export default function App(){

  const [modalVisual, setModalVisual] = useState(false)

  class NewPageModal extends React.Component{
    constructor(props){
      super(props)
      modalVisevel(false)
    }
    render()
    {
      return(
        <Modal transparent = {true}
      visible={modalVisual(false)}>
        <View>
          <Text>paggina modal</Text>
          <Button title =" voltar pagina incial" onPress={()=>{
            setModalVisual(false)
          }}/>
        </View>
      </Modal>
      )
      
    }

  }

  return(


    <View style ={{flex: 1, justifyContent: "center", 
    alignText: "center"}}>
      <Text>Tela principal</Text>
      <Button title="abrir modal " onPress={()=>{
        setModalVisual(true)
      }}/>
      <NewPageModal/>
    </View>
  )
}