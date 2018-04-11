import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { purple, white, black } from '../utils/colors'
import {clearLocalNotification, setLocalNotification} from '../utils/helpers'

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckTitle } = navigation.state.params

    return {
      title: `${deckTitle}`
    }
  }

  state = {
  }

  submit = () => {
    const { decks } = this.props
    const { deckTitle } = this.props.navigation.state.params

    const deckCards = decks[deckTitle]

    clearLocalNotification()
      .then(setLocalNotification)
      .then(this.props.navigation.navigate('Card', {
              'deckTitle': deckTitle,
              'cardNum': 0,
              'score': 0,
              'deckCards': deckCards
            })
      )
  }

  render() {
    const { decks } = this.props
    const { deckTitle } = this.props.navigation.state.params

    const deckCards = decks[deckTitle]

    if (deckCards['questions'].length === 0) {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.item}
            >
            <Text
              style={{color: white, textAlign: 'center', fontSize: 16}}
              onPress={() => this.props.navigation.navigate('NewCard', {deckTitle: deckTitle})}
            >
              No Cards - Add a Question
            </Text>
          </TouchableOpacity>
        </View>
      )
    }

    const cardCount = deckCards['questions'].length
    let cardCountStatement = ''

    if (cardCount === 1) {
      cardCountStatement = "There is " + cardCount.toString() + " card in this deck."
    } else {
      cardCountStatement = "There are " + cardCount.toString() + " cards in this deck."
    }

    return (
      <View style={styles.container}>
        <Text
          style={{color: black, textAlign: 'center', fontSize: 20, margin: 40}}
        >{ cardCountStatement }</Text>
        <TouchableOpacity
          style={styles.item}
          onPress={() => this.submit()}
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
