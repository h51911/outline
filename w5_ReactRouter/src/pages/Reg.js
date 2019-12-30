import React,{Component} from 'react';

import {withStorage} from '../utils/hoc'

class Reg extends Component{
    render(){
        return <div>

           Reg

        </div>
    }
}

Reg = withStorage(Reg);

export default Reg;