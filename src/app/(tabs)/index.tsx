import { View, Text, SafeAreaView, ImageBackground, Image, FlatList } from 'react-native'
import { CaretDoubleUp, CaretDoubleDown, SignOut } from 'phosphor-react-native'
import { StatusBar } from 'expo-status-bar'
import { styles } from '../styles'
import { dataList } from '@utils/database'
import Header from '@components/header'

export default function Home() {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require('@assets/background.png')} style={styles.imgBackground}>
                <Header />

                <View style={styles.cardBalance}>
                    <Text style={styles.textCardBalance}>Saldo Atual</Text>
                    <Text style={styles.textPriceCardBalance}>R$ 895,50</Text>
                </View>

                <View style={styles.cardList}>
                    <Text style={styles.titleCardList}>Últimos Lançamentos:</Text>
                    <FlatList
                        data={dataList}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.itemList}>
                                <View style={{ alignItems: 'flex-start' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.name}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <CaretDoubleDown color='#000' size={14} />
                                        <Text style={{ marginLeft: 5, fontSize: 12 }}>{item.type}</Text>
                                    </View>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 18, fontWeight: '600' }}>R$ {item.price},00</Text>
                                    <Text style={{ fontSize: 12 }}>{item.datebalance}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </ImageBackground>
            <StatusBar translucent backgroundColor='transparent' />
        </SafeAreaView>
    )
}