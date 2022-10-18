import {
	View,
	Image,
	StyleSheet,
	TouchableOpacity,
	FlatList,
	Dimensions,
} from "react-native";
import React from "react";
import { Layout, Text } from "@ui-kitten/components";
const { width } = Dimensions.get("screen");

export const Post = () => {
	return (
		<Layout>
			<FlatList
				keyExtractor={(item) => item.id}
				data={Data}
				renderItem={({ item }) => {
					return (
						<>
							<View style={{ height:  width * 1.2, paddingBottom: 60, }}>
								<View
									style={{
										width: width * 0.85,
										height: width ,
										backgroundColor: "#3388FF",
										alignSelf: "center",
										borderRadius: 20,
										// bottom: 60,
									}}
								>
									<Text style={styles.categories}>{item.category}</Text>
									<Text style={styles.title}>{item.title}</Text>
									<TouchableOpacity activeOpacity={1}>
										<View>
											<Image
												source={item.image}
												style={{
													height: width * 0.85,
													width: width * 0.85,
													position: "absolute",
													alignSelf: "center",
													top: 10,
													borderBottomLeftRadius: 20,
													borderBottomRightRadius: 20,
												}}
											/>
										</View>
									</TouchableOpacity>
								</View>
							</View>
						</>
					);
				}}
			/>
		</Layout>
	);
};

const Data = [
	{
		id: 1,
		category: "Busa News",
		title: "Apps to feed your mind",
		image: require("../assets/images/profile.jpg"),
	},

	{
		id: 2,
		category: "Busa News",
		title: "Apps to change your mind",
		image: require("../assets/images/background.jpg"),
	},
	{
		id: 3,
		category: "BUCC News",
		title: "Apps to change your mind",
		image: require("../assets/images/ticket-2974645_1920.jpg"),
	},
];
const styles = StyleSheet.create({
	categories: {
		fontSize: 16,
		color: "#eee",
		left: 20,
		fontWeight: "bold",
		top: 5,
		margin: 5,
	},
	title: {
		fontWeight: "bold",
		fontSize: 28,
		color: "#fff",
		maxWidth: "60%",
		left: 18,
		margin: 5,
	},
});
