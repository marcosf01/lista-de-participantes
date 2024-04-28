import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    containerParticipants: {
        paddingHorizontal: 24
    },
    totalParticipants: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    containerCount: {
        height: 19,
        width: 30,
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 999
    },
    textCount: {
        color: '#4EA8DE',
        fontFamily: 'Inter_700'
    },
    totalCount: {
        color: '#D9D9D9',
        fontFamily: 'Inter_700'
    },
    containerList: {

    }
})