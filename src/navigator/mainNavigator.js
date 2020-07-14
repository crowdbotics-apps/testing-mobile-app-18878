import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings78146Navigator from '../features/Settings78146/navigator';
import UserProfile78144Navigator from '../features/UserProfile78144/navigator';
import UserProfile78113Navigator from '../features/UserProfile78113/navigator';
import Tutorial78112Navigator from '../features/Tutorial78112/navigator';
import NotificationList78084Navigator from '../features/NotificationList78084/navigator';
import Settings78083Navigator from '../features/Settings78083/navigator';
import Settings78075Navigator from '../features/Settings78075/navigator';
import UserProfile78073Navigator from '../features/UserProfile78073/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings78146: { screen: Settings78146Navigator },
UserProfile78144: { screen: UserProfile78144Navigator },
UserProfile78113: { screen: UserProfile78113Navigator },
Tutorial78112: { screen: Tutorial78112Navigator },
NotificationList78084: { screen: NotificationList78084Navigator },
Settings78083: { screen: Settings78083Navigator },
Settings78075: { screen: Settings78075Navigator },
UserProfile78073: { screen: UserProfile78073Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
