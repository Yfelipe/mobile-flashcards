import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, TextInput} from "react-native";
import {addDeck} from "../actions";
import { connect } from "react-redux";
import { Ionicons } from '@expo/vector-icons';
import { idGenerate } from "../Helpers/General";
import isEmpty from "react-native-web/dist/vendor/react-native/isEmpty";
import TouchableButton from "./TouchableButton";



class DeckAdd extends Component {
    state = {
        deckTitle: ""
    }

    handleTextChange(title){
        this.setState({deckTitle: title});
    }

    handleSubmit() {
        const { dispatch, navigation } = this.props;
        const { deckTitle } = this.state;
        const id = idGenerate();

        if (isEmpty(deckTitle)) {
            return alert("Please Enter Title!")
        }

        dispatch(addDeck(id, deckTitle));
        navigation.navigate("Deck", { id: id});
        //this.handelBack();

    }

    handelBack() {
        const { navigation } = this.props;

        this.setState({deckTitle: ""});
        navigation.navigate("Decks");
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => this.handelBack()}>
                    <Ionicons name="md-arrow-round-back" size={35} color="black" style={{margin: 25}} />
                </TouchableOpacity>
                <View style={styles.mainContainer}>
                    <View style={styles.infoContainer} >
                        <Text style={styles.topText}>
                            New Deck
                        </Text>
                        <Text style={styles.titleText}>Deck Title</Text>
                        <TextInput
                            style={styles.titleInput}
                            placeholder="Enter Deck Title"
                            onChangeText={title => this.handleTextChange(title)}
                            value={this.state.deckTitle}
                        />
                        <TouchableButton onPress={() => this.handleSubmit()}
                                         styleButton={styles.addButton}
                                         text="Save"
                                         styleText={{color: "white", textAlign: "center"}}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
    },
    titleInput: {
        width: "100%",
        borderRadius: 10,
        borderWidth: 1,
        textAlign: "center"
    },
    infoContainer: {
        alignItems: "center",
        marginTop: 25,
        width: "70%",
    },
    addButton: {
        marginTop: 50,
        backgroundColor: "green",
        borderRadius: 15,
        padding: 10,
        width: 200,
    },
    topText: {
        marginBottom: 50,
        fontSize: 30,
        fontWeight: "bold",
    },
    titleText: {
        marginBottom: 10,
        marginTop: 20,
        fontSize: 15,
        fontWeight: "bold",
    }
})


export default connect()(DeckAdd);