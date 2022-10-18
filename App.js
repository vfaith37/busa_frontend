import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ThemeContext } from "./theme-context";
import { default as theme } from './theme.json';
import { AppNavigator } from "./navigator";
export default () => {
	const [themes, setTheme] = React.useState("light");

	const toggleTheme = () => {
		const nextTheme = theme === "light" ? "dark" : "light";
		setTheme(nextTheme);
	};
	return (
		<>
			<SafeAreaProvider style={{ backgroundColor: "white" }}>
				<SafeAreaView style={{ backgroundColor: "white" }}></SafeAreaView>
				<ThemeContext.Provider value={{ theme, toggleTheme }}>
				<ApplicationProvider {...eva} theme={{...eva[themes], ...theme}}>
					<IconRegistry icons={EvaIconsPack} />
            <AppNavigator />
				</ApplicationProvider>
				</ThemeContext.Provider>
			</SafeAreaProvider>
		</>
	);
};
