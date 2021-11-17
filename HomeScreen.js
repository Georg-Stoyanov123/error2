import * as React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'

export default class HomeScreen extends React.Component {
    render() {
        return(
            <View>
                <TouchableOpacity style={styles.touchableOpacityStyle} onPress={()=>this.props.navigation.navigate("Bone cancer")}><Text style={styles.textStyle}>Home Screen</Text></TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textStyle:{
        color: "purple",
        marginTop: RFValue(50),
        marginLeft: RFValue(80)
    },
    touchableOpacityStyle:{
        width: 100,
        backgroundColor: 'red'
    }
})