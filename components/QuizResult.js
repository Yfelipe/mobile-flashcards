import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";
import TouchableButton from "./TouchableButton";

function QuizResult(props){
    const { correct, total } = props.route.params;
    const { navigation } = props;

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.resultText}>You Scored</Text>
            <Text style={styles.resultCount}>{correct}/{total}</Text>
            <TouchableButton onPress={() => navigation.navigate("Quiz")} styleButton={styles.button} text="Restart" styleText={styles.buttonText} />
            <TouchableButton onPress={() => navigation.navigate("Deck")} styleButton={styles.button} text="Home" styleText={styles.buttonText} />
        </View>
    );
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
        width: 200,
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    }
})

export default QuizResult;