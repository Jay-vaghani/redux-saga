import { Add_TO_Cart, Remove_FROM_Cart, EMPTY_CART } from "./variable";

const dataArr = []

export const cartData = (data = dataArr, action) => {


    switch (action.type) {
        case Add_TO_Cart:
            return [action.data, ...data]
        case Remove_FROM_Cart:
            data.length = data.length ? data.length - 1 : []
            return [...data]
        case EMPTY_CART:
            data = []
            return data
        default:
            return data
    }
}
