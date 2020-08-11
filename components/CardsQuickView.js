import React from 'react';
import { View, Text, StyleSheet } from "react-native";

function CardsQuickView(props){
    const { card } = props
    let cardInfo = Object.values(card)[0];

    return (
        <View>
            <Text key={cardInfo.id} style={styles.card}>{cardInfo.question}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        borderRadius: 5,
        margin: 2,
        padding: 1,
        textAlign: "center"
    }
})

export default CardsQuickView;