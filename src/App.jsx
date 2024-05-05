import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './components/BottomTabs';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}
