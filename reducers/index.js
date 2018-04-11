import { LOAD_DECKS, ADD_DECK, ADD_CARD } from '../actions'

function cards (state = {}, action) {
  switch (action.type) {
    case LOAD_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK :
      return {
        ...state,
        ...action.deck
      }
    case ADD_CARD :
      const newState = {
        ...state
      }
      newState[action.title].questions.push(action.card)
      return newState
    default :
      return state
  }
}

export default cards