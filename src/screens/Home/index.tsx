import React from 'react';
import { Text, SafeAreaView, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { signout } from '../../modules/auth/duck';
import { HomeProps } from './types';

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Details', { id: 'abc-123' })}
        title="Go to Details"
      />
      <Button
        onPress={() => {
          dispatch(signout());
        }}
        title="Sign off"
      />
    </SafeAreaView>
  );
};

export default Home;
