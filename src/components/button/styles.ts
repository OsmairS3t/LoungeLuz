import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.BG_APP_FOOTER};
    height: 60px;
    width: 200px;
    border: 1px solid gray;
    
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 16px;
`;
