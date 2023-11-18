import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useLogin } from '../context/LoginProvider';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from "expo-font";

import SplashSC from '../screen/splash/SplashSC';
import Login from '../screen/login/LoginSC';
import Register from '../screen/register/RegisterSC';
import KelolaKategori from '../screen/kelolaKategori/KelolaKategoriSC';
import KelolaProduk from '../screen/kelolaProduk/KelolaProduk';
import KatalogProduk from '../screen/katalog/KatalogSC';
import Produk from '../screen/produk/ProdukSC';
import Pesanan from '../screen/pesanan/PesananSC';
import Profil from '../screen/profil/ProfilSC';
import { tabProduk, tabPesanan, tabProfil } from '../constants/icons';
import { orangePrimary } from '../constants/color';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: orangePrimary,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 65,
          display: 'flex',
          paddingBottom: 5,
          paddingTop: 3,
        },
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tab.Screen
        name="Produk"
        component={Produk}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={tabProduk} style={{ width: 26, height: 26, tintColor: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Pesanan"
        component={Pesanan}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={tabPesanan} style={{ width: 26, height: 26, tintColor: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={tabProfil} style={{ width: 24, height: 25, tintColor: color }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    fontFamily: 'DMBold',
    fontSize: 14,
  },
});

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashSC} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="KelolaKategori" component={KelolaKategori} options={{
        title: "Tambah Kategori",
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }} />
      <Stack.Screen name="KelolaProduk" component={KelolaProduk} options={{
        title: "Tambah Produk",
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }} />
      <Stack.Screen name="KatalogProduk" component={KatalogProduk} options={{
        title: "Katalog Produk",
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }} />
    </Stack.Navigator>
  );
};

const RouteApp = () => {
  const { isLoggedIn } = useLogin();
  return isLoggedIn ? <BottomTab /> : <StackNavigator />;
};

export default RouteApp;
