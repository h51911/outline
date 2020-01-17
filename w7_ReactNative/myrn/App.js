/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//  React 16.8新特性：HOOK
import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  Button,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Home from './components/Home'
import RNE from './components/Rnelement'

const App: () => React$Node = () => {
  console.log(123)
  function onChangeText(text){
    Alert.alert('事件处理函数', text,[
      {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],)
  }
  // useState(defaultValue) ， devalutValued等效于在类组件中的this.state = {}
  // 创建一个state,默认值为1，返回一个数组包含state的值(qty)以及修改它的方法(changeQty)
  const [qty, changeQty] = useState(10);//[state,changeState]

  // changeQty(10) // 修改qty的值为10，并自动刷新组件，等效于this.setState({qty:10})

  return (
    <>
          <Header />
          <Text style={{fontSize:30,color:'#f00'}}>Hello laoxie</Text>
          <View style={styles.body}>
            <Text style={{fontSize:30,color:'#58bc58'}}>Hello jingjing</Text>
            <Image
              style={{width: 50, height: 50}}
              source={require('./img/g1.jpg')}
            />
          </View>
          <TextInput 
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={onChangeText}
          />

          <Button title={"改变数量"+qty} onPress={()=>{
            changeQty(qty+1);
          }}/>

          <Home/>

          <RNE/>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
