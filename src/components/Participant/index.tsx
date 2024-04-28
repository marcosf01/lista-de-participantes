import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons'

type Props = {
    name: string,
    onRemove: () => void
}

export function Participant({name, onRemove}: Props) {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>{name}</Text>
            </View>
            
            <TouchableOpacity>
                <MaterialCommunityIcons name="trash-can-outline" size={20} color='#808080' onPress={onRemove}/>
            </TouchableOpacity>
        </View>
    )
}