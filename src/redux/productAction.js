import axios from "axios"
import { PRODUCT_LIST, SEARCH_PRODUCT_LIST } from "./variable"

export const productList = () => {
    return {
        type: PRODUCT_LIST,
    }
}

export const searchProduct = (data) =>{
    return{
        type: SEARCH_PRODUCT_LIST,
        data
    }
}