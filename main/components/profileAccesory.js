import React from "react";
import { StyleSheet } from "react-native";
import {
	Text,
	Drawer,
	DrawerGroup,
	DrawerItem,
	Layout,
	Toggle,
} from "@ui-kitten/components";
import {
	BellOutlineIcon,
	PersonOutlineIcon,
	SettingsIcon,
	ColorPaletteOutlineIcon,
	ReportIcon,
	FeedbackIcon,
	VolumeIcon,
} from "../assets/icon";
import { ThemeContext } from "../../theme-context";
export const ProfileAccessory = () => {
	const [selectedIndex, setSelectedIndex] = React.useState(null);
	const themeContext = React.useContext(ThemeContext);

	const [checked, setChecked] = React.useState(false);

	const onCheckedChange = (isChecked) => {
		setChecked(isChecked);
		themeContext.toggleTheme();
	};
	return (
		<React.Fragment>
			<Layout>
				<Text style={styles.header}>BUSA APP</Text>
				<Drawer
					selectedIndex={selectedIndex}
					onSelect={(index) => setSelectedIndex(index)}
				>
					<DrawerItem accessoryLeft={PersonOutlineIcon} title="Insight" />
					<DrawerItem accessoryLeft={BellOutlineIcon} title="Account Info." />
					<DrawerItem accessoryLeft={VolumeIcon} title="Promote Products" />
					<DrawerGroup accessoryLeft={SettingsIcon} title="Settings">
						<DrawerItem accessoryLeft={ColorPaletteOutlineIcon} title="Theme" />
						<DrawerItem accessoryLeft={ReportIcon} title="Report" />
						<DrawerItem accessoryLeft={FeedbackIcon} title="Feedback" />
					</DrawerGroup>
				</Drawer>
				<Toggle checked={checked} onChange={onCheckedChange}>
					{/* {checked = true ?  <Text>dark</Text> : <Text>Light</Text>} */}
				</Toggle>
			</Layout>
		</React.Fragment>
	);
};

const styles = StyleSheet.create({
	header: {
		alignSelf: "center",
		fontSize: 30,
		fontWeight: "bold",
	},
});
