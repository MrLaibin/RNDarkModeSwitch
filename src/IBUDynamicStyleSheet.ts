import {ImageStyle,StyleSheet, TextStyle, ViewStyle} from "react-native";
import {IBUThemeProvider} from "./IBUThemeProvider";

type IBUNamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
export function IBUDynamicStyleSheet<T extends IBUNamedStyles<T> | IBUNamedStyles<any>>(
    callback: () => T | IBUNamedStyles<T>
): (theme?: 'light' | 'dark') => T {
    const cache: { light?: T; dark?: T } = {
        light: undefined,
        dark: undefined,
    };
    return (theme?: 'light' | 'dark'): T => {
        const currentTheme = theme || IBUThemeProvider.theme;
        let style = cache[currentTheme];
        if (!style) {
            style = StyleSheet.create(callback());
            cache[currentTheme] = style;
        }
        return style;
    };
}
