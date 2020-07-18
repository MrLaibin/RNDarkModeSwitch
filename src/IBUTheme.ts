import {ThemeMode} from "./IBUThemeProvider";

export  class IBUTheme {
    // @ts-ignore
    static getTheme():ThemeMode {
        return ThemeMode.light;
    }
}
