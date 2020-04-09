import React from 'react';
import { Text, SafeAreaView, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { signin } from '../../modules/auth/duck';

const Signin: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Text>Sign in Screen</Text>
      <Button
        onPress={() => {
          dispatch(signin());
        }}
        title="Sign in"
      />
    </SafeAreaView>
  );
};

export default Signin;
