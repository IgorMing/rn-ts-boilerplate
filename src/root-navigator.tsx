import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthTabNavigator from './screens/Authenticated/bottom-tab-navigator';

import { useTypedSelector } from './reducers';
import { useDispatch } from 'react-redux';
import { checkAuth } from './modules/auth/duck';
import NotAuthenticatedStackNavigator from './screens/NotAuthenticated/stack-navigator';

export type RootStackParamList = {
  Home: undefined;
  Details: { id: string | null };
  Profile: undefined;
  Signin: undefined;
  Signup: undefined;
};

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
      {isSignedin ? (
        <AuthTabNavigator />
      ) : (
        <NotAuthenticatedStackNavigator isSigningOut={isSigningOut} />
      )}
    </NavigationContainer>
  );
};

export default Navigator;
