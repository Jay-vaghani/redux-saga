import { put, takeEvery } from "redux-saga/effects"
import { PRODUCT_LIST, SEARCH_PRODUCT_LIST, SET_PRODUCT_LIST } from "./variable"

function* getProducts() {
    let data = yield fetch("https://dummyjson.com/products/").then((response) => response.json())

    yield put({type: SET_PRODUCT_LIST, data: data})
}


function* searchProduct(searchData) {

    let data = yield fetch(`https://dummyjson.com/products/search?q=${searchData.data}`).then((response) => response.json())

    yield put({type: SET_PRODUCT_LIST, data: data})
}

function* productSaga() {

    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT_LIST, searchProduct)

}

export default productSaga
