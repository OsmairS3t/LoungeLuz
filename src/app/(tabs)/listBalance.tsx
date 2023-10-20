import { FlatList, Alert } from 'react-native'
import { SafeAreaView, Modal, Pressable } from 'react-native'
import { dataList } from '@utils/database'
import Header from '@components/header'
import { useEffect, useState } from 'react'
import { IBalance } from '@utils/interface'
import {
    BackgroundImage,
    CardList,
    TitleCardList,
    ItemList,
    ItemListContainer,
    ItemListContainerIcon,
    ItemListContainerName,
    ItemListContainerType,
    ItemListContainerPrice,
    ItemListContainerDate,
    ItemListContainerTop,
    ItemListContainerBottom,
    IconFilter,
    ModalFilter,
    ModalFilterGroup,
    TextLabel,
    InputDefault,
    HeaderScreen,
    ButtonDefault,
    TextButtonDefault,
} from '../../styles'

export default function ListBalance() {
    const [dateBalance, setDateBalance] = useState('')
    const [type, setType] = useState('')
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
            <BackgroundImage source={require('@assets/background.png')}>
                <Header />

                <CardList>
                    <HeaderScreen>
                        <TitleCardList>Lista de Lançamentos:</TitleCardList>
                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                            <IconFilter />
                        </Pressable>
                    </HeaderScreen>

                    <FlatList
                        data={balances}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <ItemList>
                                <ItemListContainer>
                                    <ItemListContainerName>{item.name}</ItemListContainerName>
                                    <ItemListContainerTop>
                                        <ItemListContainerIcon />
                                        <ItemListContainerType>{item.type}</ItemListContainerType>
                                    </ItemListContainerTop>
                                </ItemListContainer>
                                <ItemListContainerBottom>
                                    <ItemListContainerPrice>R$ {item.price},00</ItemListContainerPrice>
                                    <ItemListContainerDate>{item.datebalance}</ItemListContainerDate>
                                </ItemListContainerBottom>
                            </ItemList>
                        )}
                    />
                </CardList>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <ModalFilter>
                        <TitleCardList>FILTRAR POR:</TitleCardList>
                        <ModalFilterGroup>
                            <TextLabel>Data:</TextLabel>
                            <InputDefault
                                placeholder=''
                                value={dateBalance}
                                onChangeText={setDateBalance}
                            />
                        </ModalFilterGroup>
                        <ModalFilterGroup>
                            <TextLabel>Tipo:</TextLabel>
                            <InputDefault placeholder='' />
                        </ModalFilterGroup>
                        <ButtonDefault onPress={() => filterBalances(dateBalance, type)}>
                            <TextButtonDefault>Filtrar</TextButtonDefault>
                        </ButtonDefault>
                    </ModalFilter>
                </Modal>
            </BackgroundImage>
        </SafeAreaView>
    )
}