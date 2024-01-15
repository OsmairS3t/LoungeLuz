import { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import Header from '@components/header';
import { Feather } from '@expo/vector-icons'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Category } from '../../utils/database'
import * as ImagePicker from 'expo-image-picker';

import {
    BackgroundImage,
    Form,
    GroupType,
    ButtonTypeText,
    SelectDefault,
    TitleTypeBalance,
    TexttypeBalance,
    TypeBalance,
    InputDefault,
    InputMasked,
    InputFile,
    InputFileBlock,
    GroupImage,
    GroupButton,
    PhotoImage,
    ImgCapture,
    BtnImage,
    IconCamera,
    IconImage,
    InputFileImage,
    TextLabel,
    ButtonDefault,
    TextButtonDefault,
    IconFileUpload,
} from '../../styles'

//https://developerplus.com.br/como-utilizar-o-keyboardawarescrollview-no-react-native-para-android/
const schema = yup.object().shape({
    description: yup.string().required('A descrição é necessária.'),
    price: yup.number().min(1).required('Favor informe valor numérico.'),
    datebalance: yup.string().required('A data deve ser válida.'),
})

type FormData = {
    description: string;
    price: number;
    datebalance: string;
}

export default function Products() {
    const [category, setCategory] = useState(0)
    const [messageCategory, setMessageCategory] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('0')
    const [dateBalance, setDateBalance] = useState('')
    const [file, setFile] = useState('')
    const [isActive, setIsActive] = useState(false)
    const categories = ['Lanchonete','Ofertas','Eventos','Produtos']
    const [isTypeBalanceEnabled, setIsTypeBalanceEnabled] = useState(false);
    const [imgComprove, setImgComprove] = useState<string>('/assets/farol.png')
    const toggleSwitch = () => setIsTypeBalanceEnabled(previousState => !previousState);
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
        } = useForm<FormData>({
            resolver: yupResolver(schema),
            defaultValues: {
                description: '',
                price: 0,
                datebalance: '',
            },
        })

        const PickImageLibrary = async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [2, 4],
                quality: 1
            })
            console.log(result)
            if (!result.canceled) {
                setImgComprove(result.assets[0].uri)
            }
        }
    
        const PickImageCamera = async () => {
            //LoadImage();
            let permissionResult = await ImagePicker.requestCameraPermissionsAsync()
            if (permissionResult.granted === false) {
                alert("You've refused to allow this appp to access your camera!");
                return;
            }
            const result = await ImagePicker.launchCameraAsync();
            console.log(result)
            if (!result.canceled) {
                setImgComprove(result.assets[0].uri);
                console.log(result.assets[0].uri);
            }
        }        
    const onSubmit = (data :FormData) => {
        if (category === 0) {
            setMessageCategory('É necessário informar a categoria.')
        } else {
            const dataForm = {
                idcategory: category,
                name: data.description,
                type: isTypeBalanceEnabled ? 'Saida': 'Entrada',
                price: data.price,
                datebalance: data.datebalance,
                file: file
            }
            console.log(dataForm)
            //reset()
        }
    }

    return (
        <BackgroundImage source={require('@assets/background.png')}>
            <Header />
            
            <ScrollView>
            <Form>
                <SelectDefault
                    data={categories}
                    onSelect={(selectedItem, index) => {
                        setCategory(index + 1)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                    defaultButtonText="Categoria"
                    dropdownIconPosition='right'
                    renderDropdownIcon={() => (
                        <Feather name="chevron-down" size={24} color="black" />
                    )}
                    buttonStyle={{
                        width: 'auto',
                        justifyContent: 'flex-start',
                        alignContent: 'flex-start',
                    }}
                />
                {messageCategory && <Text>{messageCategory}</Text>}

                <GroupType>
                    <TitleTypeBalance>Tipo:</TitleTypeBalance>
                    <TypeBalance 
                        trackColor={{false: '#767577', true: '#767577'}}
                        thumbColor={isTypeBalanceEnabled ? '#0c9ff5' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isTypeBalanceEnabled}
                    />
                    <TexttypeBalance>{isTypeBalanceEnabled ? 'Saida': 'Entrada'}</TexttypeBalance>
                </GroupType>

                <Controller
                    control={control}
                    rules={{
                    maxLength: 100,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <InputDefault
                        placeholder="Descrição"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                    )}
                    name="description"
                />
                {errors.description && <Text>{errors.description.message}</Text>}

                <Controller
                    control={control}
                    rules={{
                    maxLength: 100,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <InputDefault
                        placeholder="Preço"
                        onBlur={onBlur}
                        keyboardType='decimal-pad'
                        onChangeText={onChange}
                        value={value.toString()}
                    />
                    )}
                    name="price"
                />
                {errors.price && <Text>{errors.price.message}</Text>}

                <Controller
                    control={control}
                    rules={{
                    maxLength: 100,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <InputMasked
                        type='datetime'
                        options={{
                            maskType: 'BRL',
                            format: 'dd/mm/aaaa',
                        }}
                        placeholder="dd/mm/aaaa"
                        onBlur={onBlur}
                        keyboardType='numeric'
                        onChangeText={onChange}
                        value={value}
                    />
                    )}
                    name="datebalance"
                />
                {errors.description && <Text>{errors.description.message}</Text>}

                <GroupImage>
                    <GroupButton>
                        <TexttypeBalance>Incluir Comprovante:</TexttypeBalance>
                        <BtnImage onPress={PickImageLibrary}>
                            <IconImage />
                        </BtnImage>
                        <BtnImage onPress={PickImageCamera}>
                            <IconCamera />
                        </BtnImage>
                    </GroupButton>
                    <PhotoImage>
                        <ImgCapture source={{ uri: imgComprove }} />
                    </PhotoImage>
                </GroupImage>

                <ButtonDefault onPress={handleSubmit(onSubmit)}>
                    <TextButtonDefault>Salvar</TextButtonDefault>
                </ButtonDefault>
               </Form>
               </ScrollView>

        </BackgroundImage>


    )
}