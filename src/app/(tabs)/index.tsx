import { View, Text, SafeAreaView } from 'react-native'
import { Image } from 'expo-image';

export default function Home() {

    return (
        <SafeAreaView>
            <Image 
                source={require('../../../assets/background.png')}
                style={{
                    width: 410,
                    height: 850,
                    zIndex: 0
                }}
            />
            <View style={{zIndex:1}}>
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    )
}