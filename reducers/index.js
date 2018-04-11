import { LOAD_DECKS, ADD_DECK, ADD_CARD } from '../actions'

function cards (state = {}, action) {
  switch (action.type) {
    case LOAD_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK :
      const newState = {
        ...state
      }
      newState[action.title] = {'title': action.title, 'questions': []}
      return newState
    case ADD_CARD :
      const newState2 = {
        ...state
      }
      newState2[action.title].questions.push(action.card)
      return newState2
    default :
      return state
  }
}

export default cards