import React, {Component} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar  } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { connect } from "react-redux";
import DeckOverview from "./DeckOverview";
import isEmpty from "react-native-web/dist/vendor/react-native/isEmpty";


class Decks extends Component {

    render() {
        const { navigation, decks } = this.props;

        return (
            <View style={{flex: 1}}>
                <StatusBar />
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                    <View style={{flex: 1}} key="deck-view">
                        {isEmpty(decks)
                            ? <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <Text key="no-cards" style={styles.noCards}>No Decks!</Text>
                                <Entypo key="sad-face" name="emoji-sad" size={50} color="black"  />
                              </View>
                            : Object.values(decks).map((deck) => (
                                    <DeckOverview key={deck.id} deck={deck} navigateToDeck={() => {navigation.navigate("Deck", { id: deck.id})}}/>
                                ))}
                    </View>
                </ScrollView>
                <View style={styles.addContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Add Deck")} key={"add-button"}>
                        <AntDesign style={{margin: 20}} name="pluscircle" size={55} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    addContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        position: "absolute",
        alignSelf: "flex-end",
        bottom: 0,
    },
    navContainer: {
        flexDirection: "column",
        position: "absolute",
        alignSelf: "flex-start",
        top: 0,
    },
    noCards: {
        marginBottom: 10,
        marginTop: 20,
        fontSize: 15,
        fontWeight: "bold",
    }
});

function open({ navigation }) {
    navigation.openDrawer();
}

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Decks)