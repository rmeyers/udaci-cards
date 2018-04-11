export const LOAD_DECKS = 'LOAD_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function loadDecks ( decks ) {
    return {
        type: LOAD_DECKS,
        decks,
    }
}

export function addDeck ( title ) {
    return {
        type: ADD_DECK,
        title,
    }
}

export function addCard ( title, card ) {
    return {
        type: ADD_CARD,
        title, card,
    }
}