import React from "react";
import Decks from "./components/Decks";
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import DeckAdd from "./components/DeckAdd";
import Deck from "./components/Deck";
import CardAdd from "./components/CardAdd";
import Quiz from "./components/Quiz";
import QuizResult from "./components/QuizResult";

const Stack = createStackNavigator();


export default function App() {
  return (
      <Provider store={createStore(reducer)}>
          <NavigationContainer>
              <Stack.Navigator headerMode={"none"}>
                  <Stack.Screen name="Decks" component={Decks} navigation={this.navigation}/>
                  <Stack.Screen name="Add Deck" component={DeckAdd} navigation={this.navigation}/>
                  <Stack.Screen name="Deck" component={Deck} navigation={this.navigation} />
                  <Stack.Screen name="Add Card" component={CardAdd} navigation={this.navigation} />
                  <Stack.Screen name="Quiz" component={Quiz} navigation={this.navigation} />
                  <Stack.Screen name="Quiz Result" component={QuizResult} navigation={this.navigation} />
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  );
}
