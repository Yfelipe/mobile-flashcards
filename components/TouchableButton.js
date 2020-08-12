import React from 'react';
import { TouchableOpacity, Text, View } from "react-native";

function TouchableButton(props){
    const { onPress, styleButton, text, styleText } = props;

    return (
        <View>
            <TouchableOpacity onPress={onPress} style={styleButton}>
                <Text style={styleText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default TouchableButton;