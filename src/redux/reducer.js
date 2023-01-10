import { Add_Cart, Remove_Cart } from "./variable";

const dataArr = []

export const cartData = (data = dataArr, action) => {


    switch (action.type) {
        case Add_Cart:
            console.log("Add To Cart" ,action.data);
            return "abc"
            break;
        case Remove_Cart:
            console.log("Remove To Cart" ,action.data);
            return "abc"
            break;
        default:
            return "abc"
    }
}