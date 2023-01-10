import { Add_Cart, Remove_Cart, Temp_Cart } from "./variable";

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


export const tempData = (data = dataArr, action) => {


    switch (action.type) {
        case Temp_Cart:
            console.log("Temp To Cart" ,action.data);
            return "abc"
            break;
        default:
            return "abc"
    }
}
