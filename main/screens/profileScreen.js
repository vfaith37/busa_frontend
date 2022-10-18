import React from "react";
// import { SafeAreaView } from 'react-native';
import { Layout, Text } from "@ui-kitten/components";
import { ProfileAvatar } from "../components/avatar";
import { StyleSheet } from "react-native";
// import { Buttons } from "../components/buttons";
// import { ProfileAccessory } from "../components/profileDisplay";
import { ProfileAccessory } from "../components/profileAccesory";
export const ProfileScreen = () => {
	return (
		<>
			<Layout
				style={styles.layout}
				level="4"
			>
				<ProfileAvatar />
				<ProfileAccessory />
			</Layout>
		</>
	);
};
const styles = StyleSheet.create({
	layout: {
		flex: 1,
		// justifyContent: "center",
		// alignItems: "center",
	},
});
