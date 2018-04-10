import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'


class NewQuestion extends Component {
  state = {
  }

  render() {
    return (
      <View>
        <Text>This is the NEW Question</Text>
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
)(NewQuestion)
