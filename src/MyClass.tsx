import {View, Text, Appearance} from "react-native";
import {IBUDynamicStyleSheet} from "./IBUDynamicStyleSheet";
import {IBUColor} from "./IBUColor";
import {IBUThemeContext} from "./IBUThemeProvider";
import * as React from "react";

export default class MyClass extends React.Component {
    //需要声明contextType, 否则该组件可能不会随theme变化而重新绘制
    static contextType = IBUThemeContext;

    constructor(props, context) {
        super(props, context)
        // context can be accessed now, context undefined while use ES6 constructor · Issue #6598 · facebook/react
        const theme = this.context;
        // ....
    }
    componentDidMount() {

        Appearance.addChangeListener(({colorScheme}) => {
            console.log(colorScheme)
            alert('klsfdj');
        });
    }

    // ...
    render() {
        const theme = this.context; // 'light'|'dark'
        /* render something based on the value of IBUThemeContext */
        const styles = dynamicStyles(theme);
        return(
            <View style={{ backgroundColor: IBUColor.orange(theme), flex: 1 }}>
                <View style={styles.icon}/>
                <Text>{theme}</Text>
                {this.props.children}
                {/* render something else */}
            </View>
        )
    }
}
const dynamicStyles = IBUDynamicStyleSheet(() => ({
    icon: {
        backgroundColor: IBUColor.quaternaryGray(),
        height: 20,
    },
}));
