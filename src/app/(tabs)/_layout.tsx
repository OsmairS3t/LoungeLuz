import { Tabs, Link } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons'

export default function TabRoutesLayout() {
    return (
        <Tabs 
            screenOptions={{headerShown:false}}
            sceneContainerStyle={{
                                
            }}
        >
            <Tabs.Screen
                name="products"
                options={{
                    title:"Produtos",
                    tabBarIcon: ({size, color}) => 
                    <MaterialIcons name='portrait' size={size} color={color} />
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title:"Home",
                    tabBarIcon: ({size, color}) => 
                    <MaterialIcons name='home' size={size} color={color} />
                }}
            />
            <Tabs.Screen
                name="listBalance"
                options={{
                    title:"Lista",
                    tabBarIcon: ({size, color}) => 
                    <MaterialIcons name='menu' size={size} color={color} />
                }}
            />
        </Tabs>
    )
}