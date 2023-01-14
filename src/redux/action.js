import { Add_TO_Cart, EMPTY_CART, Remove_FROM_Cart } from "./variable"


export const addToCart = (data) => {
    return {
        type: Add_TO_Cart,
        data
    }
}

export const removeFromCart = (data) => {
    return {
        type: Remove_FROM_Cart,
        data
    }
}

export const emptyCart = () => {
    return {
        type: EMPTY_CART,
    }
}



