
let initState = {
    user:{}
}

const reducer = function(state=initState,{type,payload}){
    switch(type){
        // {type:'login',payload:userInfo}
        case 'login':
            return {
                ...state,
                user:payload
            }
        case 'logout':
            return {
                ...state,
                user:{}
            }
        default:
            return state;
    }
}

export default reducer;