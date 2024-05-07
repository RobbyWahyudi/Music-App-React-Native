import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from './components/BottomTabs';
import Akun from './screens/Akun';
import Notifikasi from './screens/Notifikasi';
import Pengaturan from './screens/Pengaturan';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTabs">
        <Stack.Screen
          options={{headerShown: false}}
          name="BottomTabs"
          component={BottomTabs}
        />
        <Stack.Screen name="Akun" component={Akun} />
        <Stack.Screen name="Notifikasi" component={Notifikasi} />
        <Stack.Screen name="Pengaturan" component={Pengaturan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
