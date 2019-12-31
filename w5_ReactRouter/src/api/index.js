
import axios from 'axios';

const Nsg = axios.create({
    baseURL: 'https://www.nanshig.com/mobile/index.php'
  });

export const get = async (params,config={})=>{
    let {data} = await Nsg.get('',{
        ...config,
        params
    })

    return data;
}

export default {
    get
}