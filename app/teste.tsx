import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Home(){
    const [name, setName] = useState(''); // useState do nome
    const [idade, setIdade] = useState(''); // useState do idade
    const [sport, setSport] = useState('');  
    return(
        <View style ={styles.body}>
            <TextInput 
            placeholder='Digite seu nome' onChangeText={setName}
            />
            <TextInput 
            placeholder='Digite sua idade' onChangeText={setIdade}
            />
              <TextInput 
            placeholder='Digite seu esporte favorito' onChangeText={setSport}
            />
            <Text style={styles.title}>
                Olá, eu sou {name}
                Tenho anos {idade} de idade
                E gosto muito de {sport}
            </Text>
             
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "red",
        padding: "auto"
    },
    title: {
        fontSize: 19
    }
})