import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Beranda from '../screens/Beranda';
import Jelajahi from '../screens/Jelajahi';
import Saya from '../screens/Saya';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Beranda" component={Beranda} />
      <Tab.Screen name="Jelajahi" component={Jelajahi} />
      <Tab.Screen name="Saya" component={Saya} />
    </Tab.Navigator>
  );
}
