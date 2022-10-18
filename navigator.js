import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	BottomNavigation,
	BottomNavigationTab,
	Divider,
} from "@ui-kitten/components";
import {ProfileScreen} from './main/screens/profileScreen'
import { HomeScreen } from "./main/screens/homeScreen";
import { AdsScreen } from "./main/screens/ads/adsScreen";
import { TicketScreen } from "./main/screens/ticket/ticketScreen";
import {
	HomeIcon,
	PersonIcon,
	ShoppingCartIcon,
	ShoppingBagIcon,
} from "./main/assets/icon";

import { PromoteForm } from "./main/components/PromoteForm";
import { AdsDetails } from "./main/screens/ads/adsdetails";
import { View } from "react-native";
import Login from "./onboarding/src/screens/login";
import Signup from "./onboarding/src/screens/signup";
import ResetPasswordCode from "./onboarding/src/screens/resetPasswordCode";
import ResetPassword from "./onboarding/src/screens/resetPassword";
import SplashScreen from "./onboarding/src/screens/SplashScreen";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
	<View>
		<Divider />
		<BottomNavigation
			appearance="noIndicator"
			selectedIndex={state.index}
			onSelect={(index) => navigation.navigate(state.routeNames[index])}
		>
			<BottomNavigationTab title={HomeIcon} />
			<BottomNavigationTab title={ShoppingCartIcon} />
			<BottomNavigationTab title={ShoppingBagIcon} />
			<BottomNavigationTab title={PersonIcon} />
		</BottomNavigation>
	</View>
);
const TabNavigator = () => (
	<Navigator
		screenOptions={{ headerShown: false }}
        initialRouteName="Home"
		tabBar={(props) => <BottomTabBar {...props} />}
	>
		<Screen name="Home" component={HomeScreen} />
		<Screen name="Ads" component={AdvertStack} />
		<Screen name="EventCard" component={TicketScreen} />
		<Screen name="Profile" component={ProfileScreen} />
	</Navigator>
);
const Stack = createStackNavigator();
const OnboardingStack = () => (
	<Stack.Navigator 
        screenOptions={{ headerShown: false }}
    >
		<Stack.Screen
			component={SplashScreen}
			name="SplashScreen"
		/>
		<Stack.Screen
			component={Signup}
			name="signup"
		/>
		<Stack.Screen
			component={ResetPassword}
			name="resetPassword"
		/>
		<Stack.Screen
			component={Login}
			name="login"
		/>
		<Stack.Screen
			component={ResetPasswordCode}
			name="resetPasswordCode"
		/>
        <Stack.Screen 
        component={TabNavigator}
        name="tabnavigator"/>
	</Stack.Navigator>
);
const AdvertStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName ="AdsScreen">
			<Stack.Screen name="AdsScreen" component={AdsScreen} />
			<Stack.Screen name="AdsDetails" component={AdsDetails} />
			<Stack.Screen name="Promote" component={PromoteForm} />
		</Stack.Navigator>
	);
};
export const AppNavigator = () => {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<StatusBar />
				<NavigationContainer>
                    <OnboardingStack />
                </NavigationContainer>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};
