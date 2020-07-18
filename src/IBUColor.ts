import {ThemeMode} from "./IBUThemeProvider";

export class IBUColor {
    static quaternaryGray() {
        return 'gray'
    }

    static orange(theme:ThemeMode) {
        if (theme === ThemeMode.dark) {
            return '#FFA500';
        }
        return '#aaA500';
    }
}
