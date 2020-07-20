// IBUThemeContext
import * as React from "react";
import {Component} from "react";
import {IBUTheme} from "./IBUTheme";
import {Appearance, ColorSchemeName, Text} from 'react-native'
export declare interface IBUThemeProviderProps {

}
export declare interface IBUThemeProviderState {
    theme: IBUTheme;
}
export const IBUThemeContext = React.createContext<'light' | 'dark'>('light');
const isInChromeDebugMode = false;
//IBUThemeProvider
export enum ThemeMode {
    light='light',
    dark='dark'
}
export class IBUThemeProvider extends Component<IBUThemeProviderProps, IBUThemeProviderState> {
    // 引入文件时同步获取一次 theme
    public static theme:ThemeMode = isInChromeDebugMode ? ThemeMode.light : IBUTheme.getTheme();

    constructor(props: IBUThemeProviderProps) {
        super(props);
        // 实例创建时, 再次同步一次theme
        const theme:ThemeMode = isInChromeDebugMode ? ThemeMode.dark : IBUTheme.getTheme();
        IBUThemeProvider.theme = theme;
        this.state = {
            theme:theme,
        };
    }

    componentDidMount() {
       let colorSchemeName:ColorSchemeName= Appearance.getColorScheme()
        if (colorSchemeName === 'light') {
            IBUThemeProvider.theme = ThemeMode.light;
        }else{
            IBUThemeProvider.theme = ThemeMode.dark
        }
        this.setState({
            theme: IBUThemeProvider.theme
        })
         Appearance.addChangeListener(({colorScheme}) => {
             console.log(colorScheme)
             if (colorScheme === 'light') {
                 IBUThemeProvider.theme = ThemeMode.light;
                 this.setState({
                     theme:ThemeMode.light
                 });
             }else{
                 IBUThemeProvider.theme = ThemeMode.dark;
                 this.setState({
                     theme:ThemeMode.dark
                 });
             }
        });
    }
    componentWillUnmount() {

    }

    render(): JSX.Element {
        const { theme } = this.state;
        const { children } = this.props;
        return <IBUThemeContext.Provider value={theme}>
            {children}
            <Text style={{fontSize:20,padding:20}} onPress={()=>{
                if (this.state.theme === ThemeMode.light) {
                    this.setState({
                        theme:ThemeMode.dark
                    });
                    IBUThemeProvider.theme = ThemeMode.dark;
                }else{
                    this.setState({
                        theme:ThemeMode.light
                    });
                    IBUThemeProvider.theme = ThemeMode.light;
                }
            }}>switch {this.state.theme}</Text>
        </IBUThemeContext.Provider>;
    }
}
