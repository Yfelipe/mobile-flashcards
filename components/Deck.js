import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import { connect } from "react-redux";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import CardsQuickView from "./CardsQuickView";
import {deleteDeck} from "../actions";
import isEmpty from "react-native-web/dist/vendor/react-native/isEmpty";
import TouchableButton from "./TouchableButton";

class Deck extends Component {

    cardsCheck(cards){
        const { navigation } = this.props;

        if (cards.length === 0) {
            return alert("Please add cards!");
        }

        navigation.navigate("Quiz", {cards: cards})

    }

    handleDelete(id) {
        const { dispatch, navigation } = this.props;

        dispatch(deleteDeck(id));
        navigation.navigate("Decks");
    }

    render() {
        const { id } = this.props.route.params;
        const { decks, navigation } = this.props;

        const deck = decks[id];

        if (isEmpty(deck)){
            navigation.navigate("Decks");
            return null;
        }

        return (
            <View style={{ flex: 1}}>
                <ScrollView>
                    <View style={styles.mainContainer}>
                        <Text style={styles.topText}>
                            {deck.title}
                        </Text>
                        <Text>
                            {deck.cards.length} Cards
                        </Text>

                        <TouchableButton onPress={() => this.cardsCheck(deck.cards)}
                                         styleButton={styles.button}
                                         text="Start Quiz"
                                         styleText={{color: "white", textAlign: "center"}}
                        />

                        <TouchableButton onPress={() => navigation.navigate("Add Card", { id: id})}
                                         styleButton={styles.button}
                                         text="Add Card"
                                         styleText={{color: "white", textAlign: "center"}}
                        />

                        <View style={styles.cardList}>
                            <Text style={{textAlign: "center", fontSize: 15, fontWeight: "bold"}}>Cards In Deck</Text>
                            <ScrollView centerContent={true} style={styles.list}>
                                {deck.cards.length === 0
                                    ? <Text style={{textAlign: "center"}}>No Cards!</Text>
                                    : Object.values(deck.cards).map( card => (
                                        <CardsQuickView key={Object.keys(card)} card={card} />
                                    ))}
                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate("Decks")} style={{position: 'absolute'}}>
                    <Ionicons name="md-arrow-round-back" size={35} color="black" style={{margin: 25}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.handleDelete(id)} style={{position: 'absolute', right: 0}}>
                    <AntDesign name="delete" size={30} color="darkred" style={{margin: 25}} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop:50,
        alignItems: "center",
    },
    topText: {
        marginBottom: 50,
        fontSize: 30,
        fontWeight: "bold",
    },
    button: {
        marginTop: 40,
        backgroundColor: "black",
        borderRadius: 15,
        padding: 10,
        width: 200,
    },
    cardList: {
        width: "50%",
        marginTop: 20,
        justifyContent: 'center',
    },
    list: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 15,
    }
})

function mapStateToProps(decks){
    return {
        decks,
    }
}

export default connect(mapStateToProps)(Deck);