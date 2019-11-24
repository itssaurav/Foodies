import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './home'
import DetailsScreen from './detail'

const AppNavigator = createStackNavigator({
        Home: Home,
        Details: DetailsScreen,
      },
      {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          },
      }
  );
  
export default createAppContainer(AppNavigator);