import NsgApi from './nsg';
import MyApi from './myweb';

export const Nsg = NsgApi; 
export const My = MyApi; 
export default {
    Nsg:NsgApi,
    My:MyApi
}