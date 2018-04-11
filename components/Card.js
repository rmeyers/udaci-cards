import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'


class Card extends Component {
  state = {
  }

  render() {
    return (
      <View>
        <Text>This is a CARD</Text>
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
)(Card)
