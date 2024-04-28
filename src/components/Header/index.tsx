import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import rocket from "../../../assets/rocket.png"

type Props = {
    onPress: () => void,
    onChangeText: (participant: string) => void,
    value: string
}

export function Header({onPress, onChangeText, value }: Props) {
    return(
        <View style={styles.container}>
            <Image source={rocket}/>
            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Adicione um participante"
                    placeholderTextColor='#808080'
                    value={value}
                    onChangeText={onChangeText}
                />
                <TouchableOpacity style={styles.button}>
                    <MaterialCommunityIcons name="plus-circle-outline" size={20} color='#F2F2F2' onPress={onPress} />
                </TouchableOpacity>
            </View>
        </View>
    )
}