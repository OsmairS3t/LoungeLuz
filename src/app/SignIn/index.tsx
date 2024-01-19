import { SafeAreaView } from "react-native";
import { router } from 'expo-router'

import { ContainerLogin, BackgroundImage, ImageLogin, TitleLogin, GroupTitleLogin, ButtonLogin, IconButtonLogin, TextButtonLogin } from '../../styles'

export default function SignIn() {
  return (
<SafeAreaView style={{ flex: 1 }}>
      <BackgroundImage source={require('@assets/background.png')}>
        <ContainerLogin>
          
          <GroupTitleLogin>
            <ImageLogin source={require('../../assets/luzjovem.png')} />
            <TitleLogin>Lounge Luz</TitleLogin>
            <ImageLogin source={require('../../assets/farol.png')} />
          </GroupTitleLogin>

          <ButtonLogin onPress={() => router.push('/(tabs)')}>
            <IconButtonLogin name='google' size={32} />
            <TextButtonLogin>Login com Google</TextButtonLogin>
          </ButtonLogin>
          
        </ContainerLogin>
      </BackgroundImage>
    </SafeAreaView>
  )
}