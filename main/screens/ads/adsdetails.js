import * as React from "react";
import {
	Image,
	View,
	StatusBar,
	Dimensions,
	StyleSheet,
	Animated,
	Text,
} from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * 0.75;
const DOT_SIZE = 8;
const DOT_SPACING = 8;
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING;
const SHEET_HEIGHT = 0.5 * height;

const images = [
	{
		image: require("./images/1.jpg"),
	},
	{
		image: require("./images/2.jpg"),
	},
	{
		image: require("./images/3.jpg"),
	},
	{
		image: require("./images/4.jpg"),
	},
	{
		image: require("./images/5.jpg"),
	},
];

const product = {
	title: "SOFT MINI CROSSBODY BAG WITH KISS LOCK",
	description: [
		"Mini crossbody bag available in various colours. Featuring two compartments. Handles and detachable crossbody shoulder strap. Lined interior. Clasp with two metal pieces.",
		'Height x Length x Width: 14 x 21.5 x 4.5 cm. / 5.5 x 8.4 x 1.7"',
	],
	price: "29.99£",
	seller: "Chat With Dara",
};

export const AdsDetails = () => {
	const navigation = useNavigation();
	const scrollY = React.useRef(new Animated.Value(0)).current;
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<View style={{ flex: 1 }}>
				<StatusBar hidden />
				<View style={{ height: ITEM_HEIGHT, overflow: "hidden" }}>
					{/* <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} /> */}
					<Animated.FlatList
						data={images}
						keyExtractor={(_, index) => index.toString()}
						snapToInterval={ITEM_HEIGHT}
						decelerationRate="fast"
						bounces={false}
						showsVerticalScrollIndicator={false}
						onScroll={Animated.event(
							[{ nativeEvent: { contentOffset: { y: scrollY } } }],
							{
								useNativeDriver: true,
							}
						)}
						renderItem={({ item }) => {
							return (
								<View>
									<Image source={item.image} style={styles.image} />
								</View>
							);
						}}
					/>
					<View style={styles.pagination}>
						{images.map((_, index) => {
							return <View key={index} style={[styles.dot]} />;
						})}
						<Animated.View
							style={[
								styles.dotInicator,
								{
									transform: [
										{
											translateY: Animated.divide(
												scrollY,
												ITEM_HEIGHT
											).interpolate({
												inputRange: [0, 1],
												outputRange: [0, DOT_INDICATOR_SIZE],
											}),
										},
									],
								},
							]}
						/>
					</View>
				</View>
				<BottomSheet
					initialSnapindex={0}
					snapPoints={[height - ITEM_HEIGHT, SHEET_HEIGHT]}
				>
					<BottomSheetScrollView contentContainerStyle={{ padding: 20 }}>
						<Text
							style={{
								fontWeight: "800",
								fontSize: 16,
								textTransform: "uppercase",
							}}
						>
							{product.title}
						</Text>
						<Text style={{ fontSize: 16 }}>{product.price}</Text>
						<View style={{ marginVertical: 20 }}>
							{product.description.map((text, index) => {
								return (
									<View key={index}>
										<Text
											style={{ marginBottom: 10, lineHeight: 22 }}
											key={index}
										>
											{text}
										</Text>
									</View>
								);
							})}
						</View>
						<View
							style={{
								backgroundColor: "green",
								height: 40,
								alignSelf: "center",
								borderRadius: 20,
								width: 120,
								top: 30,
							}}
						>
							<Text
								style={{
									alignSelf: "center",
									top: "25%",
									fontWeight: "800",
									color: "#EEE",
								}}
							>
								{product.seller}
							</Text>
						</View>
					</BottomSheetScrollView>
				</BottomSheet>
			</View>
		</GestureHandlerRootView>
	);
};

const styles = StyleSheet.create({
	image: {
		width: ITEM_WIDTH,
		height: ITEM_HEIGHT,
		resizeMode: "cover",
	},
	pagination: {
		position: "absolute",
		top: ITEM_HEIGHT / 2,
		left: 20,
	},
	dot: {
		width: DOT_SIZE,
		height: DOT_SIZE,
		borderRadius: DOT_SIZE,
		backgroundColor: "#333",
		marginBottom: DOT_SPACING,
	},
	dotInicator: {
		width: DOT_INDICATOR_SIZE,
		height: DOT_INDICATOR_SIZE,
		borderRadius: DOT_INDICATOR_SIZE,
		borderWidth: 1,
		borderColor: "#333",
		position: "absolute",
		top: -DOT_SIZE / 2,
		left: -DOT_SIZE / 2,
	},
});
