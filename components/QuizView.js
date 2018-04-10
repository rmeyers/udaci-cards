import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'


class QuizView extends Component {
  state = {
  }

  render() {
    return (
      <View>
        <Text>This is the SUPER TOUGH QUIZ</Text>
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
)(QuizView)
