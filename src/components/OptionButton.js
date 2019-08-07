import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class OptionButton extends Component {

  static propTypes = {
    imgSource: PropTypes.any,
    optionName: PropTypes.string,
    reportCount: PropTypes.number,
    optionStyle: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this._displayCountReport = this._displayCountReport.bind(this);
    this.state = {
    };
  }

  _displayCountReport(count) {
    if (count >= 1 && count <= 9) {
      return (
        <View style={styles.viewCountReport}>
          <Text style={styles.txtCountReport}>{count}</Text>
        </View>
      );
    }
    else if (count >= 10) {
      return (
        <View style={styles.viewCountReport}>
          <Text style={styles.txtCountReport}>9+</Text>
        </View>
      );
    }
  }

  render() {
    const { imgSource, optionName, reportCount, containerStyle, optionStyle, imgArrowStyle } = this.props;
    return (
      <TouchableOpacity
        style={[styles.container,containerStyle]}
      >
        <View
          style={styles.viewImage}
        >
          <Image
            source={imgSource}
            style={styles.imgOption}
          />
        </View>

        <View
          // style={{ ...styles.viewOptionName, ...optionStyle }}
          style={[styles.viewOptionName, optionStyle]}
        >
          <Text
            style={styles.txtOptionName}>
            {optionName}
          </Text>
          {this._displayCountReport(reportCount)}
          <Image
            source={require('../../images/right-arrow.png')}
            style={[styles.imgNextArrow,imgArrowStyle]}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    height:50
  },
  viewOptionName: {
    flexDirection: 'row',
    marginRight: 15,
    marginLeft: 15,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgOption: {
    marginLeft: 25,
    alignContent: 'space-between',
    alignSelf: 'center',
  },
  txtOptionName: {
    fontSize: 18,
    color: 'black',
    flex: 5,
    alignSelf: 'center'
  },
  imgNextArrow: {
    width: 5,
    height: 10,
    tintColor: 'black',
  },
  viewCountReport: {
    height: 20,
    borderRadius: 10,
    backgroundColor: '#dc143c',
    marginRight: 15,
    paddingHorizontal: 5
  },
  txtCountReport: {
    color: 'white',
    alignSelf: 'center'
  },
  viewImage: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15
  }
});

export default OptionButton;
