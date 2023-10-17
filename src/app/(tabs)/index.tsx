import { View, Text, SafeAreaView, ImageBackground, Image, FlatList } from 'react-native'
import { CaretDoubleUp, CaretDoubleDown, SignOut } from 'phosphor-react-native'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { styles } from '../../styles'

export default function Home() {
    const dataList = [
        {
            id: 'abc',
            name: 'Product X',
            type: 'Entrada',
            price: '35',
            datebalance: '01/1/2023'
        },
        {
            id: 'def',
            name: 'Product Y',
            type: 'Entrada',
            price: '35',
            datebalance: '01/1/2023'
        },
        {
            id: 'ghi',
            name: 'Product Z',
            type: 'Saída',
            price: '50',
            datebalance: '01/1/2023'
        },
        {
            id: 'jkl',
            name: 'Product W',
            type: 'Entrada',
            price: '20',
            datebalance: '01/1/2023'
        },
        {
            id: 'mno',
            name: 'Product V',
            type: 'Saída',
            price: '40',
            datebalance: '01/1/2023'
        },
        {
            id: 'azu',
            name: 'Product N',
            type: 'Saída',
            price: '40',
            datebalance: '01/1/2023'
        },
        {
            id: 'box',
            name: 'Product B',
            type: 'Saída',
            price: '40',
            datebalance: '01/1/2023'
        },
    ]

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={require('../../../assets/background.png')}
                style={styles.imgBackground}
            >
                <View style={styles.contentHome}>
                    <View style={styles.headerHome}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', gap: 10 }}>
                            <Image source={require('../../../assets/foto.png')} style={styles.imgProfile} />
                            <View>
                                <Text style={styles.textProfile}>Bem vindo!</Text>
                                <Text style={styles.textProfile}>Olá, Osmair</Text>
                            </View>
                        </View>
                        <SignOut color='#ffffff' size={32} />
                    </View>

                    <View style={styles.headerApp}>
                        <Image source={require('../../../assets/luzjovem.png')} style={{ width: 45 }} />
                        <Text style={{ fontWeight: '600' }}>CONTROLE FINANCEIRO</Text>
                        <Image source={require('../../../assets/farol.png')} style={{ width: 45 }} />
                    </View>

                    <View style={styles.cardBalance}>
                        <Text style={styles.textCardBalance}>Saldo Atual</Text>
                        <Text style={styles.textPriceCardBalance}>R$ 895,50</Text>
                    </View>

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

                    <View style={styles.cardList}>
                        <Text style={styles.titleCardList}>Últimos Lançamentos:</Text>
                        <FlatList
                            data={dataList}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <View style={styles.itemList}>
                                    <View style={{ alignItems: 'flex-start' }}>
                                        <Text style={{ fontSize: 20, fontWeight: '600' }}>{item.name}</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <CaretDoubleDown color='#000' size={14} />
                                            <Text style={{ marginLeft: 5, fontSize: 14 }}>{item.type}</Text>
                                        </View>
                                    </View>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <Text style={{ fontSize: 25, fontWeight: '600' }}>R$ {item.price},00</Text>
                                        <Text style={{ fontSize: 14 }}>{item.datebalance}</Text>
                                    </View>
                                </View>
                            )}
                        />

                    </View>
                </View>
            </ImageBackground>
            <StatusBar translucent backgroundColor='transparent' />
        </SafeAreaView>
    )
}