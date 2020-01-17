import React from 'react';

import {View,ScrollView} from 'react-native';
import {Button,SearchBar,Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function RNE(){
    let [keyword,changeKeyword] = React.useState('1911')
    return (
        <ScrollView>
            <Text>React-Native-Elements UI组件库测试</Text>
            <SearchBar
                 placeholder="Type Here..."
                 onChangeText={(value)=>{
                    changeKeyword(value)
                 }}
                 value={keyword}
             />
             <Button
             title="搜索"
             icon={
                <Icon
                  name="search"
                  size={15}
                  color="white"
                />
              }
             ></Button>
             <Text>测试。。。</Text>
        </ScrollView>
    )
}

export default RNE;