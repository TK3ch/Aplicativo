import React, { useEffect, useState } from "react";
import { FlatList, View, Text, Image } from "react-native";
import { fetchCharacters } from "@/services/list";

interface Personagem {
    id: number;
    name: string;
    images: [string];
}

export default function Home() {
    const [personagens, setPersonagens] = useState<Personagem[]>([]);

    useEffect(() => {
        async function carregarPersonagens() {
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
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Image source={{ uri: item.images[0] }}/>
                        <Text>{item.name} - {item.id}</Text>
                    </View>
                )}
            />

        </View>


    )
}
