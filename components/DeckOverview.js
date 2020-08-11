import React, { Component } from "react";
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";

function DeckOverview(props) {
    const { deck, navigateToDeck } = props;

    return (
        <View style={styles.deckContainer} key={deck.id}>
            <View style={styles.deck} key={"title" + deck.id}>
                <Text style={styles.deckTitle} key={"text" + deck.id}>
                    {deck.title}
                </Text>
                <Text style={styles.deckCount} key={"count" + deck.id}>
                    {deck.cards.length} Cards
                </Text>
                <TouchableOpacity onPress={() => navigateToDeck()} style={styles.deckButton} key={"button" + deck.id}>
                    <Text style={{color: "white"}}>View</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
        deck: {
            borderRadius: 10,
            borderWidth: 2,
            padding: 10,
            marginTop: 25,
            width: "40%",
        },
        deckContainer: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        deckButton: {
            alignItems: "center",
            backgroundColor: "black",
            borderRadius: 20,
            padding: 10,
            marginTop: 15
        },
        deckTitle: {
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
        },
        deckCount: {
            textAlign: "center",
            margin: 5
        },
    }
);

export default DeckOverview;