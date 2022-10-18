import React from "react";
import {
	Image,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { Layout } from "@ui-kitten/components";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FlatList, TextInput } from "react-native-gesture-handler";
import COLORS from "../../components/consts/colors";
import { Card } from "./Card";
import { ListCategories } from "./ListCategories";
import stock from "./stock";
export const AdsScreen = () => {
	return (
		<>
			<Layout>
				<View style={style.header}>
					<View>
						<View style={{ flexDirection: "row" }}>
							<Text style={{ fontSize: 28 }}>Hello,</Text>
							<Text
								style={{ fontSize: 28, fontWeight: "bold", marginLeft: 10 }}
							>
								Dara
							</Text>
						</View>
						<Text style={{ marginTop: 5, fontSize: 22, color: COLORS.grey }}>
							What do you want today
						</Text>
					</View>
					<Image
						source={require("./images/person.png")}
						style={{ height: 50, width: 50, borderRadius: 25 }}
					/>
				</View>
				<View
					style={{
						marginTop: 40,
						flexDirection: "row",
						paddingHorizontal: 20,
					}}
				>
					<View style={style.inputContainer}>
						<Icon name="search" size={28} />
						<TextInput
							style={{ flex: 1, fontSize: 18 }}
							placeholder="Search for Items"
						/>
					</View>
					<View style={style.sortBtn}>
						<Icon name="tune" size={28} color={COLORS.white} />
					</View>
				</View>
				<View>
					<ListCategories />
				</View>
				<FlatList
					showsVerticalScrollIndicator={false}
					numColumns={2}
					data={stock}
					renderItem={({ item }) => <Card food={item} />}
				/>
			</Layout>
		</>
	);
};

const style = StyleSheet.create({
	header: {
		marginTop: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
	},
	inputContainer: {
		flex: 1,
		height: 50,
		borderRadius: 10,
		flexDirection: "row",
		backgroundColor: COLORS.light,
		alignItems: "center",
		paddingHorizontal: 20,
	},
	sortBtn: {
		width: 50,
		height: 50,
		marginLeft: 10,
		backgroundColor: COLORS.primary,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
});
