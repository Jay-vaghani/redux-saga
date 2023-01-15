import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import productSaga from './productSaga'
import createSagaMiddleware from '@redux-saga/core'


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: () => {
        return [sagaMiddleware]
    }
})

sagaMiddleware.run(productSaga)

export default store