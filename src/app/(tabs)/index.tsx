import { View, Text, SafeAreaView, ImageBackground, Image, Button } from 'react-native'
import { CaretDoubleUp, CaretDoubleDown, SignOut } from 'phosphor-react-native'
import { Link } from 'expo-router'

export default function Home() {

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
                <View style={{ marginTop: 10, justifyContent: 'flex-start' }}>
                    <View style={{
                        height: 50,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 10,
                        padding: 10
                    }}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', gap: 10 }}>
                            <Image source={require('../../../assets/foto.png')} style={{ width: 45, borderRadius: 50 }} />
                            <View>
                                <Text style={{ color: '#ffffff' }}>Bem vindo!</Text>
                                <Text style={{ color: '#ffffff' }}>Olá, Osmair</Text>
                            </View>
                        </View>
                        <SignOut color='#ffffff' size={32} />
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: '#ffffff',
                        padding: 8,
                        borderRadius: 5,
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 15,
                        marginBottom: 12
                    }}>
                        <Image source={require('../../../assets/luzjovem.png')} style={{ width: 45 }} />
                        <Text style={{ fontWeight: '600' }}>CONTROLE FINANCEIRO</Text>
                        <Image source={require('../../../assets/farol.png')} style={{ width: 45 }} />
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 8,
                        marginBottom: 20,
                        marginLeft: 20,
                        marginRight: 20,
                        width: 'auto',
                        height: 115,
                        borderRadius: 10,
                        backgroundColor: '#00000058',

                    }}>
                        <Text style={{ color: '#ffffff', fontSize: 16 }}>Saldo Atual</Text>
                        <Text style={{ color: '#ffffff', fontSize: 30, fontWeight: '600' }}>R$ 895,50</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 20,
                        marginLeft: 20,
                        marginRight: 20,
                    }}
                    >
                        <Link href='/'>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: 10,
                                backgroundColor: '#00277A',
                                borderRadius: 10
                            }}>
                                <CaretDoubleUp size={20} color='#fff' />
                                <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 10 }}>Entrada</Text>
                            </View>
                        </Link>

                        <Link href='/'>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: 10,
                                backgroundColor: '#92140C',
                                borderRadius: 10
                            }}>
                                <CaretDoubleDown size={20} color='#ffffff' />
                                <Text style={{ color: '#ffffff', fontSize: 20 }}>Saída</Text>
                            </View>
                        </Link>
                    </View>

                    <View style={{
                        width: '100%',
                        height: 512,
                        backgroundColor: '#ffffff9b',
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                        paddingLeft: 15,
                        paddingRight: 15,
                    }}
                    >
                        <Text style={{ paddingTop: 20, paddingBottom: 10, fontSize: 20, fontWeight: '600' }}>Últimos Lançamentos:</Text>
                        <View style={{
                            backgroundColor: '#ffffff',
                            marginBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 10,
                            paddingBottom: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderRadius: 10
                        }}
                        >
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: 20, fontWeight: '600' }}>Produto X</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <CaretDoubleDown color='#000' size={14} />
                                    <Text style={{ marginLeft: 5, fontSize: 14 }}>Entrada</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 25, fontWeight: '600' }}>R$ 35,00</Text>
                                <Text style={{ fontSize: 14 }}>01/11/2023</Text>
                            </View>
                        </View>

                        <View style={{
                            backgroundColor: '#ffffff',
                            marginBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 10,
                            paddingBottom: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderRadius: 10
                        }}
                        >
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: 20, fontWeight: '600' }}>Produto X</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <CaretDoubleUp color='#000' size={14} />
                                    <Text style={{ marginLeft: 5, fontSize: 14 }}>Entrada</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 25, fontWeight: '600' }}>R$ 35,00</Text>
                                <Text style={{ fontSize: 14 }}>01/11/2023</Text>
                            </View>
                        </View>

                        <View style={{
                            backgroundColor: '#ffffff',
                            marginBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 10,
                            paddingBottom: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderRadius: 10
                        }}
                        >
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: 20, fontWeight: '600' }}>Produto X</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <CaretDoubleDown color='#000' size={14} />
                                    <Text style={{ marginLeft: 5, fontSize: 14 }}>Entrada</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 25, fontWeight: '600' }}>R$ 35,00</Text>
                                <Text style={{ fontSize: 14 }}>01/11/2023</Text>
                            </View>
                        </View>

                        <View style={{
                            backgroundColor: '#ffffff',
                            marginBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 10,
                            paddingBottom: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderRadius: 10
                        }}
                        >
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: 20, fontWeight: '600' }}>Produto X</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <CaretDoubleDown color='#000' size={14} />
                                    <Text style={{ marginLeft: 5, fontSize: 14 }}>Entrada</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 25, fontWeight: '600' }}>R$ 35,00</Text>
                                <Text style={{ fontSize: 14 }}>01/11/2023</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </ImageBackground>
        </SafeAreaView>
    )
}