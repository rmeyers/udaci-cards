import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'


class Results extends Component {
  state = {
  }

  render() {

    const { deckTitle, deckCards, score } = this.props.navigation.state.params

    return (
      <View>
        <Text>This is the Results</Text>
        <Text>You got { score } correct!</Text>
      </View>
    )
  }
}

export default Results
