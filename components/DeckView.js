import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getDeck } from '../utils/api'
import { purple, white } from '../utils/colors'


class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckTitle } = navigation.state.params

    return {
      title: `${deckTitle}`
    }
  }

  state = {
  }

  render() {
    const { decks } = this.props
    const { deckTitle } = this.props.navigation.state.params

    const deckCards = decks[deckTitle]

    if (deckCards['questions'] = []) {
      return (
        <View>
          <TouchableOpacity
            style={styles.item}
            >
            <Text
              style={{color: purple, textAlign: 'center', fontSize: 20}}
              onPress={() => this.props.navigation.navigate('NewCard', {deckTitle: deckTitle})}
            >
              No Cards - Click to add a card
            </Text>
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <View>
        <Text>{JSON.stringify(deckCards)}</Text>
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

function mapStateToProps (decks, { navigation }) {
  const { deckTitle } = navigation.state.params
  return {
    deckTitle,
    decks
  }
}

export default connect(
  mapStateToProps
)(DeckView)
