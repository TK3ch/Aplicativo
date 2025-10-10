import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";



interface Personagem{
    id: number;
    name: string;
    images: [string];
}


export default function Home(){
    const [personagem, setPersonagens] = useState<Personagem>([]);

    useEffect(() => {
        async function carregarPersonagens(){
        const dados = await fetchCharacters();
        setPersonagens(dados.characters)
        }
carregarPersonagens();
    }, []);

return (
<View>
  <Text> Lista de Personagens</Text>

  <FlatList 
  data={personagens}
  keyExtractor={({item.id.toString()})} 
  renderItem={({item}) => (
  <View>
     <Image source={{uri: item[0]}}>
     <Text>{item.name} - {item.id}</Text>
  </View>
  )
}

 </View>


)}

function fetchCharacters() {
    throw new Error("Function not implemented.");
}
