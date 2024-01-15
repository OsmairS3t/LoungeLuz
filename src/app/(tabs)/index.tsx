import { SafeAreaView, FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { dataList } from '@utils/database'
import Header from '@components/header'

import {
    Container,
    BackgroundImage,
    CardBalance,
    TextCardBalance,
    TextPriceCardBalance,
    CardList,
    ItemList,
    ItemListContainer,
    ItemListContainerTop,
    ItemListContainerBottom,
    ItemListContainerName,
    ItemListContainerType,
    ItemListContainerPrice,
    ItemListContainerDate,
    ItemListContainerIcon,
    TitleCardList
} from '../../styles'

export default function Home() {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BackgroundImage source={require('@assets/background.png')}>
                <Header />

                <CardBalance>
                    <TextCardBalance>Saldo Atual</TextCardBalance>
                    <TextPriceCardBalance>R$ 895,50</TextPriceCardBalance>
                </CardBalance>

                <CardList>
                    <TitleCardList>Últimos Lançamentos:</TitleCardList>
                    <FlatList
                        alwaysBounceVertical
                        data={dataList}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <ItemList key={item.id}>
                                <ItemListContainer>
                                    <ItemListContainerName>{item.name}</ItemListContainerName>
                                    <ItemListContainerTop>
                                        <ItemListContainerIcon />
                                        <ItemListContainerType>{item.type}</ItemListContainerType>
                                    </ItemListContainerTop>
                                </ItemListContainer>
                                <ItemListContainerBottom>
                                    <ItemListContainerPrice>{Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',
                                    }).format(item.price)}</ItemListContainerPrice>
                                    <ItemListContainerDate>{item.datebalance}</ItemListContainerDate>
                                </ItemListContainerBottom>
                            </ItemList>
                        )}
                    />
                </CardList>
            </BackgroundImage>
            <StatusBar translucent backgroundColor='transparent' />
        </SafeAreaView>
    )
}