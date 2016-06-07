import Immutable from 'immutable'
import { ADD_ITEM, DELETE_ITEM, DELETE_ALL } from '../constants/actionTypes'

const initialItems = Immutable.List([{name:'jone',num:1},{name:'object',num:2},{name:'mocha',num:3}])

//console.log(initialItems,initialItems.get(2)); 

export default function items(state = initialItems, action) {
    switch(action.type) {
        case ADD_ITEM: 
            var items={name:'jone_'+state.get(-1).num + 1,num:( state.size !== 0 ? state.get(-1).num + 1 : 1 )};
            return state.push(items);
        case DELETE_ITEM: 
            return state.delete(state.indexOf(action.item))
        case DELETE_ALL:
            return state.clear()
        default:
            return state
    }
}
