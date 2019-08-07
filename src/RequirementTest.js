import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import OptionButton from './components/OptionButton';
import requirementList from './components/RequirementList';

class RequirementTest extends Component {
  constructor(props) {
    super(props);
    // this._keyExtractor=this._keyExtractor.bind(this)
    // this._renderItem=this._renderItem.bind(this)
    this.state = {
      searchTerm: ''

    };
  }

  _keyExtractor = (require, index) => require.id;

  _renderItem = ({ require }) => (
    <OptionButton
      id={require.id}
      imgSource={require(`../images/Work_request_ico_${id+1}.png`)}
      optionName={require.requireName}
      containerStyle={{ height: 60 }}
      optionStyle={{ paddingRight: 20 }}
      imgArrowStyle={{ height: 15, width: 15 }}
    />
  );

  render() {
    return (
      <View
        style={styles.container}
      >
        <View
        
          style={styles.viewSearchBar}

        >
          <Image
            style={styles.imgIconSearch}
            source={require('../images/searchIcon.png')}
          />
          <TextInput
            style={styles.textInputSearch}
            placeholder={
              'Search...'
            }
            onChangeText={(searchTerm) => this.setState({ searchTerm })}
            value={this.state.searchTerm}
          />
        </View>

        <FlatList 
            style={{flex:1}}
            data={requirementList}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
        />
        <TouchableOpacity
          style={styles.btnCancel}
        >
          <Text
            style={styles.txtCancel}
          >
            CANCEL
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewSearchBar: {
    backgroundColor: '#e6e6fa',
    borderRadius: 5,
    margin: 15,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgIconSearch: {
    width: 20,
    height: 20,
    tintColor: 'lightgrey',
    margin: 10
  },
  textInputSearch: {
    flex: 1
  },
  btnCancel: {
    height: 60,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 15
  },
  txtCancel: {
    color: 'white',
    fontSize: 18
  }
})

export default RequirementTest;
