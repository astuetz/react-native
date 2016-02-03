/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid
} from 'react-native';

const TOOLBAR_HEIGHT = 56;
const CONTENT_INSET_START = 72;

class astuetz extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid 
          style={styles.toolbar} 
          title={'React Native'} 
          titleColor={'#FFFFFF'}
          navIcon={require('./img/ic_arrow_back_white.png')}
          contentInsetStart={CONTENT_INSET_START} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    backgroundColor: '#3F51B5',
    height: TOOLBAR_HEIGHT
  }
});

AppRegistry.registerComponent('astuetz', () => astuetz);
