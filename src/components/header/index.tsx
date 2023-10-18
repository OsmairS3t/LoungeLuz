import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import { SignOut } from 'phosphor-react-native';

import { styles } from './styles';

export default function Header() {

    return (
        <View>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', gap: 10 }}>
                    <Image source={require('@assets/foto.png')} style={styles.imgProfile} />
                    <View>
                        <Text style={styles.textProfile}>Bem vindo!</Text>
                        <Text style={styles.textProfile}>Olá, Osmair</Text>
                    </View>
                </View>
                <SignOut color='#ffffff' size={32} />
            </View>

            <View style={styles.headerApp}>
                <Image source={require('@assets/luzjovem.png')} style={{ width: 50, height: 50 }} />
                <Text style={{ fontWeight: '600' }}>LOUNGE LUZ</Text>
                <Image source={require('@assets/farol.png')} style={{ width: 50, height: 50 }} />
            </View>
        </View>
    )
}
