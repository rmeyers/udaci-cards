import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { purple, white } from '../utils/colors'
import { saveDeckTitle } from '../utils/api'
import { addDeck } from '../actions'


class NewDeck extends Component {
  static navigationOptions = () => {
    return {
      title: "New Deck"
    }
  }

  state = {
    deckTitle: ''
  }

  submit = () => {
    const { dispatch } = this.props
    const deckTitle = this.state.deckTitle

    saveDeckTitle( deckTitle ) // Update DB
    dispatch(addDeck( deckTitle )) // Update Redux

    this.setState({
      deckTitle: ''
    })

    this.textInput.clear()

    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.item}
          placeholder="Name of New Deck"
          onChangeText={(deckTitle) => this.setState({deckTitle})}
          ref={(input) => { this.textInput = input }}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => this.submit()}>
            Create Deck
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

function mapStateToProps ({ navigation }) {
  return {
  }
}

export default connect(mapStateToProps)(NewDeck)
