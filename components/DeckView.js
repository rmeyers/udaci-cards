import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'


class DeckView extends Component {
  state = {
  }

  render() {
    return (
      <View>
        <Text>This is the Deck View ONLY</Text>
      </View>
    )
  }
}


function mapStateToProps (state) {
  return {
  }
}

export default connect(
  mapStateToProps
)(DeckView)
