export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_DECK = 'DELETE_DECK';
export const DELETE_CARD = 'DELETE_CARD';


export function receiveDecks (decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export function addDeck (dId, title) {
    return {
        type: ADD_DECK,
        dId,
        title
    }
}

export function deleteDeck (id) {
    return {
        type: DELETE_DECK,
        id
    }
}

export function addCard (dId, cId, question, answer) {
    return {
        type: ADD_CARD,
        dId,
        cId,
        question,
        answer
    }
}

export function deleteCard (card) {
    return {
        type: DELETE_CARD,
        card
    }
}