export const addToCart = (data) =>{
    console.log("Action call", data);
    return {
        type: "Add Cart",
        data: data
    }
}