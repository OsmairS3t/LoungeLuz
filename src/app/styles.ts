import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imgBackground: {
        flex: 1,
        width: 410,
        height: 840,
    },

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
        backgroundColor: '#ffffff',
        height: 60,
        padding: 8,
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
        marginBottom: 12
    },

    content: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
    },

    cardBalance: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        width: 'auto',
        height: 115,
        borderRadius: 10,
        backgroundColor: '#00000058',
    },

    textCardBalance: {
        color: '#ffffff',
        fontSize: 16,
    },

    textPriceCardBalance: {
        color: '#ffffff',
        fontSize: 30,
        fontWeight: '600',
    },
    
    buttonType: {
        width: 160,
        padding: 10,
        gap: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ededed',
        borderWidth: 1,
        borderColor: '#858585',
        borderRadius: 10,
    },

    buttonEntrada: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#00277A',
        borderRadius: 10
    },

    buttonSaida: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#92140C',
        borderRadius: 10
    },

    cardList: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingLeft: 15,
        paddingRight: 15,
    },

    titleCardList: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 14,
        fontWeight: '600'
    },

    itemList: {
        backgroundColor: '#ffffff',
        marginBottom: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#b8b8b8',
        borderRadius: 10,
    },

    headerScreen: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
    },

    form: {
        height: '100%',
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        gap: 10,
        backgroundColor: '#ffffff',
    },

    input: {
        height: 60,
        padding: 16,
        backgroundColor: '#EDEDED',
        borderWidth: 1,
        borderColor: '#737373',
        borderRadius: 10,
        fontSize: 16,
    },

    inputFileBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },

    inputFile: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#858585',
        backgroundColor: '#EDEDED',
        padding: 10,
    },

    inputFileImage: {
        borderWidth: 1,
        borderColor: '#EDEDED',
        width: 240,
        height: 80,
    },

    blockGroupButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    modalFilter: {
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 220,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius: 10,
    },

    textLabel: {
        color: '#000000',
    },

    modalFilterGroup: {
        flexDirection: 'row',
        gap: 8,
        marginTop: 4,
        marginBottom: 4,
    },

    buttonDefault: {
        marginTop: 10,
        marginBottom: 10,
        padding: 16,
        width: '100%',
        height: 60,
        borderRadius: 10,
        backgroundColor: '#00277A',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textButton: {
        color: '#858585',
        fontSize: 18,
    },

    textButtonDefault: {
        color: '#ffffff',
        fontSize: 18,
    },
});