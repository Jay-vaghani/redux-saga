import axios from "axios"
import { PRODUCT_LIST } from "./variable"

export const productList = () => {
    return {
        type: PRODUCT_LIST,
    }
}