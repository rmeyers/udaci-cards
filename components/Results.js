import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { purple, white, black, gray } from '../utils/colors'


class Results extends Component {
  state = {
  }

  render() {

    const { deckTitle, deckCards, score } = this.props.navigation.state.params

    const numQuestions = deckCards['questions'].length
    const percentScore = 100 * score / numQuestions
    var comment

    if ( percentScore === 100 ) {
      comment = 'Wow! You got this section perfect!'
    } else if ( percentScore > 70 ) {
      comment = 'Not bad! Keep going until you score perfect!'
    } else {
      comment = 'Uh oh, looks like this section might need some work!'
    }

    return (
      <View style={styles.container}>
        <Text style={styles.header}>{ deckTitle } Results</Text>
        <Text style={styles.text}>{ comment }</Text>
        <Text style={styles.text}>You got { score }/{ numQuestions } correct.</Text>
        <TouchableOpacity
          style={[styles.item, {marginTop: 120, backgroundColor: purple}]}
          onPress={() => this.props.navigation.navigate('Card', {
            'deckTitle': deckTitle,
            'cardNum': 0,
            'score': 0,
            'deckCards': deckCards
          })}
        >
          <Text
            style={styles.btnText}
          >
            Re-take Quiz
          </Text>
        </TouchableOpacity>        <TouchableOpacity
          style={[styles.item, {backgroundColor: gray}]}
          onPress={() => this.props.navigation.navigate('DeckList')}
        >
          <Text
            style={styles.btnText}
          >
            Back to All Decks
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
    justifyContent: 'flex-start'
  },
  item: {
    alignSelf: 'center',
    backgroundColor: purple,
    padding: 10,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: white,
    borderRadius: 10,
    margin: 20
  },
  text: {
    fontSize: 20,
    color: black,
    margin: 20,
  },
  header: {
    alignSelf: 'center',
    fontSize: 30,
    color: purple,
    marginTop: 40,
    marginBottom: 40
  },
  btnText: {
    color: white,
    textAlign: 'center',
    fontSize: 16
  },

})

export default Results
