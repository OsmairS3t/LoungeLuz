import { useState } from 'react';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '@components/header';
import { useForm, Controller } from 'react-hook-form';
import yupResolver from '@hookform/resolvers/yup';
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

    const { register,
        setValue,
        control,
        handleSubmit,
        formState: { errors }, } = useForm<FormData>();

    function onSubmit(data: FormData) {
        console.log(data)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <BackgroundImage source={require('@assets/background.png')}>
                    <Header />

                    <Form>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputDefault
                                    placeholder="Categoria"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="category"
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
                            rules={{
                                required: true,
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

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputDefault
                                    placeholder="Valor"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={String(value)}
                                />
                            )}
                            name="price"
                        />

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputDefault
                                    placeholder="Data do lançamento"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="datebalance"
                        />

                        <InputFileBlock>
                            <InputFile>
                                <IconFileUpload />
                                <TextLabel>Arquivo</TextLabel>
                            </InputFile>
                            <InputFileImage>

                            </InputFileImage>
                        </InputFileBlock>

                        <ButtonDefault onPress={() => { handleSubmit(onSubmit) }}>
                            <TextButtonDefault>Salvar</TextButtonDefault>
                        </ButtonDefault>

                    </Form>

                </BackgroundImage>
            </TouchableWithoutFeedback>
        </SafeAreaView >
    )
}