import Header from '@components/header';
import { CaretDoubleDown, CaretDoubleUp, FileArrowUp } from 'phosphor-react-native';
import { ImageBackground, SafeAreaView, View, Text, TextInput, Pressable } from 'react-native';
import { styles } from '../styles'

export default function Products() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require('@assets/background.png')} style={styles.imgBackground}>
                <Header />

                <View style={styles.form}>
                    <TextInput placeholder='Categoria' style={styles.input} />

                    <View style={styles.blockGroupButtons}>
                        <Pressable style={styles.buttonType}>
                            <CaretDoubleUp size={18} color='#858585' />
                            <Text style={{ color: '#858585', fontSize: 16 }}>Entrada</Text>
                        </Pressable>

                        <Pressable style={styles.buttonType}>
                            <CaretDoubleDown size={18} color='#858585' />
                            <Text style={{ color: '#858585', fontSize: 16 }}>Saída</Text>
                        </Pressable>
                    </View>

                    <TextInput placeholder='Descrição' style={styles.input} />

                    <TextInput placeholder='Valor' style={styles.input} />

                    <TextInput placeholder='Data do lançamento' style={styles.input} />

                    <View style={styles.inputFileBlock}>
                        <View style={styles.inputFile}>
                            <FileArrowUp color='#858585' size={32} />
                            <Text style={styles.textLabel}>Arquivo</Text>
                        </View>
                        <View style={styles.inputFileImage}>

                        </View>
                    </View>

                    <Pressable
                        onPress={() => { }}
                        style={styles.buttonDefault}
                    >
                        <Text style={styles.textButtonDefault}>Salvar</Text>
                    </Pressable>

                </View>

            </ImageBackground>
        </SafeAreaView >
    )
}