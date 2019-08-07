import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AccountScreen from './AccountScreen';
import ToolManagementScreen from './ToolManagementScreen';
import RequirementScreen from './RequirementScreen';
import RequirementTest from './RequirementTest';

class App extends Component {

    render() {
        return (
            <RequirementTest />
        );
    }
}

export default App;
