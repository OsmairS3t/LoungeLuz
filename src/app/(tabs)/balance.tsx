import Header from '@components/header';
import { Link } from 'expo-router';
import { CaretDoubleDown, CaretDoubleUp } from 'phosphor-react-native';
import { View, Text, TextInput, Button } from 'react-native';
import { ImageBackground, SafeAreaView } from 'react-native'
import { styles } from '../styles'

export default function Products() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={require('@assets/background.png')}
                style={{
                    flex: 1,
                    width: 410,
                    height: 840,
                }}
            >
                <Header />

                <View style={styles.form}>
                    <TextInput placeholder='Categoria' style={styles.input} />

                    <View style={styles.blockGroupButtons}>
                        <Link href='/'>
                            <View style={styles.buttonEntrada}>
                                <CaretDoubleUp size={20} color='#fff' />
                                <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 10 }}>Entrada</Text>
                            </View>
                        </Link>

                        <Link href='/'>
                            <View style={styles.buttonSaida}>
                                <CaretDoubleDown size={20} color='#ffffff' />
                                <Text style={{ color: '#ffffff', fontSize: 20 }}>Saída</Text>
                            </View>
                        </Link>
                    </View>

                    <TextInput placeholder='Descrição' style={styles.input} />

                    <TextInput placeholder='Valor' style={styles.input} />

                    <TextInput placeholder='Data do lançamento' style={styles.input} />

                    <Button title='Salvar' color='#00277A' />
                </View>

            </ImageBackground>
        </SafeAreaView >
    )
}