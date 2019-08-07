import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import OptionButton from './components/OptionButton';

class ToolManagementScreen extends React.Component {
  constructor(props) {
    super(props)
    this._showWorkInfo = this._showWorkInfo.bind(this);
    this.state = {
    };
  }

  _showWorkInfo(isCheck) {
    if (isCheck == 1) {
      return <View style={styles.viewWorkInfo}>
        <Image source={require('../images/Work_icon_info.png')} />
        <Text style={styles.txtWorkInfo}>You can set up important company information with the application quickly.</Text>
        <TouchableOpacity style={styles.btnIsCheck}>
          <Text style={styles.txtIsCheck}>Understand, dont show next time</Text>
        </TouchableOpacity>
      </View>
    }
  }

  render() {
    return (
      <View style={styles.container} >
        <ScrollView>
          {this._showWorkInfo(1)}
          <View
            style={
              styles.viewOptionContainer
            }>
            <OptionButton
              imgSource={require('../images/5_Acc_ico_1_report.png')}
              optionName='Công ty'
              reportCount={1}
            />
            <OptionButton
              imgSource={require('../images/5_Acc_ico_2_ManaOff.png')}
              optionName='Ca làm'
              reportCount={10}
            />
            <OptionButton
              imgSource={require('../images/5_Acc_ico_3_Salary-report.png')}
              optionName='Nhân viên'
              reportCount={0}
            />
            <OptionButton
              imgSource={require('../images/5_Acc_ico_4_request.png')}
              optionName='Sắp xếp lịch công'
              reportCount={0}
            />
            <OptionButton
              imgSource={require('../images/5_Acc_ico_5_whowork.png')}
              optionName='Chấm công nhanh'
              reportCount={0}
            />
            <OptionButton
              imgSource={require('../images/5_Acc_ico_5_whowork.png')}
              optionName='Chỉnh sửa giờ công'
              reportCount={0}
            />
            <OptionButton
              imgSource={require('../images/5_Acc_ico_5_whowork.png')}
              optionName='Gói thuê bao'
              reportCount={0}
            />
            <OptionButton
              imgSource={require('../images/5_Acc_ico_6_Alert.png')}
              optionName='Chỉnh sửa giờ công'
              reportCount={0}
              optionStyle={{ borderBottomWidth: 0 }}
            />
          </View>
        </ScrollView>
      </View>
    );
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#f0f8ff',
  },
  viewWorkInfo: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    flex: 1,
  },
  viewOptionContainer: {
    paddingBottom: 10,
    paddingTop: 10,
    height: 420,
    backgroundColor: 'white',
  },
  txtWorkInfo: {
    margin: 10,
    textAlign: 'center'
  },
  txtIsCheck: {
    color: 'seagreen'
  },
  btnIsCheck: {
    borderWidth: 1,
    borderColor: 'seagreen',
    padding: 5,
  }
});

export default ToolManagementScreen;