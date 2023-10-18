import { View, Text, FlatList } from 'react-native'
import { ImageBackground, SafeAreaView } from 'react-native'
import { CaretDoubleDown, Faders, SignOut } from 'phosphor-react-native'
import { styles } from '../styles'
import { dataList } from '@utils/database'
import Header from '@components/header'

export default function ListBalance() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={require('@assets/background.png')}
                style={{
                    flex: 1,
                    width: 410,
                    height: 840,
                }}>

                <Header />

                <View style={styles.cardList}>
                    <View style={styles.headerScreen}>
                        <Text style={styles.titleCardList}>Lista de Lançamentos:</Text>
                        <Faders color='#000000' size={32} />
                    </View>

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
        </SafeAreaView>
    )
}