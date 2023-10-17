import { View, Text } from 'react-native';
import { ImageBackground, SafeAreaView } from 'react-native'
import { styles } from '../../styles'

export default function Products() {
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
                    <Text>Produtos</Text>
                </View>
            </ImageBackground>
        </SafeAreaView >
    )
}