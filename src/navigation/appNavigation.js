import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { createStackNavigator } from "@react-navigation/stack";
import UserProfilePage from "../components/UserProfilePage/UserProfileContainer";
import EditPage from "../components/EditPage/EditPage";
import SettingsPage from "../components/SettingsPage/SettingsPage";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Profile"
        component={UserProfilePage}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        labeled={false}
        name="Settings"
        component={SettingsPage}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UserProfile" component={TabNavigation} />
        <Stack.Screen name="EditUserProfile" component={EditPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
