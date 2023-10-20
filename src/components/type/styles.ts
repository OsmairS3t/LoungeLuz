import { CaretDoubleDown, CaretDoubleUp } from 'phosphor-react-native';
import styled from 'styled-components/native';

interface TypeProps {
    isActive: boolean;
}

export const Container = styled.View<TypeProps>`
    width: 160px;
    padding: 10px;
    gap: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.BG_INPUT };
    border-width: 1px;
    border-color: #858585;
    border-radius: 10px;
`;

export const ButtonTypeText = styled.Text`
    color: #858585;
    font-size: 16px;
`;

export const IconTypeIncome = styled(CaretDoubleUp).attrs(({ theme }) => ({
    color: '#858585',
}))`
    width: 18px;
`;

export const IconTypeOutcome = styled(CaretDoubleDown).attrs(({ theme }) => ({
    color: '#858585',
}))`
    width: 18px;
`;
