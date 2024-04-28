import { Alert, FlatList, Image, Text, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    const [newParticipant, setNewParticipant] = useState('')

    function handleParticipantAdd() {
        if (participants.includes(newParticipant)) {
            return Alert.alert("Participante existe!", "Já existe um participante com esse nome")
        }

        setParticipants((prevState) => [...prevState, newParticipant])
        setNewParticipant('')
    }

    function handleRemoveParticipant(name: string) {

        Alert.alert('Remover', 'Deseja remover o participante?', [
            {
                text: 'Sim',
                onPress: () => setParticipants((prevState) => prevState.filter((participant) => participant !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    const totalParticipants = participants.length

    return(
        <View style={styles.container}>
            <Header value={newParticipant} onPress={handleParticipantAdd} onChangeText={setNewParticipant}/>

            <View style={styles.containerParticipants}>
                <View style={styles.totalParticipants}>
                    <Text style={styles.textCount}>Total de participantes</Text>
                    <View style={styles.containerCount}>
                        <Text style={styles.totalCount}>{totalParticipants}</Text>
                    </View>
                </View>
                
                <FlatList 
                    data={participants}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Participant
                            key={item}
                            name={item} 
                            onRemove={() => handleRemoveParticipant(item)}
                        />
                    )}
                />
            </View>
        </View>
    )
}