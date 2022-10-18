import React from "react";
// import { SafeAreaView } from 'react-native';
import { Layout, Text } from "@ui-kitten/components";
import { Button, Icon } from "@ui-kitten/components";

const Home = () => (
	<Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
		<Text category="h1">HOME</Text>
		<Button accessoryLeft={FacebookIcon}>Login with Facebook</Button>
	</Layout>
);

export const PromoteForm = () => {
	return (
		<>
        <Home />
		</>
	);
};
