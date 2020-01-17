import React from 'react';

import {Picker,View,Text,Switch} from 'react-native'

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            language:'js',
            single:true
        }
    }
    render(){
        return (
            <View>
                <Picker
                selectedValue={this.state.language}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})
                }>
                    <Picker.Item label="HTML" value="HTML" />
                    <Picker.Item label="Css" value="Css" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="NodeJS" value="nodejs" />
                    <Picker.Item label="Java" value="java" />
                </Picker>

            <Text>是否单身：{this.state.single ? '单身':'有主'}</Text>
            <Switch value={this.state.single} onValueChange={(value)=>{
                this.setState({
                    single:value
                })
            }}/>
            </View>
        )
    }
}

export default Home;