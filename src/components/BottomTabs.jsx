import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Beranda from '../screens/Beranda';
import Jelajahi from '../screens/Jelajahi';
import Saya from '../screens/Saya';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Beranda"
      screenOptions={({route}) => ({
        tabBarStyle: {backgroundColor: '#191717'},
        tabBarActiveTintColor: 'white',
        inactiveTintColor: '#dfe7e7',
        headerShown: false,
        tabBarIcon: ({color}) => {
          let iconName;

          if (route.name === 'Beranda') {
            iconName = 'home';
          } else if (route.name === 'Saya') {
            iconName = 'user';
          } else if (route.name === 'Jelajahi') {
            iconName = 'headphones';
          }

          return <Feather name={iconName} size={25} color={color} />;
        },
      })}>
      <Tab.Screen name="Beranda" component={Beranda} />
      <Tab.Screen name="Jelajahi" component={Jelajahi} />
      <Tab.Screen name="Saya" component={Saya} />
    </Tab.Navigator>
  );
}
