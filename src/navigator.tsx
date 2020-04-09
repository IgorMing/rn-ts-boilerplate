import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Details from './screens/Details';
import Home from './screens/Home';
import Profile from './screens/Profile';

import Signin from './screens/Signin';
import Signup from './screens/Signup';

export type RootStackParamList = {
  Home: undefined;
  Details: { id: string | null };
  Profile: undefined;
  Signin: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function getScreens(isSignedin: boolean = true) {
  return isSignedin ? (
    <>
      <Stack.Screen
        name="Details"
        component={Details}
        initialParams={{ id: null }}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </>
  ) : (
    <>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </>
  );
}

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">{getScreens()}</Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
