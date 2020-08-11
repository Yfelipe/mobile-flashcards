import React, {Component} from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { idGenerate } from "../Helpers/General";
import { addCard } from "../actions";
import { connect } from "react-redux";
import {Ionicons} from "@expo/vector-icons";
import isEmpty from "react-native-web/dist/vendor/react-native/isEmpty";

class CardAdd extends Component {
    state = {
        question: "",
        answer: ""
    }

    handleTextChange(state, value){
        this.setState({[state]: value});
    }

    handleSubmit() {
        const { dispatch } = this.props;
        const { id } = this.props.route.params;
        const { question, answer } = this.state;
        const cId = idGenerate();

        if (isEmpty(question)){
            return alert("Please Enter Question!")
        } else if (isEmpty(answer)){
            return alert("Please Enter Answer!")
        }

        dispatch(addCard(id, cId, question, answer));
        this.handelBack();

    }

    handelBack() {
        const { navigation } = this.props;

        navigation.goBack();
    }

    render() {
        const { question, answer } = this.state;

        return (
            <View style={{flex: 1}}>
                <ScrollView>
                    <View style={styles.mainContainer}>
                        <View style={styles.infoContainer}>
                            <Text style={styles.topText}>Card Add</Text>
                            <Text style={styles.titleText}>Question</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter Question"
                                onChangeText={question => this.handleTextChange("question", question )}
                                value={question}
                            />
                            <Text style={styles.titleText}>Answer</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter Answer"
                                onChangeText={answer => this.handleTextChange("answer", answer )}
                                value={answer}
                            />
                            <TouchableOpacity style={styles.addButton} onPress={() => this.handleSubmit()}>
                                <Text style={{color: "white", textAlign: "center"}}>
                                    Save
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity onPress={() => this.handelBack()} style={{position: 'absolute'}}>
                    <Ionicons name="md-arrow-round-back" size={35} color="black" style={{margin: 25}} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        width: "100%",
        borderRadius: 10,
        borderWidth: 1,
        textAlign: "center"
    },
    addButton: {
        marginTop: 50,
        backgroundColor: "green",
        borderRadius: 15,
        padding: 10,
        width: "50%",
    },
    mainContainer: {
        marginTop:50,
        alignItems: "center",
    },
    infoContainer: {
        alignItems: "center",
        marginTop: 25,
        width: "70%",
    },
    topText: {
        marginBottom: 30,
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

export default connect()(CardAdd);