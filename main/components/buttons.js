import React from "react";
import { StyleSheet } from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";

export const Buttons = () => {
	const [counter, setCounter] = React.useState(0);

	return (
		<Layout style={styles.container} level="1">
			<Button style={styles.button} onPress={() => setCounter(counter + 1)}>
				Settings
			</Button>
			<Button style={styles.button} onPress={() => setCounter(counter + 1)}>
				Insight
			</Button>
			<Text style={styles.text}>Pressed {counter} times</Text>
		</Layout>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	text: {
        fontSize: 14,
        fontWeight: 'bold',
		// marginHorizontal: 8,
	},
	button: {
		margin: 2,
	},
});
