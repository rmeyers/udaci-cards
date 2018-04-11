import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { purple, white, black } from '../utils/colors'


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

    if (deckCards['questions'] === []) {
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
      <View style={styles.container}>
        <Text
          style={{color: black, textAlign: 'center', fontSize: 20, margin: 40}}
        >There are {deckCards.questions.length} cards in this deck.</Text>
        <TouchableOpacity
          style={styles.item}
          >
          <Text
            style={{color: white, textAlign: 'center', fontSize: 16}}
          >
            Start Quiz
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          >
          <Text
            style={{color: white, textAlign: 'center', fontSize: 16}}
            onPress={() => this.props.navigation.navigate('NewCard', {deckTitle: deckTitle})}
          >
            Add Another Question
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 0,
    alignItems: 'center'
  },
  item: {
    backgroundColor: purple,
    color: white,
    padding: 10,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: white,
    borderRadius: 10,
    margin: 20
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
