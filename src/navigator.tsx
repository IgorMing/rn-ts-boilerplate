import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
// import { useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Details from './screens/Details';
import Home from './screens/Home';
import Profile from './screens/Profile';

import Signin from './screens/Signin';
import Signup from './screens/Signup';
import { useTypedSelector } from './reducers';
import { useDispatch } from 'react-redux';
import { checkAuth } from './modules/auth/duck';
// import { signin, signout } from './modules/auth/duck';

export type RootStackParamList = {
  Home: undefined;
  Details: { id: string | null };
  Profile: undefined;
  Signin: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

type signedInType = boolean | null;

function getScreens(isSignedin: signedInType, isSigningOut: boolean) {
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
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          animationTypeForReplace: isSigningOut ? 'pop' : 'push'
        }}
      />
      <Stack.Screen name="Signup" component={Signup} />
    </>
  );
}

const Navigator: React.FC = () => {
  const dispatch = useDispatch();
  const { isSignedin, isSigningOut } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isSignedin === null) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {getScreens(isSignedin, isSigningOut)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
