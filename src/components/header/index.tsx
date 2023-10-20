import { Image } from 'expo-image';

import {
    Container,
    HeaderContainer,
    Profile,
    GroupTextProfile,
    ImgProfile,
    TextProfile,
    HeaderApp,
    TitleHeaderApp,
    IconSignOut
} from './styles';

export default function Header() {

    return (
        <Container>
            <HeaderContainer>
                <Profile>
                    <ImgProfile source={require('@assets/foto.png')} />
                    <GroupTextProfile>
                        <TextProfile>Bem vindo!</TextProfile>
                        <TextProfile>Olá, Osmair</TextProfile>
                    </GroupTextProfile>
                </Profile>
                <IconSignOut size={32} />
            </HeaderContainer>

            <HeaderApp>
                <Image source={require('@assets/luzjovem.png')} style={{ width: 50, height: 50 }} />
                <TitleHeaderApp>LOUNGE LUZ</TitleHeaderApp>
                <Image source={require('@assets/farol.png')} style={{ width: 50, height: 50 }} />
            </HeaderApp>
        </Container>
    )
}
