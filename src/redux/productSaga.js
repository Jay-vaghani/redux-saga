import { put, takeEvery } from "redux-saga/effects"
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./variable"


function* getProducts() {
    let data = yield fetch("https://dummyjson.com/products/").then((response) => response.json())

    yield put({type: SET_PRODUCT_LIST, data: data})
}

function* productSaga() {

    yield takeEvery(PRODUCT_LIST, getProducts)

}

export default productSaga
