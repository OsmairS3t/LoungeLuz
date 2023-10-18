import { Tabs } from "expo-router";
import { Image } from "expo-image";
import { Barcode, ListChecks, House } from 'phosphor-react-native'

export default function TabRoutesLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#fff',
                tabBarStyle: {
                    height: 130,
                    backgroundColor: '#ffffff',
                    borderWidth: 0,
                    borderColor: '#fff',
                },
                tabBarBackground: () => (
                    <Image
                        source={require('@assets/footer.png')}
                        style={{
                            marginTop: 30,
                            width: '100%',
                            height: 100
                        }}
                    />
                ),
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "bold",
                    marginBottom: 10,
                }
            }}
        >
            <Tabs.Screen
                name="balance"
                options={{
                    title: "Lançamentos",
                    tabBarItemStyle: { paddingTop: 60 },
                    tabBarIconStyle: { width: 100, height: 100, },
                    tabBarIcon: ({ size, color }) => <Barcode size={36} color={color} />
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
                    },
                    tabBarIcon: ({ size, color }) =>
                        <House size={size} color={color} />
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
                        <ListChecks size={36} color={color} />
                }}
            />
        </Tabs>

    )
}