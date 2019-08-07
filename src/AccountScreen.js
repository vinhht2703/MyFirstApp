

import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import OptionButton from './components/OptionButton';

class AccountScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: {
                fullname: 'Hieu Hao',
                phoneNumber: '+84 128183444',
                agency: '9Nine Studio'
            }
        };
    }

    render() {
        return (
            <View style={styles.container} >
                <ScrollView>
                    <View style={styles.viewInformation}>
                        <View style={styles.viewProfile}>
                            <View style={{ flex: 1 }}>
                                <Text
                                    style={{
                                        fontSize: 25,
                                        color: 'seagreen'
                                    }}>
                                    {this.state.profile.fullname}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 15
                                    }}>
                                    {this.state.profile.phoneNumber}
                                </Text>
                            </View>
                            <Image
                                style={styles.imgProfile}
                                source={require('../images/profilePic.jpg')} />
                        </View>
                        <TouchableOpacity style={styles.btnQRCode}>
                            <Image
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                                source={require('../images/4_Em_ico_qrcode.png')} />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            ...styles.viewOptionContainer,
                            paddingBottom: 10
                        }}>
                        <View style={styles.viewManageOption}>
                            <Text style={styles.txtAgency}>{this.state.profile.agency}</Text>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'center',
                                    flexDirection: 'row'
                                }}
                            >
                                <Image
                                    style={{
                                        width: 25,
                                        height: 25
                                    }}
                                    source={require('../images/5_Acc_head_setting.png')}
                                />
                                <Text style={styles.txtManageBtn}> Manage</Text>
                            </TouchableOpacity>
                        </View>
                        <OptionButton
                            imgSource={require('../images/5_Acc_ico_1_report.png')}
                            optionName='Report'
                            reportCount={1}
                        />
                        <OptionButton
                            imgSource={require('../images/5_Acc_ico_2_ManaOff.png')}
                            optionName='Manage off'
                            reportCount={10000}
                        />
                        <OptionButton
                            imgSource={require('../images/5_Acc_ico_3_Salary-report.png')}
                            optionName='Salary report'
                            reportCount={0}
                        />
                        <OptionButton
                            imgSource={require('../images/5_Acc_ico_4_request.png')}
                            optionName='Manage request'
                            reportCount={0}
                        />
                        <OptionButton
                            imgSource={require('../images/5_Acc_ico_5_whowork.png')}
                            optionName='Who`s working'
                            reportCount={0}
                        />
                        <OptionButton
                            imgSource={require('../images/5_Acc_ico_6_Alert.png')}
                            optionName='Alert Setting'
                            reportCount={0}
                            optionStyle={{ borderBottomWidth: 0 }}
                        />
                    </View>

                    <View
                        style={{
                            ...styles.viewOptionContainer,
                            paddingTop: 10,
                            paddingBottom: 10
                        }}>
                        <OptionButton
                            imgSource={require('../images/5_Acc_ico_7_About-us.png')}
                            optionName='About Us'
                            reportCount={0}
                        />
                        <OptionButton
                            imgSource={require('../images/5_Acc_ico_8_Contact.png')}
                            optionName='Contact Support'
                            reportCount={0}
                        />
                        <OptionButton
                            imgSource={require('../images/5_Acc_ico_9_rate.png')}
                            optionName='Rate for us'
                            reportCount={0}
                        />
                        <OptionButton
                            imgSource={require('../images/5_Acc_ico_10_share.png')}
                            optionName='Share to friend'
                            reportCount={0}
                        />
                        <TouchableOpacity
                            style={styles.viewUpdateOption}
                        >
                            <View
                                style={styles.viewImgOption}
                            >
                                <Image
                                    source={require('../images/5_Acc_ico_11_refresh.png')}
                                />
                            </View>
                            <View
                                style={styles.viewOptionName}
                            >
                                <Text
                                    style={styles.txtOptionName}
                                >
                                    Refresh update
                                </Text>
                                <Text
                                    style={styles.txtVersion}
                                >
                                    v1.2.44
                                    </Text>
                                <Image
                                    source={require('../images/right-arrow.png')}
                                    style={styles.imgNextArrow}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={{
                            ...styles.viewOptionContainer,
                            height: 60,
                            flexDirection: 'row'
                        }}>
                        <Text
                            style={styles.txtLogout}
                        >
                            Logout
                            </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    };
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f8ff',

    },
    viewInformation: {
        flex: 1,
        height: 200,
        backgroundColor: 'white',
        margin: 15
    },
    viewProfile:
    {
        margin: 15,
        flexDirection: 'row',
        flex: 4
    },
    imgProfile:
    {
        borderRadius: 150 / 2,
        width: 100,
        height: 100
    },
    btnQRCode:
    {
        flex: 1,
        width: 30,
        margin: 15
    },
    viewOptionContainer:
    {
        flex: 1,
        backgroundColor: 'white',
        marginBottom: 10,
    },
    viewManageOption: {
        flexDirection: 'row',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        marginLeft: 15,
        marginRight: 15
    },
    txtAgency:
    {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        flex: 5
    },
    viewOptionName:
    {
        flexDirection: 'row',
        marginRight: 15,
        marginLeft: 15,
        flex: 1,
        height: 60,
        alignContent: 'center',
        alignItems: 'center'
    },
    txtOptionName:
    {
        fontSize: 18,
        color: 'black',
        flex: 5
    },
    viewUpdateOption:
    {
        flex: 1,
        backgroundColor: 'white',
        height: 60,
        flexDirection: 'row',

    },
    imgNextArrow:
    {
        width: 5,
        height: 10,
    },
    txtVersion:
    {
        fontSize: 18,
        marginRight: 5,
        color: 'darkgrey'
    },
    txtLogout:
    {
        marginLeft: 30,
        color: '#ff1493',
        fontSize: 18,
        alignSelf: 'center'
    },
    viewImgOption:
    {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30
    },
    txtManageBtn:
    {
        color: 'seagreen',
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default AccountScreen;
