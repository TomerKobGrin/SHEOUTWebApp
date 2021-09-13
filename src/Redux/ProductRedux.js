import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    addProductToBag: ['item', 'amount'],
    fetchProducts: [],
    fetchProductsSuccess: ['items'],
    fetchProductsFailure: ['error'],
    resetState: [],
    removeItemFromBag: ['itemTitle'],
    lowerItemAmountInBag: ['itemTitle'],
    submitOrder: [],
    submitOrderSucess: [],
    submitOrderFailure: [],
    resetBag: []
},
    { prefix: 'PRODUCT_' }
)

export const ProductTypes = Types
export const ProductActions = Creators
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    items: null,
    bag: {},
    fetchItemsError: null,
    isUploadingOrder: false
})

/* ------------- Selectors ------------- */

export const ProductSelectors = {
    getItems: state => state.product.items,
    getUserBag: state => state.product.bag,
    getOverallItemsInBag: state => {
        const itemsInBag = state.product.bag
        let numberOfItemsInBag = 0
        if (itemsInBag && Object.keys(itemsInBag).length > 0) {
            numberOfItemsInBag = Object.values(itemsInBag).reduce((a, b) => { return { count: a.count + b.count } }).count
        }
        return numberOfItemsInBag
    },
    getOverallPrice: state => {
        const itemsInBag = state.product.bag
        let numberOfItemsInBag = 0
        if (itemsInBag && Object.keys(itemsInBag).length > 0) {
            numberOfItemsInBag = Object.values(itemsInBag).map(item => item.count * item.price).reduce((a, b) => a + b)
        }
        return numberOfItemsInBag
    },
    getIsUploadingOrder: state => state.product.isUploadingOrder
}

/* ------------- Reducers ------------- */

const addProductToBag = (state, { item, amount }) => {
    const currentBag = state.bag
    let updatedBag = { ...currentBag }
    let bagItem = currentBag[item.title]
    if (bagItem) {
        updatedBag[item.title] = { ...bagItem, count: bagItem.count + amount }
    } else {
        updatedBag[item.title] = { ...item, count: amount }
    }
    return state.merge({ bag: updatedBag })
}
const lowerItemAmountInBag = (state, { itemTitle }) => {
    const currentBag = state.bag
    const bagItem = currentBag[itemTitle]
    let updatedBag = { ...currentBag }
    if (bagItem.count == 1) {
        delete updatedBag[itemTitle]
    } else {
        updatedBag[itemTitle] = { ...bagItem, count: bagItem.count - 1 }
    }

    return state.merge({ bag: updatedBag })
}
const removeItemFromBag = (state, { itemTitle }) => {
    const currentBag = state.bag
    let updatedBag = { ...currentBag }
    delete updatedBag[itemTitle]
    return state.merge({ bag: updatedBag })
}
const fetchProducts = (state) => {
    return state.merge({ error: null })
}

const fetchProductsSuccess = (state, { items }) => {
    return state.merge({ items, error: null })
}
const fetchProductsFailure = (state, { error }) => {
    return state.merge({ error })
}
const submitOrder = (state) => {
    return state.merge({isUploadingOrder: true,})
}

const submitOrderSucess = (state) => {
    return state.merge({bag: {}, isUploadingOrder: false})
}

const submitOrderFailure = (state) => {
    return state.merge({isUploadingOrder: false})
}

const resetState = (state) => {
    return INITIAL_STATE
}

const resetBag = (state) => {
    return state.merge({bag: {}, isUploadingOrder: false})
}



/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.ADD_PRODUCT_TO_BAG]: addProductToBag,
    [Types.FETCH_PRODUCTS]: fetchProducts,
    [Types.FETCH_PRODUCTS_SUCCESS]: fetchProductsSuccess,
    [Types.FETCH_PRODUCTS_FAILURE]: fetchProductsFailure,
    [Types.RESET_STATE]: resetState,
    [Types.RESET_BAG]: resetBag,
    [Types.REMOVE_ITEM_FROM_BAG]: removeItemFromBag,
    [Types.LOWER_ITEM_AMOUNT_IN_BAG]: lowerItemAmountInBag,
    [Types.SUBMIT_ORDER]: submitOrder,
    [Types.SUBMIT_ORDER_SUCESS]: submitOrderSucess,
    [Types.SUBMIT_ORDER_FAILURE]: submitOrderFailure
})
