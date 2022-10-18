import * as React from "react";
import {
	StatusBar,
	Image,
	FlatList,
	Animated,
	View,
	SafeAreaView,
	Dimensions,
} from "react-native";
import {OverflowItems} from "./overflowitems";

import {
	FlingGestureHandler,
	Directions,
	State,
	GestureHandlerRootView,
} from "react-native-gesture-handler";
import { DATA } from "./data";

const { width } = Dimensions.get("screen");
const SPACING = 10;
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.7;
const VISIBLE_ITEMS = 3;

export function TicketScreen() {
	const [data, setData] = React.useState(DATA);
	const scrollXIndex = React.useRef(new Animated.Value(0)).current;
	const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
	const [index, setIndex] = React.useState(0);
	const setActiveIndex = React.useCallback((activeIndex) => {
		scrollXIndex.setValue(activeIndex);
		setIndex(activeIndex);
	});

	React.useEffect(() => {
		if (index === data.length - VISIBLE_ITEMS - 1) {
			const newData = [...data, ...data];
			setData(newData);
		}
	});

	React.useEffect(() => {
		Animated.spring(scrollXAnimated, {
			restSpeedThreshold: 0.2,
			// speed: 0.8,
			toValue: scrollXIndex,
			useNativeDriver: true,
		}).start();
	});

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<FlingGestureHandler
				key="left"
				direction={Directions.LEFT}
				onHandlerStateChange={(ev) => {
					if (ev.nativeEvent.state === State.END) {
						if (index === data.length - 1) {
							return;
						}
						setActiveIndex(index + 1);
					}
				}}
			>
				<FlingGestureHandler
					key="right"
					direction={Directions.RIGHT}
					onHandlerStateChange={(ev) => {
						if (ev.nativeEvent.state === State.END) {
							if (index === 0) {
								return;
							}
							setActiveIndex(index - 1);
						}
					}}
				>
					<SafeAreaView
						style={{
							flex: 1,
							justifyContent: "center",
							backgroundColor: "#fff",
						}}
					>
						<StatusBar hidden />
						<OverflowItems data={data} scrollXAnimated={scrollXAnimated} />
						<FlatList
							data={data}
							keyExtractor={(_, index) => String(index)}
							horizontal
							inverted
							contentContainerStyle={{
								flex: 1,
								justifyContent: "center",
								padding: SPACING * 2,
								marginTop: 50,
							}}
							scrollEnabled={false}
							removeClippedSubviews={false}
							CellRendererComponent={({
								item,
								index,
								children,
								style,
								...props
							}) => {
								const newStyle = [style, { zIndex: data.length - index }];
								return (
									<View style={newStyle} index={index} {...props}>
										{children}
									</View>
								);
							}}
							renderItem={({ item, index }) => {
								const inputRange = [index - 1, index, index + 1];
								const translateX = scrollXAnimated.interpolate({
									inputRange,
									outputRange: [50, 0, -100],
								});
								const scale = scrollXAnimated.interpolate({
									inputRange,
									outputRange: [0.8, 1, 1.3],
								});
								const opacity = scrollXAnimated.interpolate({
									inputRange,
									outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
								});
								return (
									<Animated.View
										style={{
											position: "absolute",
											left: -ITEM_WIDTH / 2,
											opacity,
											transform: [
												{
													translateX,
												},
												{ scale },
											],
										}}
									>
										<Image
											source={item.poster}
											style={{
												width: ITEM_WIDTH,
												height: ITEM_HEIGHT,
												borderRadius: 14,
											}}
										/>
									</Animated.View>
								);
							}}
						/>
					</SafeAreaView>
				</FlingGestureHandler>
			</FlingGestureHandler>
		</GestureHandlerRootView>
	);
}
