import { Camera, CaretDoubleDown, CaretDoubleUp, Faders, FileArrowUp, Image } from 'phosphor-react-native';
import { TextInputMask } from 'react-native-masked-text';
import SelectDropdown from 'react-native-select-dropdown';
import styled from 'styled-components/native';
import { Image as Img } from 'react-native';
import { Feather } from '@expo/vector-icons';

//login
export const ContainerLogin = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const GroupTitleLogin = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #ffffff48;
    width: 350px;
    height: 100px;
    border-radius: 10px;
`;

export const TitleLogin = styled.Text`
    font-size: 28px;
    font-weight: 700;
`;

export const ImageLogin = styled(Img)``;

export const ButtonLogin = styled.Pressable`
    width: 350px;
    height: 70px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    gap: 16px;
    border-radius: 10px;
    padding: 10px 20px;
    background-color: #00277A;
`;

export const IconButtonLogin = styled(Feather)`
    color: #ffffff;
`;

export const TextButtonLogin = styled.Text`
    font-size: 20px;
    color: #ffffff;
`;


//index.tsx
export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const BackgroundImage = styled.ImageBackground`
    flex: 1;
    width: 410px;
    height: 840px;
`;

export const CardBalance = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
    width: auto;
    height: 115px;
    border-radius: 10px;
    background-color: #00000058;
`;

export const TextCardBalance = styled.Text`
    color: #ffffff;
    font-size: 16px;
`;

export const TextPriceCardBalance = styled.Text`
    color: #ffffff;
    font-size: 30px;
    font-weight: 600;
`;

export const CardList = styled.View`
    flex: 1;
    background-color: #ffffff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding-left: 15px;
    padding-right: 15px;
`;


export const TitleCardList = styled.Text`
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
`;

export const ItemList = styled.View`
    background-color: #ffffff;
    margin-bottom: 5px;
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    border-width: 1px;
    border-color: #b8b8b8;
    border-radius: 10px;
`;

export const ItemListContainerName = styled.Text`
    font-size: 16px;
    font-weight: 600;
`;

export const ItemListContainerType = styled.Text`
    font-size: 12px;
    margin-left: 4px;
`;

export const ItemListContainerPrice = styled.Text`
    font-size: 18px;
    font-weight: 600;
`;

export const ItemListContainerDate = styled.Text`
    font-size: 12px;
`;

export const ItemListContainerIcon = styled(CaretDoubleDown).attrs(({ theme }) => ({
    color: '#000000'
}))`
    width: 14px;
`;

export const ItemListContainer = styled.View`
    align-items: flex-start;
`;

export const ItemListContainerTop = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const ItemListContainerBottom = styled.View`
    align-items: flex-end;
`;

//balances
export const Form = styled.View`
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    gap: 10px;
    background-color: #ffffff88;
`;

export const SelectDefault = styled(SelectDropdown)`
    height: 60px;
    padding: 16px;
    background-color: #EDEDED;
    border-width: 1px;
    border-color: #737373;
    border-radius: 10px;
    font-size: 16px;
`;

export const GroupType = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`;

export const TitleTypeBalance = styled.Text`
    font-weight: 600;
    font-size: 18px;
    margin-right: 20px;
`;

export const TexttypeBalance = styled.Text`
    font-weight: 500;
    font-size: 18px;
`;

export const TypeBalance = styled.Switch`
`;

export const InputDefault = styled.TextInput`
    height: 60px;
    padding: 16px;
    background-color: #EDEDED;
    border-width: 1px;
    border-color: #737373;
    border-radius: 10px;
    font-size: 16px;
`;

export const InputMasked = styled(TextInputMask)`
    height: 60px;
    padding: 16px;
    background-color: #EDEDED;
    border-width: 1px;
    border-color: #737373;
    border-radius: 10px;
    font-size: 16px;
`;

export const ButtonTypeText = styled.Text`
    color: #858585;
    font-size: 16px;
`;

export const InputFile = styled.View`
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-color: #858585;
    background-color: #EDEDED;
    padding: 10px;
`;

export const InputFileBlock = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 10px;
`;

export const InputFileImage = styled.View`
    border-width: 0px;
    border-color: #EDEDED;
    width: 240px;
    height: 80px;
`;

export const TextLabel = styled.Text`
    color: #000000;
`;


export const GroupImage = styled.View`
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
`;

export const GroupButton = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
`;

export const PhotoImage = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ImgCapture = styled(Img)`
    width: 280px;
    height: 280px;
`;

export const BtnImage = styled.Pressable`
    width: 40px;
    height: 40px;
    padding: 5px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BG_SCREEN};
`;

export const IconCamera = styled(Camera).attrs(({theme})=>({
    size: 32,
    color: '#FAFAFA'
}))``;

export const IconImage = styled(Image).attrs(({theme})=>({
    size: 32,
    color: '#FAFAFA'
}))``;



export const ButtonDefault = styled.Pressable`
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 16px;
    width: 100%;
    height: 60px;
    border-radius: 10px;
    background-color: #00277A;
    justify-content: center;
    align-items: center;
`;

export const TextButtonDefault = styled.Text`
    color: #ffffff;
    font-size: 18px;
`;

export const IconFileUpload = styled(FileArrowUp).attrs(({ theme }) => ({
    color: '#858585',
}))`
    width: 32px;
`;

//list balances
export const HeaderScreen = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
`;

export const IconFilter = styled(Faders).attrs(({ theme }) => ({
    color: '#000000',
}))`
    width: 32px;
`;

export const ModalFilter = styled.View`
    justify-content: center;
    background-color: #ffffff;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 220px;
    margin-left: 20px;
    margin-right: 20px;
    border-width: 2px;
    border-color: #000000;
    border-radius: 10px;
`;

export const ModalFilterGroup = styled.View`
    flex-direction: row;
    gap: 8px;
    margin-top: 4px;
    margin-bottom: 4px;
`;

