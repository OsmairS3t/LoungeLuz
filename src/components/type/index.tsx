import {
    Container,
    IconTypeIncome,
    IconTypeOutcome,
    ButtonTypeText
} from './styles';

interface ItemTypeProps {
    isActive: boolean;
}

export function ItemType({ isActive }: ItemTypeProps) {
    return (
        <Container isActive={isActive}>
            <IconTypeIncome />
            <ButtonTypeText>Entrada</ButtonTypeText>
        </Container>
    )
}