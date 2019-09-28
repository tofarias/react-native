import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export class App extends Component {
  constructor(props){
    super(props);
    this.mensagem = "";
    this.state={nome:"", mensagem:"Hello World!"}; 
    this.mudarTexto = this.mudarTexto.bind(this);
    this.mostraHello = this.mostraHello.bind(this);

    
  }

  mudarTexto(texto){
    this.setState({nome: texto});
  }

  mostraHello(){
    const mens = this.state.nome 
    ? "Hello "+this.state.nome
    : "Hello World!";
    
    this.setState({mensagem: mens});

  }

  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Text>Nome:</Text>
        <TextInput placeholder="Nome..." value={this.state.nome} onChangeText={this.mudarTexto} ></TextInput>
        <Button title="OK" onPress={this.mostraHello} />
        <Text>{this.state.mensagem}</Text>
      </View>
    );
  }
}
