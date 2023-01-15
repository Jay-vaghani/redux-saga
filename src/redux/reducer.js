import { Add_TO_Cart, Remove_FROM_Cart, EMPTY_CART } from "./variable";

const dataArr = []

export const cartData = (data = dataArr, action) => {


    switch (action.type) {
        case Add_TO_Cart:
            return [action.data, ...data]
        case Remove_FROM_Cart:

            console.log("action data",action.data);

            const remainingItems = data.filter((item) => {
                return item.id !== action.data
            }) 
            return [...remainingItems]
        case EMPTY_CART:
            data = []
            return data
        default:
            return data
    }
}
