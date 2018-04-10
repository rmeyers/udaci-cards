import { AsyncStorage } from 'react-native'
import { formatResults, DECKS_STORAGE_KEY } from './_decks'

export function getDecks () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatResults)
}

export function getDeck ( id ) {
}

export function saveDeckTitle ( title ) {
}

export function addCardToDeck ( title, card ) {
}
