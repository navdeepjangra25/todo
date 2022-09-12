import * as actionTypes from './shopping-types'

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: {
            products: products
        }
    }
}

export const addToCart = (itemID) => {
    console.log(itemID);
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}

export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}

export const adjustQty = (itemID, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value
        }
    }
}

export const loadCurrentItem = (item, value) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
}