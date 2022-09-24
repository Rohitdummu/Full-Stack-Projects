let nid = 0
const reducer = (state = [], action)=>{
    if(action.type === 'ADD'){
        return [...state,{
            desc:action.payload.desc,
            resl: false,
            id: ++nid
        }]
    }
    else if(action.type === 'REMOVE'){
        return state.filter((item)=>item.id !== action.payload.id)
    }

    return state
}

export default reducer;