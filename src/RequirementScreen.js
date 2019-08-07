import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import OptionButton from './components/OptionButton';

class RequirementScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''

    };
  }

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

        <ScrollView
          style={{ flex: 1 }}
        >
          <OptionButton
            imgSource={require('../images/Work_request_ico_1.png')}
            optionName='Công tác/Ra ngoài'
            containerStyle={{ height: 60 }}
            optionStyle={{ paddingRight: 20 }}
            imgArrowStyle={{ height: 15, width: 15 }}
          />
          <OptionButton
            imgSource={require('../images/Work_request_ico_2.png')}
            optionName='Đề nghị nghỉ phép'
            containerStyle={{ height: 60 }}
            optionStyle={{ paddingRight: 20 }}
            imgArrowStyle={{ height: 15, width: 15 }}
          />
          <OptionButton
            imgSource={require('../images/Work_request_ico_3.png')}
            optionName='Yêu cầu làm thêm giờ'
            containerStyle={{ height: 60 }}
            optionStyle={{ paddingRight: 20 }}
            imgArrowStyle={{ height: 15, width: 15 }}
          />
          <OptionButton
            imgSource={require('../images/Work_request_ico_4.png')}
            optionName='Yêu cầu thanh toán'
            containerStyle={{ height: 60 }}
            optionStyle={{ paddingRight: 20 }}
            imgArrowStyle={{ height: 15, width: 15 }}
          />
          <OptionButton
            imgSource={require('../images/Work_request_ico_5.png')}
            optionName='Yêu cầu mượn xe'
            containerStyle={{ height: 60 }}
            optionStyle={{ paddingRight: 20 }}
            imgArrowStyle={{ height: 15, width: 15 }}
          />
          <OptionButton
            imgSource={require('../images/Work_request_ico_6.png')}
            optionName='Yêu cầu mua hàng'
            containerStyle={{ height: 60 }}
            optionStyle={{ paddingRight: 20 }}
            imgArrowStyle={{ height: 15, width: 15 }}
          />
          <OptionButton
            imgSource={require('../images/Work_request_ico_7.png')}
            optionName='Thanh toán chi phí'
            containerStyle={{ height: 60 }}
            optionStyle={{ paddingRight: 20 }}
            imgArrowStyle={{ height: 15, width: 15 }}
          />
          <OptionButton
            imgSource={require('../images/Work_request_ico_8.png')}
            optionName='Tạm ứng'
            containerStyle={{ height: 60 }}
            optionStyle={{ paddingRight: 20 }}
            imgArrowStyle={{ height: 15, width: 15 }}
          />
          <OptionButton
            imgSource={require('../images/Work_request_ico_9.png')}
            optionName='Yêu cầu mượn'
            containerStyle={{ height: 60 }}
            optionStyle={{ paddingRight: 20 }}
            imgArrowStyle={{ height: 15, width: 15 }}
          />
          <OptionButton
            imgSource={require('../images/Work_request_ico_10.png')}
            optionName='Yêu cầu đi muộn về sớm'
            containerStyle={{ height: 60 }}
            optionStyle={{ paddingRight: 20 }}
            imgArrowStyle={{ height: 15, width: 15 }}
          />
        </ScrollView>
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

export default RequirementScreen;
