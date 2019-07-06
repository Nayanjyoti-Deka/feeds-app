import { createStackNavigator } from 'react-navigation';
import FirstCard from './components/FirstCard';
import SecondCard from './components/SecondCard';
import ThirdCard from './components/ThirdCard';

const AppNavigator = createStackNavigator({
  FirstCard: { screen: FirstCard },
  // SecondCard: {screen: SecondCard},
  // ThirdCard: {screen: ThirdCard}
});

export default AppNavigator;
