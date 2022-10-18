import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from "react-native";
import COLORS from "../../components/consts/colors";


const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;


export const Card = ({ food }) => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			underlayColor={COLORS.white}
			activeOpacity={0.9}
			onPress={() => navigation.navigate('AdsScreen')}
		>
			<View style={style.card}>
				<View style={{ alignItems: "center", top: -40 }}>
					<Image source={food.image} style={{ height: 120, width: 120 }} />
				</View>
				<View style={{ marginHorizontal: 20 }}>
					<Text style={{ fontSize: 18, fontWeight: "bold" }}>{food.name}</Text>
					<Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>
						{food.ingredients}
					</Text>
				</View>
				<View
					style={{
						marginTop: 10,
						marginHorizontal: 20,
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<Text style={{ fontSize: 18, fontWeight: "bold" }}>
						${food.price}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};
const style = StyleSheet.create({
	card: {
		height: 220,
		width: cardWidth,
		marginHorizontal: 10,
		marginBottom: 20,
		marginTop: 50,
		borderRadius: 15,
		elevation: 13,
		backgroundColor: COLORS.white,
	},
});
