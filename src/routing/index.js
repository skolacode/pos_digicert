// In App.js in a new project

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LandingPage} from '../pages/LandingPage';
import {NextPage} from '../pages/NextPage';
import {ThemeProvider} from 'styled-components';
import {COLORS, COLORS_DARK} from '../constans/COLORS';
import {Button} from 'react-native';

const StackPublic = createNativeStackNavigator();

export const Routing = () => {
  const [currentTheme, setCurrentTheme] = useState(COLORS);

  const toggleMode = themeVal => {
    setCurrentTheme(themeVal);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <NavigationContainer>
        <StackPublic.Navigator>
          <StackPublic.Screen name="Home" component={LandingPage} />
          <StackPublic.Screen name="Next Page" component={NextPage} />
        </StackPublic.Navigator>
      </NavigationContainer>

      <Button title="Dark Theme" onPress={() => toggleMode(COLORS_DARK)} />

      <Button title="Light Theme" onPress={() => toggleMode(COLORS)} />
    </ThemeProvider>
  );
};
