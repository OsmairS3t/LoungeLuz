import { useState } from 'react';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Header from '@components/header';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
    BackgroundImage,
    Form,
    BlockGroupButtons,
    ButtonType,
    ButtonTypeText,
    InputDefault,
    InputFile,
    InputFileBlock,
    InputFileImage,
    TextLabel,
    ButtonDefault,
    TextButtonDefault,
    IconTypeIncome,
    IconTypeOutcome,
    IconFileUpload,
} from '../../styles'
import { TextInput } from 'react-native-gesture-handler';

//https://developerplus.com.br/como-utilizar-o-keyboardawarescrollview-no-react-native-para-android/
const schema = yup.object().shape({
    category: yup.string().required('A categoria é necessária.'),
    description: yup.string().required('A descrição é necessária.'),
    price: yup.number().min(1).required('Favor informe valor numérico.'),
    datebalance: yup.string().required('A data deve ser válida.'),
})

type FormData = {
    category: string;
    description: string;
    price: number;
    datebalance: string;
}

export default function Products() {
    const [category, setCategory] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('0')
    const [dateBalance, setDateBalance] = useState('')
    const [isActive, setIsActive] = useState(false)

    const {
        control,
        register,
        handleSubmit,
        formState: { errors }, } = useForm<FormData>({
            resolver: yupResolver(schema)
        });

    const OnSubmit = (data: FormData) => {
        console.log(data)
    }

    return (

        <BackgroundImage source={require('@assets/background.png')}>
            <Header />

            <Form>
                <Controller
                    control={control}
                    name='category'
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                        <InputDefault
                            value={value}
                            placeholder='Categoria'
                            onChangeText={onChange}
                        />
                    )}
                />

                <BlockGroupButtons>
                    <ButtonType>
                        <IconTypeIncome />
                        <ButtonTypeText>Entrada</ButtonTypeText>
                    </ButtonType>

                    <ButtonType>
                        <IconTypeOutcome />
                        <ButtonTypeText>Saída</ButtonTypeText>
                    </ButtonType>
                </BlockGroupButtons>

                <Controller
                    control={control}
                    name='description'
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                        <InputDefault
                            value={value}
                            placeholder='Descrição'
                            onChangeText={onChange}
                        />
                    )}
                />

                {/* <Controller
                            control={control}
                            name='price'
                            rules={{ required: true }}
                            render={({ field: { value, onChange } }) => (
                                <InputDefault
                                    value={value}
                                    placeholder='Preço'
                                    onChangeText={onChange}
                                />
                            )}
                        /> */}

                <Controller
                    control={control}
                    name='datebalance'
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                        <InputDefault
                            value={value}
                            placeholder='Data de Lançamento'
                            onChangeText={onChange}
                        />
                    )}
                />

                <InputFileBlock>
                    <InputFile>
                        <IconFileUpload />
                        <TextLabel>Arquivo</TextLabel>
                    </InputFile>
                    <InputFileImage>

                    </InputFileImage>
                </InputFileBlock>

                <ButtonDefault onPress={handleSubmit(OnSubmit)}>
                    <TextButtonDefault>Salvar</TextButtonDefault>
                </ButtonDefault>

            </Form>

        </BackgroundImage>


    )
}