import { useState } from 'react';
import { ScrollView, SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert, View, Text, Button } from 'react-native';
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
        handleSubmit,
        reset,
        formState: { errors },
        } = useForm<FormData>({
            resolver: yupResolver(schema),
            defaultValues: {
                category: '',
                description: '',
                price: 0,
                datebalance: '',
            },
        })

    const onSubmit = (data :FormData) => {
        console.log(data)
        reset()
    }

    return (

        <BackgroundImage source={require('@assets/background.png')}>
            <Header />
            
            <ScrollView>
            <Form>
                <Controller
                    control={control}
                    rules={{
                    required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <InputDefault
                        placeholder="Categorias"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                    )}
                    name="category"
                />
                {errors.category && <Text>{errors.category.message}</Text>}
                    
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
                <Text>{errors.description && errors.description.message}</Text>

                <Controller
                    control={control}
                    rules={{
                    maxLength: 100,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <InputDefault
                        placeholder="Preço"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value.toString()}
                    />
                    )}
                    name="price"
                />
                <Text>{errors.price && errors.price.message}</Text>

                <Controller
                    control={control}
                    rules={{
                    maxLength: 100,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <InputDefault
                        placeholder="Data de lançamento"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                    )}
                    name="datebalance"
                />
                <Text>{errors.description && errors.description.message}</Text>

                <InputFileBlock>
                    <InputFile>
                        <IconFileUpload />
                        <TextLabel>Arquivo</TextLabel>
                    </InputFile>
                    <InputFileImage>

                    </InputFileImage>
                </InputFileBlock>

                <Button title="Submit" onPress={handleSubmit(onSubmit)} />
               </Form>
               </ScrollView>

        </BackgroundImage>


    )
}