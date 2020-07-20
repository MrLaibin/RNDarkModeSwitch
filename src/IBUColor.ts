import {IBUThemeProvider, ThemeMode} from "./IBUThemeProvider";

export class IBUColor {
    static quaternaryGray(theme?: ThemeMode) {
        if (!theme) {
            theme=IBUThemeProvider.theme
        }
        if (theme === ThemeMode.dark) {
            return 'gray';
        }
        return '#ef0';
    }

    static backgroundColor(theme?: ThemeMode) {
        console.log('theme==='+theme)
        if (!theme) {
            theme=IBUThemeProvider.theme
        }
        console.log('theme=2=='+theme)
        if (theme === ThemeMode.dark) {
            return '#333'
        }
        return '#eee'
    }
    static orange(theme?: ThemeMode) {
        if (theme === ThemeMode.dark) {
            return '#FFA500';
        }
        return '#aaA500';
    }
    static textColor1(theme?: ThemeMode) {
        console.log('theme==='+theme)
        if (!theme) {
            theme=IBUThemeProvider.theme
        }
        console.log('theme=2=='+theme)
        if (theme === ThemeMode.dark) {
            return '#EEE'
        }
        return '#333'
    }
}
