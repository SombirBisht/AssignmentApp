import React, { useEffect } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/components/Home/HomeScreen';
import { LoginScreen } from './src/components/Login/LoginScreen';
import { RootState, useAppDispatch, useAppSelector } from './src/redux/store';
import { loadCredentials, logout } from './src/redux/reducer';
import "../AssignmentApp/src/utils/i18n"
import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator();

export default function App() {
  const { t } = useTranslation();
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

  const handleLogout = (navigation: any) => {
    dispatch(logout());
    navigation.replace('Login');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={email ? 'Home' : 'Login'}>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerShown: true,
            headerRight: () => (
              <TouchableOpacity onPress={() => { handleLogout(navigation) }} style={{ marginRight: 15 }}>
                <Text style={{ fontWeight: 'bold' }}>{t('logout')}</Text>
              </TouchableOpacity>
            )
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};