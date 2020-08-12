import React, {Component} from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import TouchableButton from "./TouchableButton";

class Quiz extends Component {
    state = {
        correct: 0,
        index: 0,
        showAnswer: false
    }

    handleShowAnswer() {
        this.setState({showAnswer: true});
    }

    handleGuess(guess) {
        const { index } = this.state;
        const { cards } = this.props.route.params;
        const { navigation } = this.props;

        this.setState(prevState => {
            return {correct: guess === "correct" ? prevState.correct + 1 : prevState.correct}
        }, () => {
            if ((cards.length - 1) === index) {
                return navigation.navigate("Quiz Result", {correct: this.state.correct, total: cards.length, navigation: navigation}, this.handleReset());
            }
            this.setState({showAnswer: false});
            this.setState({index: index + 1});
        })

    }

    handleReset(){
        this.setState({index: 0, showAnswer: false, correct: 0});
    }


    render() {
        const { cards } = this.props.route.params;
        const { index, showAnswer } = this.state;
        const cardDetails = Object.values(cards[index])[0];

        const displayQuestion = showAnswer ? "none" : "flex" ;
        const displayAnswer = showAnswer ? "flex" : "none" ;



        return (
            <View style={{flex: 1}}>
                <Text style={styles.questionCount}>Question {index + 1} out of {cards.length}</Text>
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}>
                    <View style={styles.mainContainer}>
                        <Text style={[styles.questionText , {display: displayQuestion}]}>{cardDetails.question}</Text>
                        <TouchableButton onPress={() => this.handleShowAnswer()}
                                         styleButton={[styles.showButton, {display: displayQuestion}]}
                                         text="Show Answer"
                                         styleText={styles.buttonText}
                        />

                        <Text style={[styles.questionText , {display: displayAnswer}]}>{cardDetails.answer}</Text>
                        <Text style={{display: displayAnswer, fontWeight: "bold"}}>Did you guess correctly?</Text>
                        <TouchableButton onPress={() => this.handleGuess("correct")}
                                         styleButton={[styles.yesButton, {display: displayAnswer}]}
                                         text="Yes!"
                                         styleText={styles.buttonText}
                        />
                        <TouchableButton onPress={() => this.handleGuess("wrong")}
                                         styleButton={[styles.noButton, {display: displayAnswer}]}
                                         text="No!"
                                         styleText={styles.buttonText}
                        />

                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
    },
    showButton: {
        marginTop: 50,
        backgroundColor: "black",
        borderRadius: 15,
        padding: 10,
        width: 200,
    },
    yesButton: {
        marginTop: 50,
        backgroundColor: "green",
        borderRadius: 15,
        padding: 10,
        width: 200,
    },
    noButton: {
        marginTop: 50,
        backgroundColor: "red",
        borderRadius: 15,
        padding: 10,
        width: 200,
    },
    questionCount: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 10
    },
    questionText: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
        paddingBottom: 50
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    }
})

export default connect()(Quiz);