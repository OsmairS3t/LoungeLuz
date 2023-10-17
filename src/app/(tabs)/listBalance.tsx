import { View, Text } from 'react-native'
import { ImageBackground, SafeAreaView } from 'react-native'

export default function ListBalance() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={require('../../../assets/background.png')}
                style={{
                    flex: 1,
                    width: 410,
                    height: 840,
                }}
            >
                <View>
                    <Text>Lista de Lançamentos</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}