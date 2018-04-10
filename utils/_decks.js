// Utilities for backfilling the decks.

import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = 'ryan.decks'

function setDummyData () {
  return {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }
}

export function formatResults (results) {
  return (results)
    ? JSON.parse(results)
    : setDummyData()
}