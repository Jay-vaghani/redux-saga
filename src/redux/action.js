import { Add_Cart, Remove_Cart, Temp_Cart } from "./variable"

export const addToCart = (data) =>{
    return {
        type: Add_Cart,
        data: data
    }
}

export const removeToCart = (data) =>{
    return {
        type: Remove_Cart,
        data: data
    }
}


export const tempCart = (data) =>{
    return {
        type: Temp_Cart,
        data: data
    }
}


