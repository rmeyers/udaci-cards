import { AsyncStorage } from 'react-native'
import { formatResults, DECKS_STORAGE_KEY } from './_decks'

export function getDecks () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatResults)
}

export function getDeck ( deck ) {
  return getDecks()
}

export function saveDeckTitle ( title ) {
  getDecks().then((decks) => {
    if (!decks[title]) {
      decks[title] = {'title': title, 'questions': []}
    }
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
  })
}

export function addNewCard ( title, card ) {
  getDecks().then((decks) => {
    if (decks[title] && decks[title]['questions']) {
      decks[title]['questions'].push(card)
    }
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
  })
}

export function emptyStorage() {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, '')
}