import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 173,
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        marginBottom: 55
    },
    form: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: -54 / 2,
        width: '100%',
        height: 54,
    },
    input: {
        flex: 1,
        height: 54,
        padding: 16,
        color: '#F2F2F2',
        backgroundColor: '#262626',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#0D0D0D',
        marginRight: 4,
        fontFamily: 'Inter_400',
        fontSize: 16
    },
    button: {
        width: 52,
        height: 52,
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    }
})