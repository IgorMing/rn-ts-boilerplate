import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
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

type signedInType = boolean | null;

function getScreens(isSignedin: signedInType) {
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
  const [isSignedIn, setSignedIn] = useState<signedInType>(null);

  useEffect(() => {
    async function retrieveToken() {
      try {
        setTimeout(() => {
          setSignedIn(true);
        }, 4000);
      } catch (err) {
        setSignedIn(false);
      }
    }

    retrieveToken();
  }, [isSignedIn]);

  if (isSignedIn === null) {
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {getScreens(isSignedIn)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
