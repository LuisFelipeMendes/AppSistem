import React from "react";
import {WebView} from 'react-native-webview'
import { StyleSheet, Text, View } from "react-native";


const styles = {
    container:{
        flex:1
    }
}

const ContentView = () => (
    <View style={styles.container}>
        <WebView source={{uri: 'https://operadora.app.br/#/login'} }/>
    </View>
)
 export default ContentView;