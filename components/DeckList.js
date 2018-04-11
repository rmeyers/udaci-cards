import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { loadDecks } from '../actions'
import { purple, white } from '../utils/colors'
import { NavigationActions } from 'react-navigation'
import DeckView from './DeckView'

class DeckList extends Component {
  state = {
    ready: false,
  }
  componentDidMount () {
    const { dispatch } = this.props

    getDecks()
      .then((decks) => dispatch(loadDecks(decks)))
      .then(() => this.setState(() => ({ ready: true })))
  }

  keysFromDecks = () => {
    return Object.keys( this.props.decks )
  }

  render() {
    const { decks } = this.props

    return (
      <View style={styles.container}>
        { this.keysFromDecks().map((deck) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => this.props.navigation.navigate('DeckView', {deckTitle: deck})}>
            <Text style={{color: purple, textAlign: 'center', fontSize: 20}}>{ deck }</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 0
  },
  item: {
    backgroundColor: white,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: purple
  }
})


function mapStateToProps (decks) {
  return { decks }
}

export default connect(
  mapStateToProps)(DeckList)
