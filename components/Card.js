import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import FlipCard from 'react-native-flip-card'
import { purple, white, gray } from '../utils/colors'


class Card extends Component {
  state = {
  }

  nextCard = (answer) => {
    const { deckTitle, cardNum, deckCards, score } = this.props.navigation.state.params
    var newScore = score
    if (answer === 'correct') {
      newScore = score + 1
    }
    // If the next card doesn't exist, take to the results page. Otherwise, next card.
    // Also, adjust total score.
    if ( deckCards['questions'].length > (cardNum + 1) ) {
      this.props.navigation.navigate('Card', {
        'deckTitle': deckTitle,
        'cardNum': cardNum + 1,
        'score': newScore,
        'deckCards': deckCards
      }
    )} else {
      this.props.navigation.navigate('Results', {
        'deckTitle': deckTitle,
        'score': newScore,
        'deckCards': deckCards
      }
    )}
  }

  render() {
    const { deckTitle, cardNum, deckCards, score } = this.props.navigation.state.params

    return (
      <View style={styles.pageLayout}>
        <FlipCard
          style={styles.card}
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          flip={false}
          clickable={true}
          onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
        >
          {/* Face Side */}
          <View
            style={styles.card}
          >
            <Text style={styles.quizText}>{ deckCards['questions'][cardNum]['question'] }</Text>
          </View>
          {/* Back Side */}
          <View
            style={styles.card}
          >
            <Text style={styles.quizText}>{ deckCards['questions'][cardNum]['answer'] }</Text>
            <View>
              <TouchableOpacity
                style={styles.item}
                onPress={() => this.nextCard('correct')}
              >
                <Text
                  style={styles.text}
                >
                  Correct
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.item}
                onPress={() => this.nextCard('incorrect')}
              >
                <Text
                  style={styles.text}
                >
                  Incorrect
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </FlipCard>
        <TouchableOpacity
          style={[styles.item, {marginTop: 120, backgroundColor: gray}]}
          onPress={() => this.props.navigation.navigate('DeckList')}
        >
          <Text
            style={styles.text}
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
    margin: 10
  },
  pageLayout: {
    alignItems: 'center',
    flex: 0.5,
    justifyContent: 'flex-start',
    marginTop: 50
  },
  card: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 0,
    justifyContent: 'space-around',
    height: 300,
    backgroundColor: white,
    width: 300
  },
  text: {
    color: white,
    textAlign: 'center',
    fontSize: 16
  },
  quizText: {
    alignSelf: 'center',
    color: purple,
    textAlign: 'center',
    fontSize: 24,
  },
})

export default Card
