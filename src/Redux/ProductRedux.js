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
}

/* ------------- Reducers ------------- */

const addProductToBag = (state, {item }) => {
    debugger
  return state.merge({})
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
