
import axios from 'axios';

const My = axios.create({
    baseURL: 'http://localhost:3000'
  });

export const get = async (url,params,config={})=>{
    let {data} = await My.get(url,{
        ...config,
        params
    })

    return data;
}

export default {
    get
}