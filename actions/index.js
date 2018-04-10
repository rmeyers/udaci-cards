export const LOAD_DECKS = 'LOAD_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function load_decks ( decks ) {
    return {
        type: LOAD_DECKS,
        decks,
    }
}

export function load_decks ( decks ) {
    return {
        type: ADD_DECK,
        deck,
    }
}

export function load_decks ( decks ) {
    return {
        type: ADD_CARD,
        card,
    }
}