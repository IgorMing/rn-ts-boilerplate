import React from 'react';
import { Text, SafeAreaView, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'src/navigator';

interface HomeProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Details', { id: 'abc-123' })}
        title="Go to Details"
      />
      <Button onPress={() => {}} title="Sign off" />
    </SafeAreaView>
  );
};

export default Home;
