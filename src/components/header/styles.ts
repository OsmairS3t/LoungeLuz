import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        padding: 10
    },

    imgProfile: {
        width: 45,
        borderRadius: 50
    },

    textProfile: {
        color: '#ffffff',
    },

    headerApp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff6f',
        height: 60,
        padding: 8,
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
        marginBottom: 12
    },
})