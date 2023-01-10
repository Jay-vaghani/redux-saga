import { Add_TO_Cart, EMPTY_CART, Remove_FROM_Cart } from "./variable"


export const addToCart = (data) => {
    console.warn("action is called", data)
    return {
        type: Add_TO_Cart,
        data
    }
}

export const removeFromCart = (data) => {
    console.log("removeCart action call");
    return {
        type: Remove_FROM_Cart,
        data
    }
}

export const emptyCart = () => {
    console.log("removeCart action call");
    return {
        type: EMPTY_CART,
    }
}



