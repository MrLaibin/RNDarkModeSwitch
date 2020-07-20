import {View, Text, Appearance} from "react-native";
import {IBUDynamicStyleSheet} from "./IBUDynamicStyleSheet";
import {IBUColor} from "./IBUColor";
import {IBUThemeContext, ThemeMode} from "./IBUThemeProvider";
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
        // Appearance.addChangeListener(({colorScheme}) => {
        //     console.log(colorScheme)
        //     alert('klsfdj');
        // });
    }

    // ...
    render() {
        const theme = this.context; // 'light'|'dark'
        const styles = dynamicStyles(theme);
        return(
            <View style={styles.container}>
                <View style={styles.icon}/>
                <Text style={styles.text}>{theme}</Text>
                {this.props.children}
                {/*<Text style={{fontSize:20,padding:20}} onPress={()=>{*/}
                {/*    if (this.state.theme === ThemeMode.light) {*/}
                {/*        this.setState({*/}
                {/*            theme:ThemeMode.dark*/}
                {/*        });*/}
                {/*    }else{*/}
                {/*        this.setState({*/}
                {/*            theme:ThemeMode.light*/}
                {/*        });*/}
                {/*    }*/}

                {/*}}>switch {this.state.theme}</Text>*/}
            </View>
        )
    }
}
const dynamicStyles = IBUDynamicStyleSheet(() => ({
    icon: {
        backgroundColor: IBUColor.quaternaryGray(),
        height: 20,
    },
    container: {
        paddingTop:50,
        backgroundColor: IBUColor.backgroundColor(),
        flex:1
    },
    text:{
        color:IBUColor.textColor1(),
        fontSize:30
    }
}));
