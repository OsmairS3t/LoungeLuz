import { Tabs, Link } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons'
import { Image } from "expo-image"; 

export default function TabRoutesLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#fff',
                tabBarStyle: {
                    height: 130,
                    backgroundColor: '#e9e9ff',
                },
                tabBarBackground: ()=>(
                    <Image 
                        source={require('../../../assets/footer.png')} 
                        style={{
                            marginTop: 30, 
                            width: 415, 
                            height: 100
                        }} 
                    />
                ),
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "bold",
                    marginBottom: 10,
                },
            }}
        >
            <Tabs.Screen
                name="products"
                options={{
                    title: "Produtos",
                    tabBarItemStyle: {
                        paddingTop: 60,
                    },
                    tabBarIconStyle: {
                        width: 100,
                        height: 100,
                    },
                    tabBarIcon: ({ size, color }) =>
                        <MaterialIcons name='portrait' size={size} color={color} />
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: "",
                    tabBarIconStyle: {
                        width: 70,
                        height: 70,
                        borderRadius: 50,
                        marginBottom: 30,
                        backgroundColor: '#005',
                        borderWidth: 1,
                        borderColor: '#eee'
                    },
                    tabBarIcon: ({ size, color }) =>
                        <MaterialIcons name='home' size={size} color={color} />
                }}
            />
            <Tabs.Screen
                name="listBalance"
                options={{
                    title: "Lista",
                    tabBarItemStyle: {
                        paddingTop: 60,
                    },
                   tabBarIcon: ({ size, color }) =>
                        <MaterialIcons name='menu' size={size} color={color} />
                }}
            />
        </Tabs>
    )
}