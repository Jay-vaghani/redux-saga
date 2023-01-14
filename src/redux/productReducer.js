import { PRODUCT_LIST } from "./variable";


export const productData = (data = [], action) => {
    switch (action.type) {
        case PRODUCT_LIST:
            return action.data
    
        default:
            return "No Action Called"
    }
}