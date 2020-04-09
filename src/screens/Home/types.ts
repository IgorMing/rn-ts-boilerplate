import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from 'src/navigator';

export interface HomeProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}
