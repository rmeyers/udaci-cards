import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { loadDecks } from '../actions'

class DeckList extends Component {
  state = {
    ready: false,
  }
  componentDidMount () {
    const { dispatch } = this.props

    getDecks()
      .then((decks) => dispatch(loadDecks(decks)))
      .then(() => this.setState(() => ({ ready: true})))
  }

  render() {
    const { decks } = this.props

    return (
      <View>
        <Text>This is the Deck List { JSON.stringify( this.props.decks ) }</Text>
      </View>
    )
  }
}


function mapStateToProps (decks) {
  return { decks }
}

export default connect(
  mapStateToProps)(DeckList)
