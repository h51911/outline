import React,{Component} from 'react';

import {withStorage} from '../utils/hoc';

@withStorage
class Home extends Component{
    // componentDidMount(){
    //     let user = localStorage.getItem('user');
    //     user = JSON.parse(user);
    //     this.setState({
    //         user
    //     })
    // }
    render(){
        // this.props.user
        console.log('Home',this.props)
        return <div>

           Home

        </div>
    }
}

// Home = withStorage(Home);

export default Home;