import {ADD_CARD, ADD_DECK, DELETE_CARD, DELETE_DECK, RECEIVE_DECKS} from "../actions";

export default function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS :
            return {
                ...state,
                ...action.decks,
            }
        case ADD_DECK :
            const { dId, title } = action;

            return {
                ...state,
                [dId]: {
                    id:dId,
                    timestamp: Date.now(),
                    title: title,
                    cards:[]
                }
            }
        case DELETE_DECK :
            const { [action.id]: value, ...newState } = state;
            return newState;


        case ADD_CARD :
            const { cId, question, answer } = action;

            return {
                ...state,
                [action.dId]:{
                    ...state[action.dId],
                    cards:[
                        ...state[action.dId].cards,
                        {
                            [cId]: {
                                id: cId,
                                timestamp: Date.now(),
                                question: question,
                                answer: answer,
                            }
                        }]
                }
            }
        case DELETE_CARD :
            return {
                ...state,
                cards: state.cards.filter((card) => card.id !== action.id )
            }
        default:
            return state
    }
}