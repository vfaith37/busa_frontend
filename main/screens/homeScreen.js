import React from "react";
import { ScrollView, View} from 'react-native'
import { Layout } from "@ui-kitten/components";
import {Post} from "../components/post";
import {Header} from "../components/header";
export const HomeScreen = () => {
	return (
		<Layout>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View
						style={{
							padding: 5,
						}}
					>
						<Header />
						<Post />
					</View>
				</ScrollView>
		</Layout>
	);
};
