// In App.js in a new project

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LandingPage} from '../pages/LandingPage';
import {NextPage} from '../pages/NextPage'

const StackPublic = createNativeStackNavigator();

export const Routing = () => {
  return (
    <NavigationContainer>
      <StackPublic.Navigator>
        <StackPublic.Screen name="Home" component={LandingPage} />
        <StackPublic.Screen name="Next Page" component={NextPage} />
      </StackPublic.Navigator>
    </NavigationContainer>
  );
};
