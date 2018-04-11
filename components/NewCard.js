import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { purple, white } from '../utils/colors'


class NewCard extends Component {
  static navigationOptions = () => {
    return {
      title: "New Question"
    }
  }

  state = {
    question: '',
    answer: '',
  }

  submit = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.item}
          placeholder="Fill in the question"
          onChangeText={(question) => this.setState({question})}
        />
        <TextInput
          style={styles.item}
          placeholder="Fill in the answer"
          onChangeText={(answer) => this.setState({answer})}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={this.submit()}>
            Add Question
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
  },
  item: {
    backgroundColor: white,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: purple
  },
  button: {
    backgroundColor: purple,
    height: 50,
    width: 150,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: white
  }
})

function mapStateToProps (state) {
  return {
  }
}

export default connect(
  mapStateToProps
)(NewCard)
