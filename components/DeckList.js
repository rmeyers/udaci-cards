import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


class DeckList extends Component {
  state = {
  }

  render() {
    return (
      <View>
        <Text>This is the Deck List</Text>
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
)(DeckList)
