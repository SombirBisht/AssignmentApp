import React, { useEffect } from 'react';
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootState, useAppDispatch, useAppSelector } from './src/redux/store';
import { loadCredentials } from './src/redux/reducer';
import "../AssignmentApp/src/utils/i18n"
import { AuthStack } from './src/navigation/auth-stack';
import { DrawerNavigator } from './src/navigation/drawer-navigator';

const Stack = createNativeStackNavigator();

export default function App() {
  const dispatch = useAppDispatch();
  const { email, isLoaded } = useAppSelector((state: RootState) => state.auth)

  useEffect(() => {
    dispatch(loadCredentials());
  }, [dispatch]);

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName={email ? 'Drawer' : 'Auth'}>
        <Stack.Screen options={{ headerShown: false }} name="Auth" component={AuthStack} />
        <Stack.Screen options={{ headerShown: false }} name="Drawer" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

