import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

class QuizResult extends Component {

    handleHome(){
        const { navigation } = this.props;

        navigation.navigate("Decks");
    }


    render() {
        const { correct, total } = this.props.route.params;

        return (
            <View style={styles.mainContainer}>
                <Text style={styles.resultText}>You Scored</Text>
                <Text style={styles.resultCount}>{correct}/{total}</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.handleHome()}>
                    <Text style={styles.buttonText}>Home</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    },
    resultCount: {
        textAlign: "center",
        fontSize: 50,
        paddingTop: 10
    },
    resultText: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
        paddingBottom: 50
    },
    button: {
        marginTop: 50,
        backgroundColor: "black",
        borderRadius: 15,
        padding: 10,
        width: "50%",
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    }
})

export default QuizResult;