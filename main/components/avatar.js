import React from "react";
import { Layout,Avatar, Text, Toggle } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

export const ProfileAvatar = () => (
	<>
	<Layout>
		<Avatar
			style={styles.avatar}
			source={require("../assets/images/profile.jpg")}
		/>
		<Text style={styles.text}> Victor Faith</Text>
		</Layout>
	</>
);
const styles = StyleSheet.create({
	avatar: {
		// alignSelf: 'left',
		height: 50,
		width: 50,
		flex: 0,
		alignItems: "flex-end",
		// justifyContent: 'flex-end',
		padding: 50,
		left: 10,
		top: 10,
	},
	text: {
		fontWeight: "bold",
        left: 120,
        top: -60,
        fontSize: 20,
	},
});
