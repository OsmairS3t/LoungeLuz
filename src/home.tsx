import { Alert, SafeAreaView } from 'react-native'
import {BackgroundImage, ContainerLogin, GroupTitleLogin, TitleLogin, ImageLogin, ButtonLogin, IconButtonLogin, TextButtonLogin } from './styles'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { WEB_CLIENT_ID } from '@env'
import { useState } from 'react'

GoogleSignin.configure({
  scopes: ['email', 'profile'],
  webClientId: WEB_CLIENT_ID
})

export default function Login() {
  const [isAuthenticate, setIsAuthenticate] = useState(false)

  async function handleGoogleSignIn() {
    try {
      setIsAuthenticate(true)
      const {idToken} = await GoogleSignin.signIn()
      if(idToken) {

      } else {
        Alert.alert("Entrar", "Não foi possível conectar-se a sua conta Google")
        setIsAuthenticate(false)
      }
    } catch (error) {
      console.log(error)
      Alert.alert("Entrar", "Não foi possível conectar-se a sua conta Google")
      setIsAuthenticate(false)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackgroundImage source={require('@assets/background.png')}>
        <ContainerLogin>
          
          <GroupTitleLogin>
            <ImageLogin source={require('../../assets/luzjovem.png')} />
            <TitleLogin>Lounge Luz</TitleLogin>
            <ImageLogin source={require('../../assets/luzjovem.png')} />
          </GroupTitleLogin>

          <ButtonLogin onPress={handleGoogleSignIn}>
            <IconButtonLogin name='globe' size={32} />
            <TextButtonLogin>Login com Google</TextButtonLogin>
          </ButtonLogin>
        </ContainerLogin>
      </BackgroundImage>
    </SafeAreaView>
  )
}