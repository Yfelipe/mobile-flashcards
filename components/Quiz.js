import React, {Component} from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";

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
        const { correct, index } = this.state;
        const { cards } = this.props.route.params;
        const { navigation } = this.props;


        this.setState(prevState => {
            return {correct: guess === "correct" ? prevState.correct + 1 : prevState.correct}
        }, () => {
            if ((cards.length - 1) === index) {
                return navigation.navigate("Quiz Result", {correct: this.state.correct, total: cards.length});
            }
            this.setState({showAnswer: false});
            this.setState({index: index + 1});
        })

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
                        <TouchableOpacity style={[styles.showButton, {display: displayQuestion}]} onPress={() => this.handleShowAnswer()}>
                            <Text style={styles.buttonText}>Show Answer</Text>
                        </TouchableOpacity>

                        <Text style={[styles.questionText , {display: displayAnswer}]}>{cardDetails.answer}</Text>
                        <Text style={{display: displayAnswer, fontWeight: "bold"}}>Did you guess correctly?</Text>
                        <TouchableOpacity style={[styles.yesButton, {display: displayAnswer}]} onPress={() => this.handleGuess("correct")}>
                            <Text style={styles.buttonText}>Yes!</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.noButton, {display: displayAnswer}]} onPress={() => this.handleGuess("wrong")}>
                            <Text style={styles.buttonText}>No!</Text>
                        </TouchableOpacity>
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
        width: "50%",
    },
    yesButton: {
        marginTop: 50,
        backgroundColor: "green",
        borderRadius: 15,
        padding: 10,
        width: "50%",
    },
    noButton: {
        marginTop: 50,
        backgroundColor: "red",
        borderRadius: 15,
        padding: 10,
        width: "50%",
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