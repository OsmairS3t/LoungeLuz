import styled from 'styled-components/native';
import { SignOut } from 'phosphor-react-native';

export const Container = styled.View``;

export const HeaderContainer = styled.View`
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    `;

export const Profile = styled.View`
    flex-direction: row; 
    justify-content: flex-start; 
    gap: 10px;
`;

export const GroupTextProfile = styled.View``;

export const ImgProfile = styled.Image`
    width: 45px;
    border-radius: 50px;
`;

export const TextProfile = styled.Text`
    color: #ffffff;
`;

export const HeaderApp = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff6f;
    height: 60px;
    padding: 8px;
    border-radius: 5px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 15px;
    margin-bottom: 12px;
`;

export const TitleHeaderApp = styled.Text`
    font-weight: 600;
`;

export const IconSignOut = styled(SignOut).attrs(()=>({
    color: '#FFFFFF'
}))`
`;