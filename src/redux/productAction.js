import {PRODUCT_LIST} from  "./variable"

export const productList = (data) =>{
    return {
        type: PRODUCT_LIST,
        data
    }
}