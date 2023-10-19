import { View, Text, FlatList, Alert } from 'react-native'
import { ImageBackground, SafeAreaView, Modal, Pressable } from 'react-native'
import { CaretDoubleDown, Faders } from 'phosphor-react-native'
import { styles } from '../styles'
import { dataList } from '@utils/database'
import Header from '@components/header'
import { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { IBalance } from '@utils/interface'

export default function ListBalance() {
    const [modalVisible, setModalVisible] = useState(false)
    const [balances, setBalances] = useState<IBalance[]>(dataList)

    function filterBalances(dateBalance: string, typeBalance: string) {
        if (dateBalance !== '') {
            const result = balances.filter(dl => dl.datebalance === dateBalance)
            setBalances(result)
        }
        if (typeBalance !== '') {
            const result = balances.filter(dl => dl.type === typeBalance)
            setBalances(result)
        }
        setModalVisible(!modalVisible)
    }

    useEffect(() => {
        setBalances(dataList)
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require('@assets/background.png')} style={styles.imgBackground}>
                <Header />

                <View style={styles.cardList}>
                    <View style={styles.headerScreen}>
                        <Text style={styles.titleCardList}>Lista de Lançamentos:</Text>
                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                            <Faders color='#000000' size={32} />
                        </Pressable>
                    </View>

                    <FlatList
                        data={balances}
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

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.modalFilter}>
                        <Text style={styles.titleCardList}>FILTRAR POR:</Text>
                        <View style={styles.modalFilterGroup}>
                            <Text style={styles.textLabel}>Data:</Text>
                            <TextInput placeholder='01/11/2023' />
                        </View>
                        <View style={styles.modalFilterGroup}>
                            <Text style={styles.textLabel}>Tipo:</Text>
                            <TextInput placeholder='Entrada' />
                        </View>
                        <Pressable
                            style={styles.buttonDefault}
                            onPress={() => filterBalances('', '')}>
                            <Text style={styles.textButtonDefault}>Filtrar</Text>
                        </Pressable>
                    </View>
                </Modal>
            </ImageBackground>
        </SafeAreaView>
    )
}