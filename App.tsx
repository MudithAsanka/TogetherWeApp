/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import PayCardItem from './components/PayCardItem';
import DonateCardItem from './components/DonateCardItem';
import SplashPage from './src/pages/SplashPage';
import LoadingPage from './src/pages/LoadingPage';
import {Provider} from 'react-redux';
import store from './src/store';

const fonts = {
  'CircularStd-Medium': require('./assets/fonts/CircularStd-Medium.ttf'),
  'CircularStd-Bold': require('./assets/fonts/CircularStd-Bold.ttf'),
  'CircularStd-Book': require('./assets/fonts/CircularStd-Book.ttf'),
};

const Stack = createStackNavigator();
const App = () => {
  return (
    // <Splash />
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashPage">
          <Stack.Screen
            name="SplashPage"
            component={SplashPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoadingPage"
            component={LoadingPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PayCardItem"
            component={LoadingPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
