import * as actionTypes from './shopping-types'

const INITIAL_STATE = {
    products: [],
    cart: [],
    currentItem: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.SET_PRODUCTS:
            return {
               ...state,
               products:action.payload.products
            }
        case actionTypes.ADD_TO_CART:
            const item = state.products.find(prod => prod.id === action.payload.id)
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
            console.log(item,inCart);
            return {
                ...state,
                cart: inCart ? state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1} : item) : [...state.cart, {...item, qty:1}]
            }
        case actionTypes.REMOVE_FROM_CART:
            return {}
        case actionTypes.ADJUST_QTY:
        return {}
        case actionTypes.LOAD_CURRENT_ITEM:
            return {}
        default:
        return state
    }
}

export default shopReducer