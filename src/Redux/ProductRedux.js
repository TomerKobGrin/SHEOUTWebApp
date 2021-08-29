import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    addProductToBag: ['item'],
    fetchProducts: [],
    fetchProductsSuccess:['items'],
    fetchProductsFailure:['error']
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
   fetchItemsError: null
})

/* ------------- Selectors ------------- */

export const ProductSelectors = {
    getItems: state => state.product.items,
    getUserBag: state =>  state.product.bag,
    getOverallItemsInBag: state => {
        const itemsInBag = state.product.bag
        let numberOfItemsInBag = 0
        if (itemsInBag && Object.keys(itemsInBag).length > 0){
            numberOfItemsInBag = Object.values(itemsInBag).reduce((a,b) => {return {count: a.count + b.count}}).count
        }
        return numberOfItemsInBag
    }
}

/* ------------- Reducers ------------- */

const addProductToBag = (state, { item }) => {
    const currentBug = state.bag
    let updatedBag = {...currentBug}
    let bagItem = currentBug[item.title]
    if (bagItem) {
        updatedBag[item.title] = {...bagItem, count: bagItem.count + 1}
    } else {
        updatedBag[item.title] = {...item, count: 1}
    }
    return state.merge({bag: updatedBag, overallItemsInBag: state.overallItemsInBag + 1})
}
const fetchProducts = (state) => {
    return state.merge({error: null})
}

const fetchProductsSuccess = (state, {items}) => {
    return state.merge({items, error: null})
}
const fetchProductsFailure = (state, {error}) => {
    return state.merge({error})
}



/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_PRODUCT_TO_BAG]: addProductToBag,
  [Types.FETCH_PRODUCTS]: fetchProducts,
  [Types.FETCH_PRODUCTS_SUCCESS]: fetchProductsSuccess,
  [Types.FETCH_PRODUCTS_FAILURE]: fetchProductsFailure,
})
