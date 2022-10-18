import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import moment from "moment";

export const Header = () => {
	return (
		<>
			<SafeAreaView style={{ margin: 10 }}>
				<View>
					<Date />
					<DateProfile />
				</View>
			</SafeAreaView>
		</>
	);
}

const Date = () => (
	<View>
		<Text style={{ color: "#ccc", fontSize: 16 }}>
			{moment().format("dddd, D MMMM YYYY").toLocaleUpperCase()}
		</Text>
	</View>
);

const DateProfile = () => (
	<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
		<View>
			<Text
				style={{
					color: "#3388ff",
					fontSize: 40,
					fontWeight: "bold",
					marginRight: 10,
				}}
			>
				Today
			</Text>
		</View>
		<View
			style={{
				alignItems: "flex-end",
			}}
		>
			<Image
				style={{
					height: 50,
					width: 50,
					borderRadius: 50,
					alignItems: "flex-end",
				}}
				source={require("../assets/images/Busa.jpg")}
			/>
		</View>
	</View>
);

const styles = StyleSheet.create({
	image: {
		width: 40,
		height: 40,
		borderRadius: 50,
		margin: 10,
		borderWidth: 3,
		borderColor: "#1528ea",
	},
});
