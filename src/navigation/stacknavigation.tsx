import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../pages/landing';
import Home from '../pages/home';
import Questions from '../pages/questions';
import Response from '../pages/response';

const Stack = createStackNavigator();

function Router() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "Landing"
        component={Landing}
        options={{ headerShown: false }} />

        <Stack.Screen name="Home"
        component={ Home }
        options={{ headerShown: false }}/>

        <Stack.Screen name="Questions"
        component={ Questions }
        options={{ headerShown: false }} />

        <Stack.Screen name="Response"
        component={ Response }
        options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default Router;